package com.fssa.pupdesk.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
	 * @see HttpServlet#HttpServlet()
	 */
	public RegistrationServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String firstname = request.getParameter("firstname");
		String lastname = request.getParameter("lastname");
		String email = request.getParameter("email");
		String teamCode = request.getParameter("teamcode");
		String password = request.getParameter("password");
		String conformPassword = request.getParameter("confirm-password");

		PrintWriter out = response.getWriter();
		if (!password.equals(conformPassword)) {
			RequestDispatcher dispatcher = request.getRequestDispatcher("register.jsp?errorMessage=Password not match with confirm Match.");
			dispatcher.forward(request, response);
		} else {
			User user = null;
			if (teamCode == null || teamCode.equals("")) {
				user = new User(firstname, lastname, email, password);
			} else {
				user = new User(firstname, lastname, email, teamCode, password);
			}
			try {
				UserService registerUser = new UserService();
				registerUser.registerUser(user);
				RequestDispatcher dispatcher = request.getRequestDispatcher("login.jsp");
				dispatcher.forward(request, response);
				out.print("Registration Successfull");
			} catch (ServiceException e) {
				RequestDispatcher dispatcher = request.getRequestDispatcher("register.jsp?errorMessage="+e.getMessage());
				dispatcher.forward(request, response);
			}
		}
	}

}
