import { getAll, getMyItems } from "../api/data.js";
import { html, until , nothing} from "../lib.js";
import { getUserData, parseQueryString } from "../util.js";

const catalogTemplate = (dataPromise, userPage, page , onSearch, search) => html`
<div class="row space-top">
    <div class="col-md-12">
        ${userPage
        ? html`<h1>My Furniture</h1>
        <p>This is a list of your publications.</p>`
        : html`<h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p> `}
    </div>

    <div class="section-search">
        <form @submit=${onSearch}>
            <input class="search-control" type="text" name="search" .value=${search}>
            <input class="pager btn btn-info" type="submit" value="Search">

        </form>
    </div>
    
</div>

<div class="row space-top">
    ${until(dataPromise, html`<p>
    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </p>`)}
</div>
`;

const pagerTemplate = (page, pages, search) => html`
<div class="containter" >
    ${page > 1 ? html`<a class="pager btn btn-info" href=${`${createPageHref(page, -1, search)}`}>&lt;&lt;Prev</a>`: nothing }
    ${page ? html `<a class='pager'>Page: ${page} of ${pages}</a>`: nothing}
    ${page < pages ? html`<a class="pager btn btn-info" href="${createPageHref(page, 1, search)}">Next&gt;&gt;</a>` : nothing}   
</div>
`

const itemTemplate = (item) => html`
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src=${item.img} />
            <p>${item.description}</p>
            <footer>
                <p>Price: <span>${item.price} $</span></p>
            </footer>
            <div>
                <a href="/details/${item._id}" class="btn btn-info">Details</a>
            </div>
        </div>
    </div>
</div>
`;

function createPageHref(page, step , search) {
    return `?page=${page + step}` + (search ? `&search=${search}` : '')
}
    

export function catalogPage(ctx) {
// Array [ (2) […], (2) […] ]
// 0: Array [ "search", "sofa" ]
// 1: Array [ "page", "3" ]
// length: 2
// console.log(parseQueryString(ctx.querystring));
 
    const query = parseQueryString(ctx.querystring)
    const page = Number(query.page || 1);
    const search = query.search || '';

    const userPage = ctx.pathname == "/my-furniture";
    
    ctx.render(catalogTemplate(loadItems(userPage, page , search),userPage, page, onSearch, search));

    function onSearch(event) {
        event.preventDefault()
        const formData = new FormData(event.target) 
        const searchParam = formData.get('search').trim()

        if(searchParam){
            ctx.page.redirect(`?search=${searchParam}`)
        } else {
            ctx.page.redirect('/')
        }
        
    }
}

async function loadItems(userPage, page, search) {
   
  let items = [];
  if (userPage) {
    const userId = getUserData().id;
    items = await getMyItems(userId);
  } else {
    items = await getAll(page , search);
  }
  return [
    pagerTemplate(page, items.pages, search),
     ...items.data.map(itemTemplate)];
}
