const form = document.querySelector("#ticket-raise");
const from = sessionStorage.getItem("logginEmail");

const userData = JSON.parse(sessionStorage.getItem("userData"));
document.querySelector(".profile-logo").src = userData.profileImage;


const errMessage = (error) => {
	const container = document.createElement("div");
	container.classList.add("error-message", "alert", "alert-danger");
	container.innerText = error;
	const errorContainer = document.querySelector(".error-container");
	errorContainer.appendChild(container);
	setTimeout(() => {
		container.remove()
	}, 5000)
}


document.querySelector("#from_email").value = from;
function createTicket(ticket) {
	const url = "/pupdesk/CreateTicketServlet"
	axios.post(url, ticket, {
		headers: {
			"Content-Type": "application/json"
		}
	}).then((response) => {

		if (response.data === "Success\r\n") {
			window.location.href = "/pupdesk/pages/Ticket Page/tickets.html";
		} else {
			errMessage(response.data)
		}
	}).catch(error => console.error(error.message))
}

const sendEmailtoRaiser = (ticket) => {
	emailjs.send("service_rsem3gc", "template_nlgg9m5", {
		summary: ticket["summary"],
		user_name: ticket["name"],
		to: ticket["from"],
		description: ticket["description"],
	}).then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }).catch((err)=>{console.log(err)});
}

const sendEmailtoReceiver = (ticket)=>{
	
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const to = document.querySelector("#to_email").value;
	const summary = document.querySelector("#summary").value;
	const priority = document.querySelector("#priority").value;
	const description = document.querySelector("#description").value;
	const name = userData.name;
	const from = userData.email;
	const ticketData = { name, from,to, summary, priority, description }
	try {
		createTicket(ticketData);
		//sendEmailtoRaiser(ticketData);
	} catch (err) {
		console.log(err.message)
	}
})