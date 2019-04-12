// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  let drivers = Object.assign({}, driver, {[key]: value})
  return drivers;
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];  //delete driver.key not working
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {

  delete driver[key]; //delete driver.key not working
  return driver;
}
