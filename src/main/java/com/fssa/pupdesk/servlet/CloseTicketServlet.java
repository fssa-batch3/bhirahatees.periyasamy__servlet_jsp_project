package com.fssa.pupdesk.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fssa.pupdesk.model.Ticket;
import com.fssa.pupdesk.services.TicketService;
import com.fssa.pupdesk.services.exceptions.ServiceException;

/**
 * Servlet implementation class CloseTicketServlet
 */
@WebServlet("/CloseTicketServlet")
public class CloseTicketServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public CloseTicketServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String ticketId = request.getParameter("ticket");
		TicketService ticketService = new TicketService();

		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession();
		Ticket ticket = null;
		try {
			ticket = ticketService.getTicketByIdService(ticketId);
			request.setAttribute("ticket", ticket);
			request.getRequestDispatcher("close-ticket.jsp?ticket=" + ticketId).forward(request, response);
		} catch (ServiceException e) {

			out.println("Failed to get a Ticket");
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String ticketId = request.getParameter("ticket");
		String description = request.getParameter("description");
		System.out.println(description + " " + ticketId);
		TicketService ticketService = new TicketService();
		PrintWriter out = response.getWriter();
		try {
			ticketService.updateTicketStatusService(ticketId, description);
			response.sendRedirect("ListTicketServlet?status=closed");
		} catch (ServiceException e) {
			out.println(e.getMessage());
		}

	}

}
