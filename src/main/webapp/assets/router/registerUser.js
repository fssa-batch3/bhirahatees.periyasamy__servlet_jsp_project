function signinUsingPost(userData) {
	const url = "/pupdesk/RegistrationServlet";
	axios
		.post(url, userData, {
			headers: {
				"Content-Type": "application/json",
			},
		})
		.then((response) => {
			
			if (response.data === "Success") {
				console.log(response);
				window.location.href = "./login.html";
			}else{
				console.log(response);
				errMessage(response.data);
			}
		})
		.catch((error) => {
			console.log(error.message);
		});
}

const errMessage = (error)=>{
	const container = document.createElement("div");
	container.classList.add("error-message", "alert", "alert-danger");
	container.innerText = error;
	const errorContainer = document.querySelector(".error-container");
	errorContainer.appendChild(container);
	setTimeout(()=>{
		container.remove()
	},5000)
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
