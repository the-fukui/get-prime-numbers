/**
 * エラトステネスの篩で素数判定
 */

const getPrimeNumbers = (maximum: number) => {
  let list = [...Array(maximum)].map((_, i) => i + 1); // 1 ~ maximumまでの数字配列 [1,2,3,....,maximum]
  list.shift(); // 1を除外

  const primeNumbers: number[] = [];

  for (;;) {
    if (list[0] > Math.sqrt(maximum)) break;

    // 0番目の数字は必ず素数なので素数配列に格納
    primeNumbers.push(list[0]);

    // 現在ループ中の数字の倍数をふるい落としていく
    // filteredlistは、「現在ループ中の数字より大きい」 && 「素数の可能性がある数字」
    const filteredList: number[] = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i] % list[0] !== 0) filteredList.push(list[i]);
    }
    list = filteredList;
  }

  return [...primeNumbers, ...list];
};

console.time('eratosthenes');
console.log(getPrimeNumbers(100));
console.timeEnd('eratosthenes');
