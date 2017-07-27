/**
 * Created by huadu on 7/26/17.
 */
function rangeBetween(num1,num2) {
    let arr=[];
    let t=0;
    if(num1>num2){
        t=num2;
        num2=num1;
        num1=t;
    }
    for (let i=num1;i<=num2;i++){
        arr.push(i)
    }
    return arr;
}
console.log(rangeBetween(8,4));


function union(arr1,arr2) {
    let unionarr=arr2;
    for (let i=0;i<arr1.length;i++){
        let index=arr2.indexOf(arr1[i]);
        if (index>=0){
            continue
        }else {
            unionarr.push(arr1[i])
        }
    }
    unionarr=unionarr.sort(function (a,b) {
        return a-b;
    });
    return unionarr;
}
console.log(union([1,2,3],[100,2,1,10]));