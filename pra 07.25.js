/**
 * Created by huadu on 7/25/17.
 */
function shuixianhua(){
    let sxarr=[];

    for(let num=100;num<1000;num++) {
        let numarr = num.toString().split("");
        numarr[0] = parseInt(numarr[0]);
        numarr[1] = parseInt(numarr[1]);
        numarr[2] = parseInt(numarr[2]);
        if (num === Math.pow(numarr[0], 3) + Math.pow(numarr[1], 3) +
                Math.pow(numarr[2], 3)) {
            sxarr.push(num)
        }
    }
return(sxarr)
    // console.log(numarr)

}
console.log(shuixianhua());

var array1=[1,3,4,2,2,2,5];
function zhuyuansu(arr) {
    let count=0;
    let countarr=[];
    for (let i=0;i<arr.length;i++){
        if (arr.indexOf(arr[i])>i){


        }
    }
}