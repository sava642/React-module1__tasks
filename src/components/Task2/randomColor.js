const setBg = () => {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	let bgc = "#" + randomColor;
	return bgc;
}

export default setBg

