const futureForecast = document.querySelector(".future-forecast");
const forecasTrack = document.querySelector(".future-forecast__track");
const forecastItem = document.querySelector(".future-forecast__item");

const customScroll = (e) => {
	const clientWidth = document.documentElement.clientWidth;

	if (clientWidth > 992) {
		const leftPosition = getPosition(forecasTrack, "left");
		let itemWidth = getPosition(forecastItem, "width");
		clientWidth >= 1280 ? itemWidth *= 3 : itemWidth *= 4.2;
		const step = 35;

		if (e.deltaY < 0 && e.altKey === false) {
			if (Math.abs(leftPosition) < itemWidth) {
				const newPosition = leftPosition - step;
				forecasTrack.style.left = newPosition + "px";
			}
		} else if (e.deltaY > 0 && e.altKey === false) {
			if (leftPosition < 0) {
				const newPosition = leftPosition + step;
				forecasTrack.style.left = newPosition + "px";
			}
		} else if (e.deltaY < 0 && e.altKey === true || e.deltaX < 0) {
			if (leftPosition < 0) {
				const newPosition = leftPosition + step
				forecasTrack.style.left = newPosition + "px";
			}
		} else if (e.deltaY > 0 && e.altKey === true || e.deltaX > 0) {
			if (Math.abs(leftPosition) < itemWidth) {
				const newPosition = leftPosition - step
				forecasTrack.style.left = newPosition + "px";
			}
		}
	}
}

futureForecast.addEventListener("mousewheel", customScroll);

function getPosition(elem, type) {
	const styles = window.getComputedStyle(elem, null)
	const value = styles[type]

	if (value) return parseInt(value);
	return 0
}

