<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="com.fssa.pupdesk.model.User,java.util.List"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Team Members</title>
<style>
body {
	font-family: Arial, sans-serif;
}

h1 {
	color: #333;
}

table {
	border-collapse: collapse;
	width: 100%;
	margin-top: 20px;
}

th, td {
	border: 1px solid #ddd;
	padding: 8px;
	text-align: left;
}

th {
	background-color: #f2f2f2;
}

tr:nth-child(even) {
	background-color: #f2f2f2;
}
</style>
</head>
<body>
	<h1>Team Members</h1>
	<%
	String email = (String) session.getAttribute("loggedInEmail");
	List<User> teamMates = (List<User>) request.getAttribute("teamMates");
	if (teamMates != null) {
	%>
	<table>
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>Class Code</th>
		</tr>
		<%
		for (User member : teamMates) {
			String displayName = member.getFirstname() + " " + member.getLastname();
			if (email.equals(member.getEmail())) {
				displayName += " (You)";
			}
		%>
		<tr>
			<td><%=displayName%></td>
			<td><%=member.getEmail()%></td>
			<td><%=member.getTeamCode()%></td>
		</tr>
		<%
		}
		%>
	</table>
	<%
	} else {
	%>
	<p>There are no teammates.</p>
	<%
	}
	%>
</body>
</html>
	