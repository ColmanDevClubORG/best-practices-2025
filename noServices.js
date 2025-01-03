const filterDataAndSave = (data, filterCondition) => {
  const filteredData = data.filter(filterCondition);
  if (filteredData) {
    sessionStorage.setItem('filteredData', JSON.stringify(filteredData));
    return;
  }
  const item = sessionStorage.getItem('filteredData');
  return JSON.parse(item);
};

const filterDataByAnotherConditionAndSave = (data, filterCondition) => {
  const filteredData = data.filter(filterCondition);
  sessionStorage.setItem('filteredData', JSON.stringify(filteredData));
};
