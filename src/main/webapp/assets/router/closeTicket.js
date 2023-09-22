const form = document.querySelector(".closing-form");
const ticketId = {
	ticketid: new URLSearchParams(window.location.search).get("ticketid"),
};

const userData = JSON.parse(sessionStorage.getItem("userData"));

document.querySelector(".profile-logo").src = userData.profileImage;
console.log(userData);

const insertingData = (ticketData) => {
	const ticketIdContainer = document.querySelector(".ticketid-data");
	ticketIdContainer.innerText = ticketData.ticketId;
	const ticketCreatedTime = document.querySelector(".ticket__created-time");
	ticketCreatedTime.innerText = ticketData.createdTime;
	if (sessionStorage.getItem("logginEmail") === ticketData.from) {
		document.querySelector("title").innerText = "Ticket Details"
	}
	const ticketFrom = document.querySelector(".ticket__from");
	ticketFrom.innerText = ticketData.from;
	const ticketTo = document.querySelector(".ticket__raiser");
	ticketTo.innerText = ticketData.to;
	const ticketSummary = document.querySelector(".ticket__summary");
	ticketSummary.innerText = ticketData.summary;
	const ticketDescription = document.querySelector(".ticket__description");
	ticketDescription.innerText = ticketData.description;
	const ticketPriority = document.querySelector(".ticket__priority");
	ticketPriority.innerText = ticketData.priority;
	const ticketStatus = document.querySelector(".ticket__status");
	ticketStatus.innerText = ticketData.status;
	const email = sessionStorage.getItem("logginEmail");
	if (ticketData.from === email) {
		document.querySelector(".closing-form").remove();
	}
};

const closingTicket = (ticketClosingData) => {
	axios
		.post("/pupdesk/CloseTicketServlet", ticketClosingData, {
			headers: {
				"Content-Type": "application/json",
			},
		})
		.then((response) => {
			if (response.data === "Closed\r\n") {
				window.location.href = "/pupdesk/pages/Ticket Page/history.html";
			}
		})
		.catch((error) => {
			console.error(error);
		});
};

axios
	.get("/pupdesk/CloseTicketServlet", {
		params: ticketId,
	})
	.then((response) => {
		insertingData(response.data);
	})
	.catch((err) => {
		console.error(err);
	});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const closingData = document.querySelector(".closing__description").value;
	ticketId["description"] = closingData;

	try {
		closingTicket(ticketId);
	} catch (err) {
		console.error(err);
	}
});
