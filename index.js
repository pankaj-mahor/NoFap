var value=0;
// Increase on click of plus icon
document.getElementById('plus').onclick=function(){
  value++;
  document.getElementById('value').innerHTML = value;
}
// deccrease on click of minus icon
document.getElementById('minus').onclick=function(){
  if (value==0) {
    alert('Can\'t Go Negative');
  }
  else{
    value--;
    document.getElementById('value').innerHTML = value;
  }
}
// On click of reset it resets progress
document.getElementById('reset').onclick = function(){
  if (value==0) {
    alert("Already At Reset Mode");
  }
  else{
    value=0;
    document.getElementById('value').innerHTML = value;
  }
}

document.getElementById('join_now').onclick = function(){
  document.getElementById('join').style.display ="block";
}
document.getElementById('close').onclick = function(){
  document.getElementById('join').style.display ="none";
}
