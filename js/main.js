const tps=100;
function N(x) {
    return new ExpantaNum(x);
}
let player={
  fish:N(0)
}
function tick(){
  player.fish=player.fish.add(getGain().div(N(tps)));
  update()
}
function getGain(){
  let __gain=N(0.1)
  return __gain
}
function update(){
  let rains = document.getElementsByClassName('rain');
  let fishDisplay=document.getElementById('fishDisplay');
  let fishGainDisplay=document.getElementById('fishGainDisplay');
  for (let i = 0; i < rains.length; i++)rains[i].style = "color:" + getUndulatingColor();
  fishDisplay.innerHTML=format(player.fish);
  fishGainDisplay.innerHTML=formatGain(player.fish,getGain());
}
function getUndulatingColor(period = Math.sqrt(760)) {
    let t = new Date().getTime()
    let a = Math.sin(t / 1e3 / period * 2 * Math.PI + 0)
    let b = Math.sin(t / 1e3 / period * 2 * Math.PI + 2)
    let c = Math.sin(t / 1e3 / period * 2 * Math.PI + 4)
    a = convertToB16(Math.floor(a * 128) + 128)
    b = convertToB16(Math.floor(b * 128) + 128)
    c = convertToB16(Math.floor(c * 128) + 128)
    return "#" + String(a) + String(b) + String(c)
}
function convertToB16(n) {
    let codes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let x = n % 16
    return codes[(n - x) / 16] + codes[x]
}
// 显示通知框  
function showNotify(str) {//+1
    notify.classList.remove('hide');
    notify.innerHTML = str
}
// 隐藏通知框  
function hideNotify() {//+1
    notify.classList.add('hide');
}
function addNotify(str) {//+1
    showNotify(str)
    setTimeout(function () {
        hideNotify()
    }, 1000)
}
setInterval(tick,1000/tps);