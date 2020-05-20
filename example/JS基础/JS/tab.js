var nav = document.getElementById("nav");
var navList = nav.getElementsByTagName("li");
var tabBox = document.getElementById("tabBox");
var tabBoxList = tabBox.getElementsByTagName("div");

for(var i=0;i<navList.length;i++){
    navList[i].myIndex = i;
    navList[i].onclick = function() {
        ChangeTab(this.myIndex);
    }
}

function ChangeTab(index){
    for(var i=0;i<navList.length;i++){
        navList[i].className = '';
        tabBoxList[i].className = '';
    }
    navList[index].className = 'active';
    tabBoxList[index].className = 'active';
}