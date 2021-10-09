const fs = require("fs");

function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}
const newObject = {
  name: "Union corporation.",
  order_count: 6,
  address: "Delhi City",
};
fs.writeFile(
  "./newCustomer.json",
  JSON.stringify(newObject, null, 2),
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File successfully written");
    }
  }
);
