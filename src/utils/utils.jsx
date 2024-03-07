// Function to convert date
// Date converted from 12 Jan 2002 to 12.01.02

export const movieDateHander = (date) => {
  let newDate = new Date(date);
  const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
  let newDateFormat = newDate.toLocaleDateString("en-GB", options);
  return newDateFormat.split("/").join(".");
};
