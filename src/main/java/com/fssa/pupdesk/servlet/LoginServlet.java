package com.fssa.pupdesk.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fssa.pupdesk.model.User;
import com.fssa.pupdesk.services.UserService;
import com.fssa.pupdesk.services.exceptions.ServiceException;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
		response.sendRedirect("login.jsp");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
//		String loginEmail = request.getParameter("LoginEmail");
//		String loginPassword = request.getParameter("LoginPassword");
		String email = request.getParameter("email");
		String password = request.getParameter("password");

		PrintWriter out = response.getWriter();
		User user = new User();
		user.setEmail(email);
		user.setPassword(password);
		UserService service = new UserService();
		try {
			if (service.loginUser(email, password)) {
				HttpSession session = request.getSession();
				session.setAttribute("loggedInEmail", email);
				out.println("Login Success");
				response.sendRedirect("home.jsp");
			}
		} catch (ServiceException e) {
			RequestDispatcher dispatcher = request
					.getRequestDispatcher("login.jsp?errorMessage="+e.getMessage());
			dispatcher.forward(request, response);
		}

	}

}