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
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        UserService getUsers= new UserService();
        HttpSession session = request.getSession();
		String loggedInEmail = (String) session.getAttribute("loggedInEmail");
		String password = (String) session.getAttribute("password");
		PrintWriter out = response.getWriter();
		try {
			List<User> teamMates = getUsers.getSameTeamUsersService(loggedInEmail,password);
			request.setAttribute("teamMates", teamMates);
			request.getRequestDispatcher("teammates.jsp").forward(request, response);
		} catch (ServiceException e) {
			out.println("Failed to List Tickets " + e.getMessage());
		}
        
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
