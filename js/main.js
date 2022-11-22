const getRandomInt = (min, max, digits) => {
  if (min < 0 || max < 0) return -1;
  if (min > max) {
    [min, max] = [max, min]
  }
  return (Math.random() * (max - min + 1) + min).toFixed(digits);
}

// console.log(getRandomInt(1, 10, 3));

const stringCount = (text, sign) => {
  return text.length <= sign;
}

// console.log(stringCount('Проверка', 5));
