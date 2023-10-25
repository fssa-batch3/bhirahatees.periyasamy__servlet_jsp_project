const table = document.querySelector(".tickets-table");
const path = window.location.pathname.split("/");

const userData = JSON.parse(sessionStorage.getItem("userData"));
document.querySelector(".profile-logo").src = userData.profileImage;
const yourTickets = document.querySelector(".your-tickets");

const createTable = (ticketList) => {
	// Create the table header row
	let thead = document.createElement("thead");

	let headerRow = document.createElement("tr");
	// Create and append table header cells
	let headers = ["Serial No", "Ticket ID", "Created Time", "From", "To", "Summary", "Description", "Priority", "Status"];
	for (let i = 0; i < headers.length; i++) {
		let th = document.createElement("th");
		th.appendChild(document.createTextNode(headers[i]));
		headerRow.appendChild(th);
	}

	thead.appendChild(headerRow);

	// Access the table element
	let table = document.createElement("table");

	// Append the table header to the table
	table.appendChild(thead);

	// Access ticketList from the JSON data

	if (ticketList != null) {
		console.log(ticketList);
		// Loop through the ticketList
		for (var i = 0; i < ticketList.length; i++) {
			let ticket = ticketList[i];

			// Create a table row
			let row = document.createElement("tr");

			// Create and append serial number cell
			let serialNoCell = document.createElement("td");
			serialNoCell.appendChild(document.createTextNode(i + 1));
			row.appendChild(serialNoCell);

			// Create and append ticket ID cell with a link
			let ticketIdCell = document.createElement("td");
			let ticketIdLink = document.createElement("a");
			ticketIdLink.href = "./reply-ticket.html?ticketid=" + ticket.ticketId;
			ticketIdLink.appendChild(document.createTextNode(ticket.ticketId));
			ticketIdCell.appendChild(ticketIdLink);
			row.appendChild(ticketIdCell);

			// Create and append other cells
			let cells = [document.createElement("td"), document.createElement("td"), document.createElement("td"), document.createElement("td"),
				document.createElement("td"), document.createElement("td"), document.createElement("td"), document.createElement("td")];

			let cellData = [ticket.createdTime, ticket.from, ticket.to, ticket.summary, ticket.description, ticket.priority, ticket.status];

			for (let j = 0; j < (cells.length - 1); j++) {
				cells[j].appendChild(document.createTextNode(cellData[j]));
				console.log(cells[j] , cellData[j] , j);
				row.appendChild(cells[j]);
			}

			// Append the row to the table
			table.appendChild(row);
		}
	} else {
		// Create a row with a "No tickets found" message
		let noTicketsRow = document.createElement("tr");
		let noTicketsCell = document.createElement("td");
		noTicketsCell.colSpan = 9;
		noTicketsCell.className = "no-tickets";
		noTicketsCell.appendChild(document.createTextNode("No tickets found."));
		noTicketsRow.appendChild(noTicketsCell);
		table.appendChild(noTicketsRow);
	}

	// Append the table to the document or an existing container
	document.body.appendChild(table);
}


const getTickets = () => {
	const url = "/pupdesk/ListTicketServlet?status=open";
	axios.get(url).then((response) => {
		if (response.data === "null") {
			createTable(null);
		} else {
			createTable(response.data);
		}

	}).catch((error) => {
		console.error(error.message)
	})
}

getTickets();