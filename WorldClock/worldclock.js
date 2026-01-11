const getTime = document.querySelector(".getTime");
const result = document.querySelector(".result");
const selectOptions = document.querySelector(".selectOptions");
let userSearch;
const baseURL = "https://worldtimeapi.org/api/timezone";

let timezones;
let timezonesJson;
window.addEventListener("load", async () => {
  timezones = await fetch(baseURL);
  timezonesJson = await timezones.json();
  for (let i = 0; i < timezonesJson.length; i++) {
    const option = document.createElement("option");
    option.innerText = timezonesJson[i];
    option.value = timezonesJson[i];
   
    selectOptions.appendChild(option);
  }
});
 selectOptions.addEventListener("change", (e) => {
      userSearch = e.target.value;
    });
  const div=document.createElement('div');

getTime.addEventListener("click", async () => {
  if (!userSearch) {
    alert("Select a timezone first");
    return;
  }

  const res = await fetch(baseURL + "/" + userSearch);
  const data = await res.json();


  const dateTime = data.datetime;
  const [date, timeFull] = dateTime.split("T");
  const time = timeFull.split(".")[0]; 

  div.innerHTML = ""; 

  const timeTag = document.createElement("p");
  timeTag.innerText = "Time : " + time;

  const dateTag = document.createElement("p");
  dateTag.innerText = "Date : " + date;

  const dayTag = document.createElement("p");
  dayTag.innerText = "Day (0=Sun): " + data.day_of_week;

  const timezoneTag = document.createElement("p");
  timezoneTag.innerText = "Time Zone : " + data.timezone;

  div.append(timezoneTag, dateTag, dayTag, timeTag);
  result.append(div);
});

