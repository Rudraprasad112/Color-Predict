var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var merge=document.querySelector(".merge");
var prevcolor=document.querySelector(".prevbtn")
var rgb1=btn1.innerHTML;
var rgb2=btn2.innerHTML;
var prev=[];
var idx=0;

var curr;
prev.unshift(`linear-gradient(to left ,${btn1.innerText},${btn2.innerText})`);

selectcolor=()=>{
    let arr="0123456789abcdef";
    let color="#";
    for(let i=0;i<6;i++){
        color+=arr[Math.floor(Math.random()*16)]
    }
    return color;

}
animation1=()=>{

     rgb1=selectcolor();
     btn1.style.backgroundImage=rgb1;
   
    document.body.style.backgroundImage=`linear-gradient(to left ,${rgb1},${rgb2})`;
    curr=0;
    prev.unshift(`linear-gradient(to left ,${rgb1},${rgb2})`);
    btn1.innerHTML=rgb1
    console.log("`linear-gradient(to left ,${rgb1},${rgb2})`");
    btn1.style.background=`linear-gradient(to right ,${rgb2},${rgb2})`;
    merge.innerHTML=`backgroundImage=linear-gradient(to left ,${rgb1},${rgb2})`;
}
animation2=()=>{
    rgb2=selectcolor();
    btn2.style=rgb2;
    document.body.style.backgroundImage=`linear-gradient(to right ,${rgb1},${rgb2})`;
    btn2.innerHTML=rgb2;
    curr=0;
    prev.unshift(`linear-gradient(to left ,${rgb1},${rgb2})`);
    btn2.style.background=`linear-gradient(to right ,${rgb1},${rgb1})`;
    merge.innerHTML=`backgroundImage=linear-gradient(to right ,${rgb1},${rgb2})`;
}
setcolor= function(){
   
  if(curr <=prev.length){
    document.body.style.backgroundImage=prev[curr];
    curr++;
  }
}

btn1.addEventListener("click",animation1);
btn2.addEventListener("click",animation2);
merge.addEventListener("click",()=>{
    navigator.clipboard.writeText(merge.innerHTML);
})
prevcolor.addEventListener("click", setcolor);
