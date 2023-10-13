// TO DO: Optimize the code!!! 50 points
function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/forecaster";
    const location = document.getElementById(`location`);
    const btn = document.getElementById(`submit`);
    btn.addEventListener(`click`, addEvent);
    const forecast = document.querySelector(`#forecast`);
    const current = document.querySelector(`#current`);
    const upcoming = document.querySelector(`#upcoming`);
  
    const sunny = `&#x2600`; // ☀
    const partlySunny = `&#x26C5`; // ⛅
    const overCast = `&#x2601`; // ☁
    const rain = `&#x2614`; // ☂
    const degrees = `&#176`; // °
  
    let code = ``;
  
    const divCurrent = createEl(`div`, `forecasts`);
  
    const divUpcoming = createEl(`div`, `forecasts-info`);
  
    function addEvent(e) {
      divCurrent.replaceChildren(); //
      divUpcoming.replaceChildren(); //
      forecast.style.display = `inline`;
      if (location.value == ``) {
        forecast.textContent = "Error"
        return;
      }
  
      fetch(`${baseUrl}/locations`)
        .then((res) => res.json())
        .then((data) => {
          data.forEach((element) => {
            if (element.name == location.value) {
              return (code = element.code);
            }
          });
  
          // debugger;
          fetch(`${baseUrl}/today/${code}`)
            .then((res) => res.json())
            .then((data) => {
              const span1 = createEl(`span`, `condition symbol`);
              divCurrent.appendChild(span1);
              const span2 = createEl(`span`, `condition`);
              divCurrent.appendChild(span2);
              const span3 = createEl(`span`, `forecast-data`, `${data.name}`);
              span2.appendChild(span3);
              const span4 = createEl(`span`, `forecast-data`);
              span4.innerHTML = `${data.forecast.low}${degrees}/${data.forecast.high}${degrees}`;
              span2.appendChild(span4);
              const span5 = createEl(
                `span`,
                `forecast-data`,
                `${data.forecast.condition}`
              );
              span2.appendChild(span5);
  
              if (data.forecast.condition == `Sunny`) {
                span1.innerHTML = sunny;
              } else if (data.forecast.condition == `Partly sunny`) {
                span1.innerHTML = partlySunny;
              } else if (data.forecast.condition == `Overcast`) {
                span1.innerHTML = overCast;
              } else if (data.forecast.condition == `Rain`) {
                span1.innerHTML = rain;
              }
              current.appendChild(divCurrent);
            })
            .catch((err) => {
              forecast.textContent = "Error";
            });
          fetch(`${baseUrl}/upcoming/${code}`)
            .then((response) => response.json())
            .then((data) => {
              for (const forecast of data.forecast) {
                const span1 = createEl(`span`, `upcoming`);
                divUpcoming.appendChild(span1);
  
                const span2 = createEl(`span`, `symbol`);
                span1.appendChild(span2);
                const span3 = createEl(`span`, `forecast-data`);
                span3.innerHTML = `${forecast.low}${degrees}/${forecast.high}${degrees}`;
                span1.appendChild(span3);
                const span4 = createEl(
                  `span`,
                  `forecast-data`,
                  `${forecast.condition}`
                );
                span1.appendChild(span4);
  
                if (forecast.condition == `Sunny`) {
                  span2.innerHTML = sunny;
                } else if (forecast.condition == `Partly sunny`) {
                  span2.innerHTML = partlySunny;
                } else if (forecast.condition == `Overcast`) {
                  span2.innerHTML = overCast;
                } else if (forecast.condition == `Rain`) {
                  span2.innerHTML = rain;
                }
  
                upcoming.appendChild(divUpcoming);
              }
            })
            .catch((err) => {
              forecast.textContent = "Error";
            });
        })
        .catch((err) => {
          forecast.textContent = "Error";
        });
        // attachEvents();
    }
    function createEl(type, className, content) {
      const element = document.createElement(type);
      element.className = className;
      element.textContent = content;
      return element;
    }
  }
  
  attachEvents();
  