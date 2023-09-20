const listClosedTickets = () => {
	axios.get("/pupdesk/ListTicketServlet?status=closed").then((response) => { populateTable(response.data) }).catch((err) => {
		console.error(err);
	})
}

 function populateTable(ticketList) {
            const tableBody = document.getElementById("ticketTableBody");

            if (ticketList.length === 0) {
                const noTicketsRow = document.createElement("tr");
                noTicketsRow.innerHTML = '<td colspan="9" class="no-tickets">No tickets found.</td>';
                tableBody.appendChild(noTicketsRow);
            } else {
                ticketList.forEach(ticket => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td><a href="deatails.html?ticketid=${ticket.ticketId}">${ticket.ticketId}</a></td>
                        <td>${ticket.createdTime}</td>
                        <td>${ticket.from}</td>
                        <td>${ticket.to}</td>
                        <td>${ticket.summary}</td>
                        <td>${ticket.description}</td>
                        <td>${ticket.closingDescription}</td>
                        <td>${ticket.priority}</td>
                        <td>${ticket.status}</td>
                    `;
                    tableBody.appendChild(row);
                });
            }
        }

listClosedTickets();