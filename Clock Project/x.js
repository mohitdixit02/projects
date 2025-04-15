//Basic Clock
let clock = document.getElementById('clock');

setInterval(() => {
    let time = new Date();
    let h=time.getHours()
    let m=time.getMinutes()
    let s=time.getSeconds()
    let period
    if(s<10){
    s=`0${s}`}
    if(m<10){
        m=`0${m}`
    }
    if(h>12){
        h-=12
        if(h<10){
            h=`0${h}`
        }
        period='PM'
    }
    else{
        period='AM'
    }
    clock.innerHTML = `${h}:${m}:${s} ${period}`
}, 500)

//Alarm clock
let adate=document.getElementById('adate')
let atime=document.getElementById('atime')

let set=document.getElementById('set')
set.addEventListener('click',(e)=>{
    e.preventDefault();
    alarm(atime.value,adate.value);
    let form=document.getElementById('form').reset();
    let div_success=document.getElementById('success')
        div_success.innerText=`Your Alarm is set successfully..`
        div_success.className='success'
        setTimeout(()=>{
            div_success.innerText=``
            div_success.className=''
        },2000)
})
// Alarm function
function alarm(a,b){
    let interval=setInterval(()=>{
        let ctime= new Date()
        let month
        if(ctime.getMonth()<10){
            month=`0${ctime.getMonth()+1}`
        }
        else{
            month=ctime.getMonth()+1
        }
        let date=`${ctime.getFullYear()}-${month}-${ctime.getDate()}`
        let time=`${ctime.getHours()}:${ctime.getMinutes()}`
        if(date==b && time==a){
            runalarm();
            clearInterval(interval);
        }
    },1000)
}
runalarm();
function runalarm(){
    let x=new Audio('alarm.mp3');
    let stop=document.getElementById('stop');
    x.play();
    setTimeout(() => {
        x.pause()
    }, 60000);
    stop.addEventListener('click',()=>{
        x.pause();
        console.log('done iwth blue')
    })
}