export function numberWithCommas(num: number) {
  if (num === undefined) {
    return '0';
  } else {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}