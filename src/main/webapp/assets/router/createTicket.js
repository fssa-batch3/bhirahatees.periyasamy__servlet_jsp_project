const form = document.querySelector("#ticket-raise");
const from = sessionStorage.getItem("logginEmail");

document.querySelector("#from_email").value = from;
function createTicket(ticket) {
	const url = "/pupdesk/CreateTicketServlet"
	axios.post(url, ticket, {
		headers: {
			"Content-Type": "application/json"
		}
	}).then((response) => {
		if (response) {
			window.location.href = "/pupdesk/pages/Ticket Page/tickets.html"
		}
	}).catch(error => console.error(error.message))
}


form.addEventListener("submit", (e) => {
	e.preventDefault();
	const to = document.querySelector("#to_email").value;
	const summary = document.querySelector("#summary").value;
	const priority = document.querySelector("#priority").value;
	const description = document.querySelector("#description").value;
	const ticketData = {to,summary,priority,description}
	try{
		createTicket(ticketData)
	}catch(err){
		console.log(err.message)
	}

})