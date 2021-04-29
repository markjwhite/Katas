const talkingCalendar = (date) => {
  const oldDate = date.split('/');
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const month = months[oldDate[1] - 1];
  const year = oldDate[0];
  let day = oldDate[2];
  let newDate;

  if (oldDate[2][0] === '0') {
    day = day.slice(1);
  }
  if (day === '1' || day === '21' || day === '31') {
    day += 'st';
  } else if (day == '2' || day === '22') {
    day += 'nd';
  } else if (day === '3' || day === '23') {
    day += 'rd';
  } else {
    day += 'th';
  }
  newDate = `${month} ${day}, ${year}`;
  return newDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/23"));


