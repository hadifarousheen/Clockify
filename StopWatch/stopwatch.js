const start=document.querySelector('.start');
const stop=document.querySelector('.stop');
const reset=document.querySelector('.reset');

const hour=document.querySelector('.hour');
const minute=document.querySelector('.minute')
const second=document.querySelector('.second')
let secondCount=0;
let minuteCount=0;
let hourCount=0;
let id;

start.addEventListener('click',()=>{
   id= setInterval(()=>{
        if(secondCount>=60){
            secondCount=0;
           minute.innerText= ++minuteCount;

        }
        if(minuteCount >=60){
            minuteCount=0;
            hour.innerText=++hourCount;
        }
        second.innerText=++secondCount;
        
    },1000)
})

stop.addEventListener('click',()=>{

    clearInterval(id)
})

reset.addEventListener('click',()=>{
    secondCount=0;
    hourCount=0;
    minuteCount=0;
            second.innerText=secondCount;
            minute.innerText=minuteCount;
            hour.innerText=hourCount;

})