// Write your solution in this file!
const driver = {name: "Sam"};
function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = Object.assigm({}, driver);
  newDriver["address"] = "11 Broadway"
  };
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver["address"] = "12 Broadway";
};
