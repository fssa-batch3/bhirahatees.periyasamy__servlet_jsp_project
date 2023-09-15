<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Delete Account Confirmation</title>
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

.confirmation-box {
	max-width: 600px;
	margin: 0 auto;
	background-color: #fff;
	padding: 20px;
	border: 1px solid #ddd;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	text-align: center;
}

.confirmation-box h2 {
	font-size: 24px;
	margin-bottom: 10px;
}

.confirmation-box p {
	font-size: 16px;
	margin-bottom: 20px;
}

.confirmation-buttons {
	text-align: center;
}

.confirmation-buttons button {
	background-color: #007bff;
	color: #fff;
	border: none;
	padding: 10px 20px;
	cursor: pointer;
	border-radius: 5px;
	transition: background-color 0.3s ease-in-out;
}

.confirmation-buttons button:hover {
	background-color: #0056b3;
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
			<li class="breadcrumb-item active" aria-current="page">Delete</li>
		</ol>
	</nav>
	<h1>Delete Account Confirmation</h1>
	<div class="confirmation-box">
		<h2>Confirmation</h2>
		<p>Are you sure you want to delete your account?</p>

		<a href="DeleteAccountServlet" class="confirmation-buttons">
			<button type="submit">Yes</button>
		</a>

		<form action="ProfileServlet" class="confirmation-buttons">
			<button type="submit">No</button>
		</form>
	</div>
</body>
</html>
