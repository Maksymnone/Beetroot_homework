"use strict";

var nameForProp = {
  brand: "Марка авто",
  model: "Модель",
  color: "Колір",
  year: "Рік випуску",
  avgSpeed: "Середня швидкість",
  fuelCapacity: "Об'єм паливного баку",
  fuelConsume: "Середня витрата палива",
  drivers: "Водії"
};
var myCar = {
  info: {
    brand: "Audi",
    model: "A5",
    color: "green",
    year: 2020,
    avgSpeed: 60,
    fuelCapacity: 50,
    fuelConsume: 9
  },
  drivers: ['Bob', 'Ivan', 'Nick'],
  showInfo: function showInfo(elId) {
    var list = "";

    for (var prop in this.info) {
      list += "\n\t\t\t<dt>".concat(nameForProp[prop] || prop, "</dt>\n\t\t\t<dd>").concat(this.info[prop], "</dd>");
    }

    list += "\n\t\t\t<dt>".concat(nameForProp.drivers, "</dt>\n\t\t\t<dd>").concat(this.drivers, "</dd>");
    document.getElementById(elId).innerHTML = list;
  },
  addDriver: function addDriver(driverName) {
    if (this.drivers.includes(driverName)) {
      return toast.error("Такий водій вже є");
    } else {
      this.drivers.push(driverName);
      this.showInfo("info-list");
      return toast.success("\u0412\u043E\u0434\u0456\u0439 ".concat(driverName, " \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0434\u043E\u0434\u0430\u043D\u0438\u0439"));
    }
  }
};
var addDriverBtn = document.getElementById("addDriver_btn");

function getTimeAndFuel(distance) {
  distance = +document.getElementById("tripDistance_input").value;

  var timeTravel = function timeTravel() {
    if (distance / myCar.info.avgSpeed % 4 === 0) {
      return (distance / myCar.info.avgSpeed).toFixed(1);
    } else {
      return +(distance / myCar.info.avgSpeed).toFixed(1) + Math.floor(distance / myCar.info.avgSpeed / 4);
    }
  };

  var fuelToTravel = (distance / 100 * myCar.info.fuelConsume).toFixed(1);
  var tableHtml = "\n\t\t<table class=\"trip-parametrs-table table table-striped\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t<th>Parametr</th>\n\t\t\t\t<th>Value</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr>\n\t\t\t\t<td>Distance</td>\n\t\t\t\t<td>".concat(distance, " km</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t<td>Time travel</td>\n\t\t\t\t<td>").concat(timeTravel(), " hours</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t<td>Fuel needs</td>\n\t\t\t\t<td>").concat(fuelToTravel, " litres</td>\n\t\t\t\t</tr>\n\t\t\t\t\n\t\t\t</tbody>\n\t\t</table>");

  if (document.querySelector(".trip-parametrs-table")) {
    document.querySelector(".trip-parametrs-table").remove();
    document.getElementById("trip_Parametrs").insertAdjacentHTML("beforeend", tableHtml);
  } else {
    document.getElementById("trip_Parametrs").insertAdjacentHTML("beforeend", tableHtml);
  }

  document.getElementById("tripDistance_input").value = "";
}

addDriverBtn.addEventListener("click", function () {
  var addDriverNameInput = document.getElementById("addDriver_input").value;
  myCar.addDriver(addDriverNameInput);
  document.getElementById("addDriver_input").value = "";
});
document.getElementById("tripParametrs_btn").addEventListener('click', getTimeAndFuel);

var addZero = function addZero(n) {
  return n < 10 ? '0' + n : "" + n;
};

function time2sec(h, m, s) {
  return h * 3600 + m * 60 + s;
}

var time = {
  hour: 15,
  minute: 34,
  second: 45,
  showTime: function showTime() {
    var allTime = "".concat(+addZero(this.hour), " \u0433\u043E\u0434\u0438\u043D ").concat(+addZero(this.minute), " \u0445\u0432\u0438\u043B\u0438\u043D ").concat(+addZero(this.second), " \u0441\u0435\u043A\u0443\u043D\u0434");
    document.querySelector(".showtime-wrapper").innerHTML = allTime;
  },
  addSecond: function addSecond(plusSec) {
    var addTime = time2sec(+this.hour, +this.minute, +this.second) + plusSec;
    var addHour = Math.floor(addTime / 3600) % 24;
    var addMinute = Math.floor(addTime % 3600 / 60);
    var addSecond = addTime % 60;
    this.hour = addHour;
    this.minute = addMinute;
    this.second = addSecond;
  },
  addMinute: function addMinute(plusMin) {
    this.addSecond(plusMin * 60);
  },
  addHour: function addHour(plusHour) {
    this.addSecond(plusHour * 3600);
  }
};

document.getElementById("showtime_btn").onclick = function () {
  time.showTime();
};

document.getElementById("addTime_btn").onclick = function (e) {
  e.preventDefault();
  var secondsInput = document.querySelector("#addSecondsInput");
  var minutesInput = document.querySelector("#addMinutesInput");
  var hoursInput = document.querySelector("#addHoursInput");
  var secFromInput = +secondsInput.value;
  var minFromInput = +minutesInput.value;
  var hourFromInput = +hoursInput.value;
  time.addSecond(secFromInput);
  time.addMinute(minFromInput);
  time.addHour(hourFromInput);
  time.showTime();
  secondsInput.value = "";
  minutesInput.value = "";
  hoursInput.value = "";
};

console.log(time);