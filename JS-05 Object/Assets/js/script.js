


const nameForProp = {
	brand: "Марка авто",
	model:"Модель",
	color:"Колір",
	year:"Рік випуску",
	avgSpeed:"Середня швидкість",
	fuelCapacity:"Об'єм паливного баку",
	fuelConsume: "Середня витрата палива",
	drivers: "Водії"
}


const myCar = {
	info: {
		brand: "Audi",
		model: "A5",
		color: "green",
		year: 2020,
		avgSpeed: 60,
		fuelCapacity: 50,
		fuelConsume: 9,
	},
	drivers: ['Bob', 'Ivan', 'Nick'],
	showInfo (elId) {
		let list = "";
		for (let prop in this.info) {
			list += `
			<dt>${nameForProp[prop] || prop}</dt>
			<dd>${this.info[prop]}</dd>`;
		}
		list += `
			<dt>${nameForProp.drivers}</dt>
			<dd>${this.drivers}</dd>`;
		document.getElementById(elId).innerHTML = list;
	},
	addDriver(driverName) {
		if (this.drivers.includes(driverName)) {
			return toast.error("Такий водій вже є")
		} else {
			this.drivers.push(driverName);
			this.showInfo("info-list");
			return toast.success(`Водій ${driverName} успішно доданий`)
		 }
		
	}
}

const addDriverBtn = document.getElementById("addDriver_btn");


function getTimeAndFuel(distance) {
	distance = +document.getElementById("tripDistance_input").value;
	let timeTravel = () => {
		if ((distance / myCar.info.avgSpeed) % 4 === 0) {
			return (distance / myCar.info.avgSpeed).toFixed(1);
		} else {return +(distance / myCar.info.avgSpeed).toFixed(1) +
			Math.floor((distance / myCar.info.avgSpeed) / 4) }			
	};
	let fuelToTravel = ((distance / 100) * myCar.info.fuelConsume).toFixed(1);
	const tableHtml = `
		<table class="trip-parametrs-table table table-striped">
			<thead>
				<tr>
				<th>Parametr</th>
				<th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
				<td>Distance</td>
				<td>${distance} km</td>
				</tr>
				<tr>
				<td>Time travel</td>
				<td>${timeTravel()} hours</td>
				</tr>
				<tr>
				<td>Fuel needs</td>
				<td>${fuelToTravel} litres</td>
				</tr>
				
			</tbody>
		</table>`;
	if (document.querySelector(".trip-parametrs-table")) {
		document.querySelector(".trip-parametrs-table").remove()
		document
			.getElementById("trip_Parametrs")
			.insertAdjacentHTML("beforeend", tableHtml);
	} else {
		document
		.getElementById("trip_Parametrs")
			.insertAdjacentHTML("beforeend", tableHtml);
	}		
	document.getElementById("tripDistance_input").value = "";
}

addDriverBtn.addEventListener("click", () => {
	let addDriverNameInput = document.getElementById("addDriver_input").value;
	myCar.addDriver(addDriverNameInput);
	document.getElementById("addDriver_input").value = "";
});

document.getElementById("tripParametrs_btn").addEventListener('click',getTimeAndFuel);


const addZero = n => n < 10 ? '0' + n : "" + n

function time2sec(h,m,s) {
	return h*3600+m*60+s
}

const time = {
	hour: 15,
	minute: 34,
	second: 45,
	
	showTime() {
		let allTime = `${+addZero(this.hour)} годин ${+addZero(this.minute)} хвилин ${+addZero(this.second)} секунд`;
		document.querySelector(".showtime-wrapper").innerHTML = allTime;
	},

	addSecond(plusSec) {
		const addTime = time2sec(+this.hour, +this.minute, +this.second) + plusSec;
		const addHour = Math.floor(addTime / 3600) % 24;
		const addMinute = Math.floor((addTime % 3600) / 60);
		const addSecond = addTime % 60;
		this.hour = addHour;
		this.minute = addMinute;
		this.second = addSecond;
	},

	addMinute(plusMin) {
		this.addSecond(plusMin * 60);
	},
	addHour(plusHour) {
		this.addSecond(plusHour*3600);
	}
}

document.getElementById("showtime_btn").onclick = function () {
	time.showTime()
}
document.getElementById("addTime_btn").onclick = function (e) { 
	e.preventDefault()
	const secondsInput = document.querySelector("#addSecondsInput");
	const minutesInput = document.querySelector("#addMinutesInput");
	const hoursInput = document.querySelector("#addHoursInput");

	const secFromInput = +secondsInput.value;
	const minFromInput = +minutesInput.value;
	const hourFromInput = +hoursInput.value;
	
	time.addSecond(secFromInput);
	time.addMinute(minFromInput);
	time.addHour(hourFromInput);

	time.showTime()

	secondsInput.value = "";
	minutesInput.value = "";
	hoursInput.value = "";
};

console.log(time);









