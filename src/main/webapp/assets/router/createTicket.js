const form = document.querySelector("#ticket-raise");
const from = sessionStorage.getItem("logginEmail");

const sendEmail = async (data) => {
	try {
		const transporter = nodemailer.createTransport({
			host: "smtp.office365.com",
			port: 587,
			secure: false, // Set to true if you're using a secure connection (TLS/SSL)
			auth: {
				user: "bhirahatees.periyasamy@outlook.com",
				pass: "KQdpyG5Am5H7BBD",
			},
		});
		const info = await transporter.sendMail(data);
		console.log(info);
		transporter.close();
	} catch (err) {
		console.error(err);
	}

}

const userData = JSON.parse(sessionStorage.getItem("userData"));
document.querySelector(".profile-logo").src = userData.profileImage;
console.log(userData);

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
		}
	}).catch(error => console.error(error.message))
}



form.addEventListener("submit", (e) => {
	e.preventDefault();
	const to = document.querySelector("#to_email").value;
	const summary = document.querySelector("#summary").value;
	const priority = document.querySelector("#priority").value;
	const description = document.querySelector("#description").value;
	const ticketData = { to, summary, priority, description }
	const emailTemplateString = `Hi ${userData.name}\n
\n
Thank you for reaching out to our support team. We have received your ticket and will get back to you as soon as possible.
\n
Here are the details of your ticket:
\n
Ticket description: ${description}\n
\n
We understand that your issue is important, and we will do our best to resolve it quickly. Our support team will be in touch with you shortly.\n
\n
If you have any additional information or updates regarding this ticket, please reply to this email and we'll update the ticket accordingly.\n
\n
Thank you for your patience.\n
\n
Best regards,\n
Pupdesk`;

	try {
		createTicket(ticketData)
		sendEmail({ from: "bhirahatees.periyasamy@outlook.com", to: to, subject: summary, text: emailTemplateString });
	} catch (err) {
		console.log(err.message)
	}
})