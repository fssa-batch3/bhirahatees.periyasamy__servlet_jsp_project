package com.fssa.pupdesk.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;

import com.fssa.pupdesk.model.User;
import com.fssa.pupdesk.services.UserService;
import com.fssa.pupdesk.services.exceptions.ServiceException;

/**
 * Servlet implementation class ListTeamMatesServlet
 */
@WebServlet("/ListTeamMatesServlet")
public class ListTeamMatesServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ListTeamMatesServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		UserService getUsers = new UserService();
		HttpSession session = request.getSession();
		String loggedInEmail = (String) session.getAttribute("logginEmail");
		PrintWriter out = response.getWriter();
		try {
			List<User> teamMates = getUsers.getSameTeamUsersService(loggedInEmail);
			JSONArray accountsJSonArray = new JSONArray(teamMates);
			System.out.println(loggedInEmail);
			out.println(accountsJSonArray);
			out.flush();
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
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
