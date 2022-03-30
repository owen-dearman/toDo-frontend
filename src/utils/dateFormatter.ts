export function dateFormatter(date: Date): string {
  // const today = new Date();
  const yyyy = date.getFullYear();
  let mm = (date.getMonth() + 1).toString(); // Months start at 0!
  let dd = date.getDate().toString();

  if (parseInt(dd) < 10) dd = "0" + dd;
  if (parseInt(mm) < 10) mm = "0" + mm;

  const dateToday = dd + "/" + mm + "/" + yyyy;
  return dateToday;
}
