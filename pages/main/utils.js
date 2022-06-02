export const id = (id) => document.getElementById(id);
export const classes = (classes) => document.getElementsByClassName(classes);

export const getData = async () => {
  const response = await fetch('./pets.json');
  const booksList = await response.json();
  console.log(booksList);
  return booksList;
};
