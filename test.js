const uuid = require('./index');

for(let a = 1; a < 10000; a++) {
  console.log(uuid());
}
