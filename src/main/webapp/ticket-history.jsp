<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.util.List"%>
<%@ page import="com.fssa.pupdesk.model.Ticket"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Ticket List</title>
<style>
body {
	font-family: Arial, sans-serif;
	background-color: #f5f5f5;
	margin: 0;
	padding: 0;
}

h1 {
	color: #333;
	text-align: center;
	padding: 20px 0;
}

table {
	width: 100%;
	border-collapse: collapse;
	border: 1px solid #ddd;
}

th, td {
	padding: 8px;
	text-align: left;
	border-bottom: 1px solid #ddd;
}

tr:nth-child(even) {
	background-color: #f2f2f2;
}

.no-tickets {
	text-align: center;
	font-style: italic;
	color: #777;
}
</style>
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
	integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
	crossorigin="anonymous">
</head>
<body>
	<nav aria-label="breadcrumb">
		<ol class="breadcrumb">
			<li class="breadcrumb-item"><a href="home.jsp">Home</a></li>
			<li class="breadcrumb-item active" aria-current="page">Ticket
				History</li>
		</ol>
	</nav>
	<h1>Ticket History</h1>
	<table>
		<tr>
			<th>Ticket ID</th>
			<th>Created Time</th>
			<th>From</th>
			<th>To</th>
			<th>Summary</th>
			<th>Description</th>
			<th>Closing Response</th>
			<th>Priority</th>
			<th>Status</th>
		</tr>
		<%
		List<Ticket> ticketList = (List<Ticket>) request.getAttribute("ticketList");
		if (ticketList != null) {
			for (Ticket ticket : ticketList) {
		%>
		<tr>
			<td><a
				href="<%="TicketDetailServlet?ticket=" + ticket.getTicketId()%>"><%=ticket.getTicketId()%></a></td>
			<td><%=ticket.getCreatedTime()%></td>
			<td><%=ticket.getFrom()%></td>
			<td><%=ticket.getTo()%></td>
			<td><%=ticket.getSummary()%></td>
			<td><%=ticket.getDescription()%></td>
			<td><%=ticket.getClosingDescription()%></td>
			<td><%=ticket.getPriority()%></td>
			<td><%=ticket.getStatus()%></td>
		</tr>
		<%
		}
		} else {
		%>
		<tr>
			<td colspan="8" class="no-tickets">No tickets found.</td>
		</tr>
		<%
		}
		%>
	</table>
</body>
</html>
