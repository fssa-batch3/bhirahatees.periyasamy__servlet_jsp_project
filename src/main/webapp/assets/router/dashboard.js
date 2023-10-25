const storeInSession = (user) => {
	userJson = { name: user.firstname + " " + user.lastname, profileImage: user.profileImageUrl ,email:user.email};
	sessionStorage.setItem("userData" , JSON.stringify(userJson));
}


const getUserData = () => {
	axios.get("/pupdesk/ProfileServlet").then((response) => {
		storeInSession(response.data);
		const userData = JSON.parse(sessionStorage.getItem("userData"));
        document.querySelector(".profile-logo").src = userData.profileImage;

	}).catch((err) => {
		console.error(err.message);
	})
}


getUserData();


