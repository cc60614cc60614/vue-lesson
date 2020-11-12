// var,由1~5
for (var i = 0 ; i < 5; i++){
    setTimeout(
        function() {
        console.log(i);
    }
    , i*1000);
}

// let
console.log('let');
for (let k = 0 ; k < 5; k ++){
    setTimeout(
        function() {
            console.log(k);
        }
    , k*1000);
}