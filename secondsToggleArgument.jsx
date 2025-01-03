//This does not use the seconds argument of the classlist toggle function
const toggleDarkMode = () => {
  const conditionForDarkMode = true;
  if (conditionForDarkMode) {
    document.body.classList.toggle('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
};
