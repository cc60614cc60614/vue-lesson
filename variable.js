//
const name ='John'
const a = `${name} Hello`;
console.log(a);

//
const point = { x:1, y:2 };
console.log(point);

//
const numbers = [1, 2, 3, 4];
console.log(numbers);

//具名函式
function print(){
    console.log('fuction print');
}
print();

//匿名函式
const print2 = function(){
    console.log('fuction print 2')
}
print2();

//箭頭函式 常用!
const print3 = () => {
    console.log('fuction print 3')
}
print3();

const obj = {
    print(){
        console.log('method print');
    },

    print2: function(){
        console.log('method print2');
    },

    print3: () => {
        console.log('method print3');
    }

}

obj.print();
obj.print2();
obj.print3();
