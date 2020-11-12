const point = {x:1, y:2, z:3};
console.log(point.x);

const {z,...othrPoint} = point;
console.log(z);
console.log(othrPoint);

const newPoint = {...point,z:3}
console.log(newPoint);