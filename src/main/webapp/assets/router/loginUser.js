

const form = document.querySelector("#form");



function loginUser(user) {
	const url = "/pupdesk/LoginServlet";
	axios.post(url, user, {
		headers: {
			"Content-Type": "application/json",
		},
	}).then((response) => {
		if (response.data === "success\r\n") {
			window.location.href = "../Ticket Page/dashboard.html"
		}else{
			errMessage(response.data);
		}
	}).catch((err) => {
		console.error(err);
	})
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


form.addEventListener("submit", (e) => {
	e.preventDefault();
	let email = document.querySelector(".email").value.toLowerCase();
	let password = document.querySelector(".password").value;
	sessionStorage.setItem("logginEmail", email);
	const user = { email, password };
	try {
		loginUser(user);
	} catch (error) {
		console.error(error);
	}
})