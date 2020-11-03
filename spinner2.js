const strArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n'];
let timeOut = 100;
strArr.forEach( (str) => {
  setTimeout(() => {
    process.stdout.write(str);
  }, timeOut);
    timeOut += 200;
});