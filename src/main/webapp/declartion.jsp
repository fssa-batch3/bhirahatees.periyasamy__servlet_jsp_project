<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<%!
  int count = 0;
  public int incrementCount(){
	  return count++;
  }
%>
<body>

<p>
 The current count is <%= incrementCount() %> 
</p>

<%
 String name = null;
 if(name != null){
	 out.println("Hello, " + name);
 }else{
	 out.println("Hello, User");
 }
%>	

<p>Hello, <%=" Bhirahatees" %></p>

</body>
</html>