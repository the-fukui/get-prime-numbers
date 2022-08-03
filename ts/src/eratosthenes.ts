/**
 * エラトステネスの篩で素数判定
 */

const getPrimeNumbers = (maximum: number) => {
  let list = [...Array(maximum)].map((_, i) => i + 1); // 1 ~ maximumまでの数字配列 [1,2,3,....,maximum]
  list.shift(); // 1を除外

  const primeNumbers: number[] = [];

  list.some((_, i) => {
    if (!list[0]) return true;

    // 0番目の数字は必ず素数なので素数配列に格納
    primeNumbers.push(list[0]);

    // 現在ループ中の数字の倍数をふるい落としていく
    // 更新後のlistは、「現在ループ中の数字より大きい」 && 「素数の可能性がある数字」
    list = list.filter((num) => num % list[0] !== 0);
  });

  return primeNumbers;
};

console.time('eratosthenes');
console.log(getPrimeNumbers(50));
console.timeEnd('eratosthenes');
