function attachEventsListeners() {
  const buttons = Array.from(document.querySelectorAll('input[type="button"]'));
  buttons.forEach((el) => el.addEventListener(`click`, onConverter));

  let days = document.getElementById(`days`);
  let hours = document.getElementById(`hours`);
  let minutes = document.getElementById(`minutes`);
  let seconds = document.getElementById(`seconds`);

  let obj = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };

  function result(num, str) {
    let days = num / obj[str];
    return {
      days: days,
      hours: days * obj.hours,
      minutes: days * obj.minutes,
      seconds: days * obj.seconds,
    };
  }

  function onConverter(event) {
    let input = event.target.parentElement.children[1];
    // console.log(Number(input.value),input.id);
    let time = result(Number(input.value), input.id);

    days.value = time.days;
    hours.value = time.hours;
    minutes.value = time.minutes;
    seconds.value = time.seconds;
  }
}
