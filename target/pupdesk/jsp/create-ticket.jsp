<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<title>Ticket Raising Form</title>
<style>
body {
	font-family: Arial, sans-serif;
	background-color: #f4f4f4;
	margin: 0;
	padding: 0;
}

.container {
	width: 60%;
	margin: auto;
	padding: 20px;
	background-color: #ffffff;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}

h1 {
	text-align: center;
	margin-bottom: 20px;
}

label {
	display: inline-block;
	width: 150px;
	font-weight: bold;
}

input[type="text"], input[type="email"], select, textarea {
	width: 100%;
	padding: 10px;
	margin-bottom: 15px;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
}

select {
	height: 38px;
}

textarea {
	height: 100px;
	resize: vertical;
}

input[type="submit"] {
	background-color: #007bff;
	color: #ffffff;
	padding: 10px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

input[type="submit"]:hover {
	background-color: #0056b3;
}

.error {
	padding: 0.5rem;
	background-color: rgba(250, 187, 187, 0.8);
	margin-bottom: 0.3rem;
	border-radius: 0.4rem;
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
			<li class="breadcrumb-item active" aria-current="page">Create
				Ticket</li>
		</ol>
	</nav>
	<div class="container">
		<h1>Ticket Raising Form</h1>
		<%
		String error = request.getParameter("errorMessage");
		if (error != null) {
		%>

		<div class="error">
			<p><%=error%></p>
		</div>
		<%
		}
		%>
		<form action="CreateTicketServlet" method="post">
			<label for="from_email">From :</label> <input
				value=<%=session.getAttribute("loggedInEmail")%> type="email"
				id="from_email" name="from_email" required /><br /> <label
				for="to_email">To :</label> <input type="email" id="to_email"
				name="to_email"
				value="<%=request.getParameter("to_email") == null ? "" : request.getParameter("to_email")%>"
				required /><br /> <label for="summary">Summary:</label> <input
				type="text" id="summary" name="summary"
				value="<%=request.getParameter("summary") == null ? "" : request.getParameter("summary")%>"
				required /><br /> <label for="priority">Priority:</label> <select
				id="priority" name="priority"
				value="<%=request.getParameter("priority") == null ? "" : request.getParameter("priority")%>"
				required>
				<option value="low">Low</option>
				<option value="medium">Medium</option>
				<option value="high">High</option>
				<option value="urgent">Urgent</option>
			</select><br /> <label for="description">Description:</label><br />
			<textarea id="description" name="description"
				value="<%=request.getParameter("description") == null ? "" : request.getParameter("description")%>"
				rows="4" cols="50" required></textarea>
			<br /> <input type="submit" value="Submit" />
		</form>
	</div>
</body>
</html>
