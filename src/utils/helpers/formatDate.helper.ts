
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const formatDate = ():string => { // format date to this format 'Friday 20, 2020'
  const currentDate = new Date();

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const year = currentDate.getFullYear();

  // Format the date
  const formattedDate = dayOfWeek + " " + dayOfMonth + ", " + year;
  return formattedDate;
};

export const getDay = (date:string):string=>{ // get day name trimmed, ex:Tue
    const currentDate = new Date(date);
    const dayOfWeek = daysOfWeek[currentDate.getDay()].substring(0,3);
    return dayOfWeek;

}


