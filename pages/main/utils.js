const id = (id) => document.getElementById(id);
const classes = (classes) => document.getElementsByClassName(classes);

const getData = async () => {
  const response = await fetch('./pets.json');
  const booksList = await response.json();
  return booksList;
};

export { id, classes, getData };
