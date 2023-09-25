package com.fssa.pupdesk.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.fssa.pupdesk.services.TicketService;
import com.fssa.pupdesk.services.exceptions.ServiceException;

/**
 * Servlet implementation class UpdateTicketAndReassignServlet
 */
@WebServlet("/UpdateTicketAndReassignServlet")
public class UpdateTicketAndReassignServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public UpdateTicketAndReassignServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		StringBuilder requestBody = new StringBuilder();
		String line;
		PrintWriter out = response.getWriter();
		while ((line = request.getReader().readLine()) != null) {
			requestBody.append(line);
		}
		JSONObject jsonData = new JSONObject(requestBody.toString());
		String toEmail = jsonData.getString("toEmail");
		String summary = jsonData.getString("summary");
		String description = jsonData.getString("description");
		String priority = jsonData.getString("priority");
		String ticketid = jsonData.getString("ticketid");
		try {
			TicketService updateTicket = new TicketService();

			if (updateTicket.updateAndReassignTicketService(summary, toEmail,priority ,description,ticketid)) {
				out.println("Success");
			}
		} catch (ServiceException e) {
			out.println(e.getMessage());
		}
	}

}
