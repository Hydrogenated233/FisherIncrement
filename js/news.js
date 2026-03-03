let texts = [
    {
         get text(){
            let a=new Date();
            let t=new Date(a);
            t.setDate(t.getDate()+1);
            return `您于${t.getFullYear()}/${t.getMonth()+1}/${t.getDate()} ${t.getHours()}:${t.getMinutes()}购买的“回到一天前”已生效。`
         }
    },
]
let textslength = texts.length;
function news(id=-1) {
    let rand = Math.floor(Math.random() * textslength)
    if(id!=-1)rand=id;
    let e = document.getElementById("newsText")
    let msg = texts[rand].text;
    e.innerHTML = msg
    let textWidth = e.clientWidth;
    let parentWidth = e.parentElement.clientWidth;
    e.style.transition = '';
    e.style.transform = 'translateX(' + (parentWidth + 10) + 'px)';
    let dist = parentWidth + e.clientWidth
    let rate = 100;
    let transformDuration = dist / rate;
    e.style.transition = 'transform ' + transformDuration + 's linear';
    e.style.transform = 'translateX(-' + (textWidth) + 'px)';
    e.addEventListener('transitionend', onNewsEnd)
}
var onNewsEnd = () => {
    let e = document.getElementById("newsText")
    e.removeEventListener('transitionend', onNewsEnd)
    setTimeout(news, 1000)
}
news()