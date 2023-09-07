package com.fssa.pupdesk.servlet;

import java.io.IOException;
import java.io.PrintWriter;

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
 * Servlet implementation class UpdateProfileServlet
 */
@WebServlet("/UpdateProfileServlet")
public class UpdateProfileServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public UpdateProfileServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HttpSession session = request.getSession();
		String email = (String) session.getAttribute("loggedInEmail");
		String password = (String) session.getAttribute("password");
		User user = null;
		PrintWriter out = response.getWriter();
		try {
			user = new UserService().getUser(email, password);
			System.out.println(user.toString());
			request.setAttribute("user", user);
			request.getRequestDispatcher("edit-profile.jsp").forward(request, response);
		} catch (ServiceException e) {
			out.println(e.getMessage());
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		String password = request.getParameter("password");
		if(password.isEmpty() || password.equals("") || password == null) {
			password = (String) session.getAttribute("password");
		}
		String email = (String) session.getAttribute("loggedInEmail");
		User updatedUser = new User(request.getParameter("firstname"), request.getParameter("lastname"), email,
				request.getParameter("teamcode"), password);
		updatedUser.setProfileImageUrl(request.getParameter("profileUrl"));
		try {
			User updateService = new UserService().updateUserService(updatedUser);
			request.setAttribute("user", updatedUser);
			request.getRequestDispatcher("ProfileServlet").forward(request, response);
		} catch (ServiceException e) {
			out.println(e.getMessage());
			request.getRequestDispatcher("ProfileServlet").forward(request, response);
		}
	}

}
