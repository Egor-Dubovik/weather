const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const timeBox = document.querySelector(".current-day__time");
const dayBox = document.querySelector(".current-day__date");

export const showCurrentDate = () => {
	setInterval(() => {
		const time = new Date();
		const month = time.getMonth();
		const date = time.getDate();
		const day = time.getDay();
		const hour = time.getHours();
		const minutes = time.getMinutes();

		timeBox.textContent = `${hour}:${minutes}`;
		dayBox.textContent = `${days[day]}, ${date} ${months[month]}`;
	}, 1000)
}