package com.fssa.pupdesk.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;

import org.json.JSONArray;

import com.fssa.pupdesk.model.Ticket;
import com.fssa.pupdesk.services.TicketService;
import com.fssa.pupdesk.services.exceptions.ServiceException;

/**
 * Servlet implementation class GetAllTickets
 */
@WebServlet("/GetAllTickets")
public class GetAllTickets extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public GetAllTickets() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String email = request.getParameter("email");
		PrintWriter out = response.getWriter();

//		String loggedInEmail = (String) session.getAttribute("loggedInEmail");
		try {
			List<Ticket> tickets = new TicketService().listTicketService(email);
			JSONArray accountsJSonArray = new JSONArray(tickets);
			request.setAttribute("ticketList", tickets);
//			request.getRequestDispatcher("tickets.jsp").forward(request, response);
			out.println(accountsJSonArray);
			out.flush();
		} catch (ServiceException e) {
			out.println("Failed to List Tickets " + e.getMessage());
		}
	}
}
