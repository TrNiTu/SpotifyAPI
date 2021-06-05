// function changeTheme(theme) {
//     if(theme === lightColorTheme) {
//         body.classList.remove("random");
//         body.classList.remove("dark");
//         darkColorTheme.classList.remove("activeTheme");
//         lightColorTheme.classList.add("activeTheme");
//         randomColorTheme.classList.remove("activeTheme");
//     } else if(theme === darkColorTheme) {
//         body.classList.remove("random");
//         body.classList.add("dark");
//         darkColorTheme.classList.add("activeTheme");
//         lightColorTheme.classList.remove("activeTheme");
//         randomColorTheme.classList.remove("activeTheme");
//     } else if(theme === randomColorTheme) {
//         body.classList.add("random");
//         body.style.setProperty("--color-primary", generateRandomColor());
//         body.style.setProperty("--color-primaryText", generateRandomColor());
//     }
// }

// function changeTheme() {
//     const themeCheckbox = document.getElementById("themeCheckbox")
// }

document.querySelector("#switch").oninput = () => {
	if (document.querySelector("#switch").checked == true) {
		document.querySelector("body").classList.add("dark");
	} else {
		document.querySelector("body").classList.remove("dark");
	}
};
