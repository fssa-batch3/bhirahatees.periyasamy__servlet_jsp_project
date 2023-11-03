const listClosedTickets = () => {
	axios.get("/pupdesk/ListTicketServlet?status=closed").then((response) => { createTicketItem(response.data) }).catch((err) => {
		console.error(err);
	})
}

const userData = JSON.parse(sessionStorage.getItem("userData"));
document.querySelector(".profile-logo").src = userData.profileImage;
console.log(userData);

function createTicketItem(ticketData) {
    const container = document.getElementById("accordionPanelsStayOpenExample");

    if (ticketData === null) {
        const div = document.createElement("div");
        div.innerText = "No Tickets Found.";
        container.append(div);
    } else {
        for (let ticket of ticketData) {
			console.log(ticket);
            const ticketItem = document.createElement("div");
            ticketItem.className = 'ticket-show';
            const showContainer = document.createElement("div");
            const accordionItem = document.createElement('div');
            accordionItem.className = 'accordion-item names__time';

            const ticketLink = document.createElement('a');
            ticketLink.href = `./deatails.html?ticketid=${ticket.ticketId}`;
            ticketLink.className = 'ticketId';
            ticketLink.textContent = ticket.ticketId;

            const sender = document.createElement('div');
            sender.className = 'sender';
            console.log(ticket.from === userData.email);
            if (ticket.from === userData.email) {
				
                sender.textContent = `You Raised a ticket to ${ticket.receiverName}`;
            } else {
                sender.textContent = `${ticket.raiserName} raised a ticket to you.`;
            }

            const createAndTime = document.createElement('div');
            createAndTime.className = 'create__time';
            createAndTime.textContent = ticket.createdTime;

            const toggleButton = document.createElement('button');
            toggleButton.style.cssText = 'background-color: white; height: 1rem; width: 1rem; border-radius: 0; border: 1px solid white;';
            toggleButton.className = 'accordion-button collapsed';
            toggleButton.type = 'button';
            toggleButton.setAttribute('data-bs-toggle', 'collapse');
            toggleButton.setAttribute('data-bs-target', `#panelsStayOpen-collapse-${ticket.ticketId}`);
            toggleButton.setAttribute('aria-expanded', 'false');
            toggleButton.setAttribute('aria-controls', `panelsStayOpen-collapse-${ticket.ticketId}`);

            const collapseDiv = document.createElement('div');
            collapseDiv.id = `panelsStayOpen-collapse-${ticket.ticketId}`;
            collapseDiv.className = 'accordion-collapse collapse';

            const accordionBody = document.createElement('div');
            accordionBody.className = 'accordion-body';

            const emailsDiv = document.createElement('div');
            emailsDiv.className = 'emails';
            emailsDiv.innerHTML = `<div><strong>From : </strong>${ticket.from}</div><div><strong>To : </strong>${ticket.to}</div><div><strong>Priority : </strong>${ticket.priority}</div>`;

            const summaryDiv = document.createElement('div');
            summaryDiv.className = 'summary';
            summaryDiv.innerHTML = `<div><strong>Summary : </strong>${ticket.summary}</div>`;

            const descriptionDiv = document.createElement('div');
            descriptionDiv.className = 'summary';
            descriptionDiv.innerHTML = `<div><strong>Description: </strong><div>${ticket.description}</div></div>`;
            
            const closingDescriptionDiv = document.createElement('div');
            closingDescriptionDiv.className = 'summary';
            closingDescriptionDiv.innerHTML = `<div><strong>Clsoing Description: </strong><div>${ticket.closingDescription}</div></div>`;

            // Assemble the elements
            accordionBody.appendChild(emailsDiv);
            accordionBody.appendChild(summaryDiv);
            accordionBody.appendChild(descriptionDiv);
             accordionBody.appendChild(closingDescriptionDiv);
            collapseDiv.appendChild(accordionBody);
            accordionItem.appendChild(ticketLink);
            accordionItem.appendChild(sender);
            accordionItem.appendChild(createAndTime);
            accordionItem.appendChild(toggleButton);      
            showContainer.appendChild(accordionItem);
            ticketItem.appendChild(showContainer);
            ticketItem.appendChild(collapseDiv);
            container.append(ticketItem);
        }
    }
}
listClosedTickets();