const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const timeBox = document.querySelector(".current-day__time");
const dayBox = document.querySelector(".current-day__date");

export const showCurrentDate = (timezone) => {
	window.timerId = setInterval(() => {
		const time = new Date();
		const localTime = time.toLocaleString(`en-US`, { timeZone: `${timezone}` });
		const year = localTime.slice(5, 9);
		const month = localTime.slice(0, 1);
		const date = localTime.slice(2, 4);
		const day = time.getDay();
		let ampm = localTime.slice(20, 22);
		let hour = localTime.slice(11, 13);
		let minutes = localTime.slice(14, 16);

		hour.includes(":") ? hour = 0 + hour.slice(0, 1) : hour;
		minutes.includes(":") ? minutes = localTime.slice(13, 15) : minutes;
		ampm.length < 2 ? ampm = localTime.slice(19, 21) : ampm;

		timeBox.innerHTML = `${hour}:${minutes} <span>${ampm}</span>`;
		dayBox.textContent = `${date} ${months[month - 1]}, ${year}`;
	}, 1000);
}