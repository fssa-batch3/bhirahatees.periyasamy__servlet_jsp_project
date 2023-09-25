const form = document.querySelector(".closing-form");
const ticketId = {
	ticketid: new URLSearchParams(window.location.search).get("ticketid"),
};

const userData = JSON.parse(sessionStorage.getItem("userData"));

document.querySelector(".profile-logo").src = userData.profileImage;
console.log(userData);

const updateTicket = (updated) => {
	axios.post("/pupdesk/UpdateTicketAndReassignServlet", updated, {
		headers: {
			"Content-Type": "application/json",
		},
	}).then((response) => {
		console.log(response.data);
		getTicketData();
	}).catch((error) => {
		console.error(error);
	})
}



const insertingData = (ticketData) => {
	const elements = [];
	const ticketIdContainer = document.querySelector(".ticketid-data");
	ticketIdContainer.innerText = ticketData.ticketId;
	elements.push(ticketIdContainer);
	const ticketCreatedTime = document.querySelector(".ticket__created-time");
	ticketCreatedTime.innerText = ticketData.createdTime;
	elements.push(ticketCreatedTime);
	if (sessionStorage.getItem("logginEmail") === ticketData.from) {
		document.querySelector("title").innerText = "Ticket Details"
	}
	const ticketFrom = document.querySelector(".ticket__from");
	ticketFrom.innerText = ticketData.from;
	elements.push(ticketFrom);
	const ticketTo = document.querySelector(".ticket__raiser");
	ticketTo.innerText = ticketData.to;
	elements.push(ticketTo);
	const ticketSummary = document.querySelector(".ticket__summary");
	ticketSummary.innerText = ticketData.summary;
	elements.push(ticketSummary);
	const ticketDescription = document.querySelector(".ticket__description");
	ticketDescription.innerText = ticketData.description;
	elements.push(ticketDescription);
	const ticketPriority = document.querySelector(".ticket__priority");
	ticketPriority.innerText = ticketData.priority;
	elements.push(ticketPriority);
	const ticketStatus = document.querySelector(".ticket__status");
	ticketStatus.innerText = ticketData.status;
	elements.push(ticketStatus);
	const email = sessionStorage.getItem("logginEmail");
	if (ticketData.from === email) {
		const detailsContainer = document.querySelector(".ticket-details");
		const closingForm = document.querySelector(".closing-form");
		if (closingForm !== null) {
			closingForm.remove();
		}
		detailsContainer.appendChild(updateAndEditButton());
	}
};




const updateAndEditButton = () => {
	const buttonContainer = document.createElement("div");
	buttonContainer.classList.add("button___container");
	const editButton = document.createElement("button");
	editButton.classList.add("btn", "btn-primary");
	editButton.innerText = "Edit";
	editButton.style.padding = "0.5rem";
	buttonContainer.appendChild(editButton);
	const deleteButton = document.createElement("button");
	deleteButton.classList.add("btn", "btn-danger");
	deleteButton.innerText = "Delete";
	deleteButton.style.padding = "0.5rem";
	buttonContainer.appendChild(deleteButton);
	editButton.addEventListener("click", (e) => {
		e.preventDefault();
		const editInputs = document.querySelectorAll(".edit-inputs");
		const removeParagraph = document.querySelectorAll(".ticket__details");
		let i = 0;
		editInputs.forEach((element) => { element.style.display = "block"; element.value = removeParagraph[i].innerText; i++; console.log(element) })
		removeParagraph.forEach((element) => { i = 0; element.style.display = "none" })
		const saveButton = document.createElement("button");
		saveButton.classList.add("btn", "btn-primary");
		saveButton.innerText = "Save"
		editButton.remove();
		deleteButton.remove();
		buttonContainer.appendChild(saveButton);
		saveButton.addEventListener("click", (e) => {
			e.preventDefault();
			const data = { toEmail: editInputs[0].value, summary: editInputs[1].value, priority: editInputs[2].value, description: editInputs[3].value, ticketid: ticketId["ticketid"] }
			console.log(data);
			updateTicket(data);
			saveButton.remove();
			editInputs.forEach((element) => { element.style.display = "none"; })
			removeParagraph.forEach((element) => { i = 0; element.style.display = "block" })

		})
	});
	return buttonContainer;
}

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

const getTicketData = () => {
	axios
		.get("/pupdesk/CloseTicketServlet", {
			params: ticketId,
		})
		.then((response) => {
			console.log(response.data)
			insertingData(response.data);
		})
		.catch((err) => {
			console.error(err);
		});
}


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


getTicketData()



