const repeatString = function(palabra, veces) {
if (veces < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < veces; i++) {
    string += palabra;
  }
  return string;
};


// Do not edit below this line
module.exports = repeatString;
