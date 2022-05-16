const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const timeBox = document.querySelector(".current-day__time");
const dayBox = document.querySelector(".current-day__date");

export const showCurrentDate = (timezone) => {
	window.timerId = setInterval(() => {
		let time = new Date();
		let localTime = time.toLocaleString(`en-US`, { timeZone: `${timezone}` });
		const month = localTime.slice(0, 1);
		const date = localTime.slice(2, 4);
		const day = time.getDay();
		const timeAtClock = localTime.slice(11, 16);
		const ampm = localTime.slice(20, 22);

		timeBox.innerHTML = `${timeAtClock} <span>${ampm}</span>`;
		dayBox.textContent = `${days[day]}, ${date} ${months[month - 1]}`;
	}, 1000);
}