/**
 * エラトステネスの篩で素数判定
 */

const getPrimeNumbers = (maximum:number) =>{
let list = [...Array(maximum)].map((_,i)=>i + 1) // 1 ~ maximumまでの数字配列 [1,2,3,....,maximum]
list.shift() // 1を除外

for(let i = 0; i + 1 < list.length;i ++ ){ // 数字配列の長さ分ループ
  if(!list[i]) break; // インデックスで数字配列にアクセスできなくなれば（ふるい落とされきったら）ループ終了

  // 現在の数字の倍数をふるい落としていく （ただし現在の数字そのものは残す）
  list = list.filter(num=>(num === list[i] ) || (num % list[i] !== 0))
}

return list
}

console.log(getPrimeNumbers(50))
