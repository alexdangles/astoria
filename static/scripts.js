// a couple of different backgrounds to style the shop
var background1 = 'mediumseagreen';
var background2 = 'royalblue';
var count = 0;
// this lets us toggle the background state
var color = true;

// every 1 second, switch the background color, alternating between the two styles
setInterval(function () {
  count++;
  document.body.style.backgroundColor = (color ? background1 : background2)
  var date = new Date();
  document.getElementById('head1').innerText = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
  color = !color;
}, 1000);

function showDate(id) {
  document.getElementById(id).innerText = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}
function changeTxt(id, txt) {
  document.getElementById(id).innerText = txt;
}
function countMe(id){
  document.getElementById(id).innerText = count;
}