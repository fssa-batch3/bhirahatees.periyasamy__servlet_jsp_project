<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Pupdesk | Home</title>
<style>
body {
	font-family: Arial, sans-serif;
	background-color: #f0f0f0;
	margin: 0;
	padding: 0;
	color: #333;
}

h1 {
	background-color: #007bff;
	color: #fff;
	text-align: center;
	padding: 20px;
	margin: 0;
}

.container {
	max-width: 800px;
	margin: 20px auto;
	padding: 20px;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.link-container {
	margin: 10px 0;
}

.link-container a {
	display: block;
	background-color: #007bff;
	color: #fff;
	text-decoration: none;
	padding: 10px 15px;
	margin: 10px auto;
	text-align: center;
	border-radius: 5px;
	transition: background-color 0.3s ease-in-out;
}

.link-container a:hover {
	background-color: #0056b3;
}

.user-info {
	text-align: right;
	margin-top: 20px;
}
</style>
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
	integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
	crossorigin="anonymous">
</head>
<body>
	<h1>Welcome To Pupdesk Home Page</h1>

	<div class="container">
		<div class="link-container">
			<a href="create-ticket.jsp">Raise Ticket</a>
		</div>
		<div class="link-container">
			<a href="ListTicketServlet?status=open">List Ticket</a>
		</div>
		<div class="link-container">
			<a href="ListTicketServlet?status=closed">List Closed Ticket</a>
		</div>

		<div class="link-container">
			<a href="ListTeamMatesServlet">Class</a>
		</div>
		<div class="link-container">
			<a href="ProfileServlet">Profile</a>
		</div>
		<div class="user-info">
			Logged In User:
			<%=(String) session.getAttribute("loggedInEmail")%>
			<a href="LogoutServlet">Logout</a>
		</div>
	</div>
</body>
</html>
