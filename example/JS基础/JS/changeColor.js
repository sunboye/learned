let colorList = ["white","green", "red", 'blue', "black"];
let bodyDOM = document.getElementsByTagName("body")[0];
console.dir(bodyDOM);
let n=0;
bodyDOM.onclick = function() {
    console.log(n);
    if(n>=colorList.length){
        n=0
    }
    bodyDOM.bgColor = colorList[n];
    n++;
}