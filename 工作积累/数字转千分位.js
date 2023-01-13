(123456789.2333).toLocaleString('en-US');

function numberWithCommas(X) {
  return X.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
}
console.log(numberWithCommas(1223213214214))