<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="com.fssa.pupdesk.model.User"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1" />
<title>Edit Profile</title>
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

.profile-details {
	max-width: 600px;
	margin: 0 auto;
	background-color: #fff;
	padding: 20px;
	border: 1px solid #ddd;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	text-align: center; /* Center the image */
}

.profile-details h2 {
	font-size: 24px;
	margin-bottom: 10px;
}

.profile-details p {
	font-size: 16px;
	margin-bottom: 10px;
}

strong {
	font-weight: bold;
}

.profile-image {
	width: 150px;
	height: 150px;
	border-radius: 50%;
	margin: 0 auto 20px;
	display: block;
}

.action-buttons {
	margin-top: 20px;
	text-align: center;
}

.action-buttons button {
	background-color: #007bff;
	color: #fff;
	border: none;
	padding: 10px 20px;
	margin-right: 10px;
	cursor: pointer;
	border-radius: 5px;
	transition: background-color 0.3s ease-in-out;
}

.action-buttons button:hover {
	background-color: #0056b3;
}

.edit-form {
	text-align: left;
}

.edit-form label {
	display: block;
	font-weight: bold;
	margin-top: 10px;
}

.edit-form input[type="text"], .edit-form input[type="password"] {
	width: 100%;
	padding: 8px;
	margin-top: 5px;
	border: 1px solid #ccc;
	border-radius: 3px;
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
			<li class="breadcrumb-item"><a href="ProfileServlet">Profile</a></li>
			<li class="breadcrumb-item active" aria-current="page">Edit</li>
		</ol>
	</nav>
	<h1>Edit Profile</h1>

	<%
	User user = (User) request.getAttribute("user");
	if (user != null) {
	%>
	<div class="profile-details">

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
		<form class="edit-form" action="UpdateProfileServlet" method="post">
			<label for="firstname">First Name:</label> <input type="text"
				id="firstname" name="firstname" value="<%=user.getFirstname()%>"
				required /> <label for="lastname">Last Name:</label> <input
				type="text" id="lastname" name="lastname"
				value="<%=user.getLastname()%>" required /> <label for="lastname">Profile
				Picture Url:</label> <input type="text" id="lastname" name="profileUrl"
				value="<%=user.getProfileImageUrl()%>" required /> <label
				for="email">Email:</label> <input type="text" id="email"
				name="email" value="<%=user.getEmail()%>" disabled /> <label
				for="teamcode">Team Code:</label> <input type="text" id="teamcode"
				name="teamcode" value="<%=user.getTeamCode()%>" disabled /> <label
				for="password">New Password:</label> <input type="password"
				id="password" name="password" />

			<div class="action-buttons">
				<button type="submit">Save</button>
				<button>Cancel</button>
			</div>
		</form>
	</div>
	<%
	}
	%>
</body>
</html>
