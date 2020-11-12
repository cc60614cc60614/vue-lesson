//sort
const nums = [3,2,1,4,5,7,6,13,18,15,8,9];
nums.sort(
    function(a, b){
        return b-a;
    }
)
console.log(nums);

const nums2 = [
    {name:'John' ,age:'3'},
    {name:'Jenny' ,age:'1'},
    {name:'Jack' ,age:'4'},
    {name:'Joe' ,age:'10'},
    {name:'Jim' ,age:'5'},
];
nums2.sort(
    function(a, b){
        return b.age-a.age;
    }
)
console.log(nums2);


//filter
const filter_result = nums2.filter(
    (element) => {
        return (element.age % 2 === 0)
    }
)
console.log(filter_result);

//map
const map_result = nums2.map(
    (element) => {
        return element.name;
    }
)
console.log(map_result);

//foreach
const foreach_result = nums2.forEach(
    (element) => {
        console.log(element.age)
    }
)

//find
const person = nums2.find(
    function(element, idex, array){
        return element.name ==='John';
    }
)
console.log(person);
