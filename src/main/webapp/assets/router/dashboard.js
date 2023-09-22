const storeInSession = (user) => {
	userJson = { name: user.firstname + " " + user.lastname, profileImage: user.profileImageUrl };
	sessionStorage.setItem("userData" , JSON.stringify(userJson));
}


const getUserData = () => {
	axios.get("/pupdesk/ProfileServlet").then((response) => {
		storeInSession(response.data);
	}).catch((err) => {
		console.error(err.message);
	})
}


getUserData();


const userData = JSON.parse(sessionStorage.getItem("userData"));
document.querySelector(".profile-logo").src = userData.profileImage;
console.log(userData);