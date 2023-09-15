<!DOCTYPE html>
<html lang="en">
<head>
<title>Login</title>
<style>
body {
	margin: 0;
	padding: 0;
	font-family: Arial, sans-serif;
	background-color: #f4f4f4;

	align-items: center;
	min-height: 100vh;
}

.background {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: linear-gradient(135deg, #2c3e50, #34495e);
	z-index: -1;
}

.shape {
	position: absolute;
	width: 100px;
	height: 100px;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 50%;
}

.shape:nth-child(1) {
	top: 20%;
	left: 10%;
}

.shape:nth-child(2) {
	top: 50%;
	right: 10%;
}

form {
	background-color: #ffffff;
	width: 350px;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

h3 {
	text-align: center;
	color: #333;
}

label {
	display: block;
	margin-top: 10px;
	font-weight: bold;
	color: #555;
}

input[type="email"], input[type="password"] {
	width: 93%;
	padding: 10px;
	margin-top: 5px;
	border: 1px solid #ccc;
	border-radius: 5px;
}

button {
	width: 100%;
	background-color: #2c3e50;
	color: #fff;
	border: none;
	padding: 10px;
	cursor: pointer;
	border-radius: 5px;
	margin-top: 15px;
	transition: background-color 0.3s ease-in-out;
}

button:hover {
	background-color: #34495e;
}

.error {
	padding: 1rem;
	background-color: rgba(250, 187, 187, 0.8);
	margin-bottom: 0.3rem;
	border-radius: 0.4rem;
}
</style>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
	crossorigin="anonymous" />
<link rel="stylesheet" href="../assets/css/style.css" />
</head>
<body>
	<jsp:include page="./header.jsp"></jsp:include>
	<div class="background">
		<div class="shape"></div>
		<div class="shape"></div>
	</div>
	<div>
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
	</div>
	<div>
		<form action="../LoginServlet" method="post">
			<h3>Login Here</h3>

			<label for="username">Email</label> <input type="email"
				placeholder="Email or Phone" name="email" id="username"
				value="<%=request.getParameter("email") == null ? "" : request.getParameter("email")%>"
				required /> <label for="password">Password</label> <input
				type="password" placeholder="Password" name="password" id="password"
				required />

			<button>Log In</button>
			<p>
				Didn't have an Account <a href="register.jsp">Register here</a>
			</p>
		</form>
	</div>
</body>
</html>
