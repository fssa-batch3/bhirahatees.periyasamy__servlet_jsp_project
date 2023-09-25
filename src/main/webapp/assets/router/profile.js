const userData = JSON.parse(sessionStorage.getItem("userData"));
document.querySelector(".profile-logo").src = userData.profileImage;
console.log(userData);
const insertingDataInField = (userData) => {
	const classCode = document.querySelector(".key");
	classCode.innerText = userData.teamCode;
	const firstname = document.querySelector(".name-input");
	firstname.value = userData.firstname;
	const lastName = document.querySelector(".last-name-input");
	lastName.value = userData.lastname;
	const email = document.querySelector(".email");
	email.value = userData.email;
	const profileImage = document.querySelector(".profile-image");
	profileImage.src = userData.profileImageUrl;
}

const getUserData = () => {

	axios.get("/pupdesk/ProfileServlet").then((response) => {
		insertingDataInField(response.data);
	}).catch((err) => {
		console.error(err.message);
	})
}

getUserData()

const path = window.location.pathname.split("/");

if (path[path.length - 1] === "edit-profile.html") {
	const form = document.querySelector("#form");
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		console.log(e);
	})
}