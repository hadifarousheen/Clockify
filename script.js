const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const am_pm = document.querySelector(".am-pm");

setInterval(() => {
  const hourtime = new Date().getHours();
  const minutetime = new Date().getMinutes();
  const secondtime = new Date().getSeconds();

  hour.innerText = hourtime;
  minute.innerText = minutetime;
  second.innerText = secondtime;
  if (hourtime >= 12) {
    am_pm.innerText = "PM";
  } else {
    am_pm.innerText = "AM";
  }
}, 1000);
