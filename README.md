# lite-uuid-v4
This is the slice of popular npm package `uuid` The `uuid` package hosts all versions of UUID - 1,2,3,4,5 and probably will host future versions as well. Yet what I often need is the UUID v4. Which is known as a random string.


`npm i lite-uuid-v4`


```javascript
const uuid = require('lite-uuid-v4');
console.log('Uuid v4: ', uuid())
```
