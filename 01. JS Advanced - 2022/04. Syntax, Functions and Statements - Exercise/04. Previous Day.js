function previousDay(year, month, day) {
  let newDate = new Date(year, month - 1, day - 1);
  let nextYear = newDate.getFullYear();
  let nextMonth = newDate.getMonth() + 1;
  let previousDay = newDate.getDate();

  console.log(`${nextYear}-${nextMonth}-${previousDay}`);
}
previousDay(2016, 9, 30);
previousDay(2016, 10, 1);
