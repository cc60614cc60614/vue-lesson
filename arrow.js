//以下3寫法結果相同
//1
const square = (x) =>{
    return x * x;
}
//2
const square2 = x =>{
    return x * x;
}
//3
const squre3 = x => x * x;

//回傳物件需用()包住
const makePoint = (x,y) => ({x,y})
const p = makePoint(1,2)
console.log(p);