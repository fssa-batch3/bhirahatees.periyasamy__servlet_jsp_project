

const form = document.querySelector("#form");



function loginUser(user) {
	const url = "/pupdesk/LoginServlet";
	axios.post(url, user, {
		headers: {
			"Content-Type": "application/json",
		},
	}).then((response) => {
		if (response) {
			window.location.href = "../Ticket Page/dashboard.html"
		}
	}).catch((err) => {
		console.error(err);
	})
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let email = document.querySelector(".email").value.toLowerCase();
	let password = document.querySelector(".password").value;
	const user = { email, password };
	try {
		loginUser(user);
	} catch (error) {
		console.error(error);
	}
})