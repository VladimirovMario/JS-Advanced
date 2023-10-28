document.getElementById(`form`).addEventListener(`submit`,onSubmit)


async function onSubmit(event) {
    event.preventDefault()
    // console.log(event);  
    const data = new FormData(event.target)
    // console.log(data); 
    // console.log(Array.from(data.entries())) //Array [ (2) […], (2) […] ]

    const article = {
        title: data.get(`title`),
        content: data.get(`content`)
    }
    
    const response = await fetch("http://localhost:3030/jsonstore/demo",{
        method: `post`,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(article)
    })
    
    const dataResponse = await response.json()
    // Object { title: "Some", content: "Article", _id: "03f69c58-f0b7-4371-b163-945534070361" }
    console.log(dataResponse);
}   