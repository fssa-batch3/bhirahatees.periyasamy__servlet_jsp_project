package com.fssa.pupdesk.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;

import com.fssa.pupdesk.model.Ticket;
import com.fssa.pupdesk.model.User;
import com.fssa.pupdesk.services.TicketService;
import com.fssa.pupdesk.services.UserService;
import com.fssa.pupdesk.services.exceptions.ServiceException;

/**
 * Servlet implementation class CreateeTicketServlet
 */
@WebServlet("/CreateTicketServlet")
public class CreateTicketServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public CreateTicketServlet() {
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

		StringBuilder requestBody = new StringBuilder();
		String line;
		while ((line = request.getReader().readLine()) != null) {
			requestBody.append(line);
		}
		JSONObject jsonData = new JSONObject(requestBody.toString());
		HttpSession session = request.getSession();
		String fromEmail = jsonData.getString("from");
		String toEmail = jsonData.getString("to");
		String raiserName = jsonData.getString("name");
		String summary = jsonData.getString("summary");
		String priority = jsonData.getString("priority");
		String description = jsonData.getString("description");
		PrintWriter out = response.getWriter();
		TicketService ticketService = new TicketService();	
		try {if(fromEmail.equals(toEmail)) {
			throw new ServiceException("You can't raise a ticket to yourself.");
		}		
		else if (ticketService.isreceiverAndRaiserInSameTeam(fromEmail, toEmail)) {
				String firstName = new UserService().getUser(toEmail).getFirstname();
				String lastName = new UserService().getUser(toEmail).getLastname();
				String receiverName = firstName + " " + lastName;
				Ticket ticket =new Ticket(fromEmail,raiserName,receiverName, toEmail, summary, priority, "Open", description) ;
				if (ticketService
						.createTicketService(ticket)) {
					out.println("Success");
				}else {
					throw new ServiceException("User Not Exists");
				}
			}
		} catch (ServiceException e) {
			out.println(e.getMessage());
		}
	}

}
