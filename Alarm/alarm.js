const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const ampm = document.querySelector(".ampm");
if (!localStorage.getItem("alarmList")) {
  let alarmList = [];
  localStorage.setItem("alarmList", JSON.stringify(alarmList));
}
const save = document.querySelector(".save");

const alarms = document.querySelector(".alarms");

document.addEventListener("DOMContentLoaded", () => {
  let list = JSON.parse(localStorage.getItem("alarmList"));

  for (let i = 0; i < list.length; i++) {
    const h1 = document.createElement("h1");
    h1.innerText = list[i].hour + " : " + list[i].minute + " : " + list[i].ampm;
    const button = document.createElement("button");
    button.innerText = "DELETE";
    const button2 = document.createElement("button");
    button2.innerText = "STOP";
    button.addEventListener("click", () => {
      h1.remove();
      button.remove();
      button2.remove();
      const alarmlist = JSON.parse(localStorage.getItem("alarmList"));
      alarmlist.splice(i, 1);
      localStorage.setItem("alarmList", JSON.stringify(alarmlist));
    });

     
    button2.addEventListener("click", () => {
      button2.remove();
      const alarmlist = JSON.parse(localStorage.getItem("alarmList"));
      alarmlist.splice(i, 1);
      localStorage.setItem("alarmList", JSON.stringify(alarmlist));
    });
    alarms.appendChild(h1);
    alarms.appendChild(button);
    alarms.appendChild(button2)
  }
});

let userHour;
let userMinute;
let userPmAm;
hour.addEventListener("change", (e) => {
  userHour = e.target.value;
});

minute.addEventListener("change", (e) => {
  userMinute = e.target.value;
});

ampm.addEventListener("change", (e) => {
  userPmAm = e.target.value;
});

save.addEventListener("click", () => {
  let list = JSON.parse(localStorage.getItem("alarmList"));

  const newAlarmObject = {};
  newAlarmObject.id = new Date();
  newAlarmObject.hour = userHour;
  newAlarmObject.minute = userMinute;
  newAlarmObject.ampm = userPmAm;
  list.push(newAlarmObject);
  localStorage.setItem("alarmList", JSON.stringify(list));
  window.location.reload();
});

setInterval(() => {
  const timeNow = new Date();
  const nowHour = timeNow.getHours();
  const nowMinute = timeNow.getMinutes();
  const alarmsStored = JSON.parse(localStorage.getItem("alarmList"));
  for (let i = 0; i < alarmsStored.length; i++) {
    if (
      nowHour == alarmsStored[i].hour &&
      nowMinute == alarmsStored[i].minute
    ) {
      
      var audio = new Audio("../Sound/alarm_sound.mp3");
      audio.play();
    }
  }
}, 1000);
