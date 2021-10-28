function showTime(){
  let date= newDate();
  let h=getHours();
  let m= getMinutes();
  let s= getSeconds();
  if(h==0){
    h= 12;
  };
  if (h>12){
    h=h-12
  };
  h=(h<10)? "0" + h:h
  m=(m<10)? "0" + m:m
  s=(s<10)? "0" + s:s
  let time = h + ":" + m ":" + s;
  document.getElementById("clock-display").innerText = time;
  document.getElementById("clock-display").textContent = time;
  setTimeOut(showTime,1000);
}
showTime();
