function double(arr,callback) {
    const newarr=arr.map((num) => {
        return callback(num);
    });
    return newarr;
}
function callback(num) {
    return num*2;
}
let originalarr=[1,2,3,4,5]

let org=double(originalarr,callback)
console.log(org);
