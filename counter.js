let count = 0;

const increase = () => {
  if (count < 10) {
    count = count + 1;
  }
};
const decrease = () => {
  if (count > 0) {
    count = count - 1;
  }
};
const reset = () => {
  count = 0;
};
// 0=>1
// 1=>2
// 2=>3
// 3=>4
//4=>5
// 5=>6
// 6=>7
// 7=>8
// 8=>9
// 9=>10
