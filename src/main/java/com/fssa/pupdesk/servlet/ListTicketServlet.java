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

import com.fssa.pupdesk.model.Ticket;
import com.fssa.pupdesk.services.TicketService;
import com.fssa.pupdesk.services.exceptions.ServiceException;
import com.mysql.cj.Session;

/**
 * Servlet implementation class ListTicketServlet
 */
@WebServlet("/ListTicketServlet")
public class ListTicketServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ListTicketServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String redirection = request.getParameter("status");
		String redirectionPage = redirection.equals("closed") ? "ticket-history.jsp" : "tickets.jsp";
		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession();
		String loggedInEmail = (String) session.getAttribute("loggedInEmail");
		System.out.println(loggedInEmail);
		List<Ticket> tickets = null;
		try {
			tickets = new TicketService().getTicketbyService(loggedInEmail,redirection.toLowerCase());
			System.out.print(redirection);
			request.setAttribute("ticketList", tickets);
			request.getRequestDispatcher(redirectionPage).forward(request, response);
		} catch (ServiceException e) {
			out.println("Failed to List Tickets " + e.getMessage());
			request.setAttribute("ticketList", tickets);
			request.getRequestDispatcher(redirectionPage).forward(request, response);
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
