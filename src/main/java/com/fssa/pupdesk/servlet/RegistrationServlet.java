package com.fssa.pupdesk.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.fssa.pupdesk.model.User;
import com.fssa.pupdesk.services.UserService;
import com.fssa.pupdesk.services.exceptions.ServiceException;

/**
 * Servlet implementation class RegistrationServlet
 */
@WebServlet("/RegistrationServlet")
public class RegistrationServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("application/json");
		PrintWriter out = response.getWriter();

		// Retrieve data from the request body
		StringBuilder requestBody = new StringBuilder();
		String line;
		while ((line = request.getReader().readLine()) != null) {
			requestBody.append(line);
		}
		JSONObject jsonData = new JSONObject(requestBody.toString());

		String firstName = jsonData.getString("firstname");
		String lastName = jsonData.getString("lastname");
		String email = jsonData.getString("email");
		String teamCode = jsonData.getString("classCode");
		String password = jsonData.getString("password");
		String confirmPassword = jsonData.getString("confirmPassword");
		if (!password.equals(confirmPassword)) {
			RequestDispatcher dispatcher = request.getRequestDispatcher(
					request.getContextPath() + "/register.jsp?errorMessage=Password not match with confirm Match.");
			dispatcher.forward(request, response);
		} else {
			User user = new User(firstName, lastName, email, teamCode, password);
			System.out.println(user.toString());

			try {
				UserService registerUser = new UserService();

				if (registerUser.registerUser(user)) {
					out.print("Success");
				}
			} catch (ServiceException e) {
				out.println(e.getMessage());
			}
		}
	}

}
