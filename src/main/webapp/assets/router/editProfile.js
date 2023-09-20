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

const deleteUserAccount = () => {
	axios.get("/pupdesk/DeleteAccountServlet").then((response) => {
		if (response.data === "User Deleted\r\n") window.location.href = "/pupdesk/index.html";
	}).catch((err) => {
		console.error(err);
	})
}


const deleteButton = document.querySelector(".delete-button");
deleteButton.addEventListener("click", (e) => {
	e.preventDefault();
	if (window.confirm("Are You Sure to delete your account ?")) {
		try {
			deleteUserAccount()
		} catch (err) {
			console.error(err);
		}
	}

})





const getUserData = () => {
	axios.get("/pupdesk/ProfileServlet").then((response) => {
		insertingDataInField(response.data);
	}).catch((err) => {
		console.error(err.message);
	})
}



getUserData();


export default getUserData;