
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

