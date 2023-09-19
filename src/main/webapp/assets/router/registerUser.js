function signinUsingPost(userData) {
	const url = "/pupdesk/RegistrationServlet";
	axios
		.post(url, userData, {
			headers: {
				"Content-Type": "application/json",
			},
		})
		.then((response) => {
			if (response) {
				console.log(response);
				window.location.href = "./login.html";
			}
		})
		.catch((error) => {
			console.log(error.message);
		});
}

document.querySelector(".teamCode").onclick = () => {
	document.getElementById("showImg").showModal();
};
document.getElementById("closeImg").onclick = () => {
	document.getElementById("showImg").close();
};




form.addEventListener("submit", (e) => {
	e.preventDefault();
	let form = document.querySelector("#form");
	const firstname = document.querySelector(".first-name").value;
	const lastname = document.querySelector(".last-name").value;
	const email = document.querySelector(".email").value;
	let classCode = document.querySelector(".key").value;
	const password = document.querySelector(".password").value;
	const confirmPassword = document.querySelector(".confo-password").value;


	console.log(email);

	if (classCode.trim() === "" || classCode === null) {
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
		for (let i = 0; i < 6; i++) {
			classCode += str[Math.floor(Math.random() * str.length)];
		}
	}

	const userData = {
		firstname,
		lastname,
		email,
		password,
		confirmPassword,
		classCode,
	};
	try {

		signinUsingPost(userData);

	} catch (err) {
		console.error(err);
	}
});
