// const _sigFigs = 2;
const upperCase = false;
const prefix = '';
const suffix = '';
const abbrs = ['', 'k', 'm', 'b', 't'];

const roundDecimal = (float) => parseFloat((Math.round(float * 10) / 10).toString().substring(0, 3), 10);

// http://stackoverflow.com/questions/9743038/how-do-i-add-a-thousand-seperator-to-a-number-in-javascript/9743119#9743119
const addCommas = (n) => {
  const rx = /(\d+)(\d{3})/;
  return String(n).replace(/^\d+/, (w) => {
    let z = w;
    while (rx.test(z)) {
      z = z.replace(rx, '$1,$2');
    }
    return z;
  });
};

const Rounder = (number, options = {}) => {
  this.abbrs = options.abbrs || abbrs;
  this.upperCase = options.upperCase || upperCase;
  this.prefix = options.prefix || prefix;
  this.suffix = options.suffix || suffix;

  this.rawNumber = number;
  this.unit = abbrs[0];

  const num = parseFloat(number, 10);

  if (isNaN(num)) {
    console.error('Not a number', number); // eslint-disable-line
  }

  this.number = num;

  if (num < 1000) {
    return;
  }

  let cutOff = 1000;
  let unitIndex = 1;
  let tmpNumber = '';

  while (unitIndex < Object.keys(this.abbrs).length) {
    if (num < cutOff * 1000) {
      tmpNumber = num / cutOff;
      // For values under 10, like 9.28 to round to 9.3. For values over 10, simply round.
      this.number = tmpNumber < 10 ? roundDecimal(tmpNumber) : Math.round(tmpNumber);
      this.unit = this.abbrs[unitIndex];
      break;
    }

    unitIndex++;
    cutOff *= 1000;
  }
};

Rounder.prototype.toString = () => this.number() + this.unit();

Rounder.prototype.number = () => this.number;

Rounder.prototype.unit = () => this.suffix || this.unit;

Rounder.prototype.pretty = () => this.prefix + addCommas(this.rawNumber) + this.suffix;

export default Rounder;

// const favorites = new Rounder(9283);
// console.log(favorites.toString()); // 9.3k
// console.log(favorites.number()); // 9.3
// console.log(favorites.unit()); // m

// const favorites = new Rounder(95 {suffix: '%'});
// console.log(favorites.toString()); // 95%
// console.log(favorites.number()); // 95
// console.log(favorites.unit()); // %


// const favorites = new Rounder(1500 {suffix: '%'});
// console.log(favorites.toString()); // 1500%
// console.log(favorites.number()); // 1500
// console.log(favorites.unit()); // %
