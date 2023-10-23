function startTime(){
    const today=new Date();
 let h=today.getHours();
 let m =today.getMinutes();
 let s= today.getSeconds();
 document.getElementById('a').innerHTML=h;
 document.getElementById('b').innerHTML=m;
 document.getElementById('c').innerHTML=s;
 setTimeout(startTime, 1000)

}