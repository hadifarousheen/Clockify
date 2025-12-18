const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const stop = document.querySelector(".stop");
const hourDisplay = document.querySelector(".hourDisplay");
const minuteDisplay = document.querySelector(".minuteDisplay");
const secondDisplay = document.querySelector(".secondDisplay");

let hourCount = 0;
let minuteCount = 0;
let secondCount = 0;
let defaultSecondCount = 60;
let minuteOriginal=0;
let defaultMinuteCount=60;
let hourOriginal=0;
hour.addEventListener("change", (e) => {
  hourOriginal=e.target.value;
  hourCount = e.target.value-1;
});

minute.addEventListener("change", (e) => {
  minuteOriginal = e.target.value;
  minuteCount = e.target.value - 1;
});

second.addEventListener("change", (e) => {
  secondCount = e.target.value;
});

start.addEventListener("click", () => {
  hourDisplay.innerText = hourCount;
  minuteDisplay.innerText = minuteCount;
  secondDisplay.innerText = secondCount;
  if (secondCount != 0 && minuteOriginal == 0 && hourOriginal == 0) {
    let secondIntervalId = setInterval(() => {
      if (secondCount == 1) {
        clearInterval(secondIntervalId);
      }
      secondCount--;
      secondDisplay.innerText = secondCount;
    }, 1000);
  } else if (secondCount == 0 && hourCount == 0 && minuteOriginal!=0) {
    let minuteId;

    minuteId = setInterval(() => {
      defaultSecondCount--;
      secondDisplay.innerText = defaultSecondCount;
      if (defaultSecondCount == 0) {
        minuteCount--;
        if (minuteCount < 0) {
          clearInterval(minuteId);
        }
        if (minuteCount >= 0) {
          minuteDisplay.innerText = minuteCount;
        }

        defaultSecondCount = 60;
      }
    }, 1000);
  }
   else if (hourCount == 0 && secondCount != 0 && minuteOriginal != 0) {
    let secondIntervalId = setInterval(() => {
      if (secondCount == 1) {
        clearInterval(secondIntervalId);

        let minuteId;

        minuteId = setInterval(() => {
          defaultSecondCount--;
          secondDisplay.innerText = defaultSecondCount;
          if (defaultSecondCount == 0) {
            minuteCount--;
            if (minuteCount < 0) {
              clearInterval(minuteId);
            }
            if (minuteCount >= 0) {
              minuteDisplay.innerText = minuteCount;
            }

            defaultSecondCount = 60;
          }
        }, 1000);
      }
      secondCount--;
      secondDisplay.innerText = secondCount;
    }, 1000);
  }
  else if(hourOriginal!=0 && secondCount==0 && minuteOriginal==0){
    minuteDisplay.innerText=--defaultMinuteCount;
    let hourId=setInterval(() => {
        minuteDisplay.innerText=defaultMinuteCount;
        secondDisplay.innerText=defaultSecondCount;
        defaultSecondCount--;
        if(defaultSecondCount==0){
          defaultMinuteCount--;
          minuteDisplay.innerText=defaultMinuteCount;
          if(defaultMinuteCount==0){
            hourCount--;
            if(hourCount==0){
              clearInterval(hourId)
            }
            hourDisplay.innerText=hourCount;
          }
          defaultSecondCount=60;
        }
    }, 1000);

  }
  else if(hourOriginal!=0 && minuteOriginal==0 && secondCount!=0){
 let secondIntervalId = setInterval(() => {
      if (secondCount == 1) {
        clearInterval(secondIntervalId);


 minuteDisplay.innerText=--defaultMinuteCount;
    let hourId=setInterval(() => {
        minuteDisplay.innerText=defaultMinuteCount;
        secondDisplay.innerText=defaultSecondCount;
        defaultSecondCount--;
        if(defaultSecondCount==0){
          defaultMinuteCount--;
          minuteDisplay.innerText=defaultMinuteCount;
          if(defaultMinuteCount==0){
            hourCount--;
            if(hourCount==0){
              clearInterval(hourId)
            }
            hourDisplay.innerText=hourCount;
          }
          defaultSecondCount=60;
        }
    }, 1000);

      }
      secondCount--;
      secondDisplay.innerText = secondCount;
    }, 1000);

  } else if(hourOriginal!=0 && minuteOriginal!=0 && secondCount==0){
      let minuteId;

    minuteId = setInterval(() => {
      defaultSecondCount--;
      secondDisplay.innerText = defaultSecondCount;
      if (defaultSecondCount == 0) {
        minuteCount--;
        if (minuteCount < 0) {
          clearInterval(minuteId);

 minuteDisplay.innerText=--defaultMinuteCount;
    let hourId=setInterval(() => {
        minuteDisplay.innerText=defaultMinuteCount;
        secondDisplay.innerText=defaultSecondCount;
        defaultSecondCount--;
        if(defaultSecondCount==0){
          defaultMinuteCount--;
          minuteDisplay.innerText=defaultMinuteCount;
          if(defaultMinuteCount==0){
            hourCount--;
            if(hourCount==0){
              clearInterval(hourId)
            }
            hourDisplay.innerText=hourCount;
          }
          defaultSecondCount=60;
        }
    }, 1000);


        }
        if (minuteCount >= 0) {
          minuteDisplay.innerText = minuteCount;
        }

        defaultSecondCount = 60;
      }
    }, 1000);
  }
});
