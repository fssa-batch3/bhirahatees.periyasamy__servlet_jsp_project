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

/**
 * Servlet implementation class GetTicketJsonServlet
 */
@WebServlet("/GetTicketJsonServlet")
public class GetTicketJsonServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetTicketJsonServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession();
Ticket ticket = new Ticket("bhirahatees.periysamy@fssa.freshworks.com", "gowtham.sathyamoorthy@fssa.freshworks.com", "I have a find bugs in your code", "High", "Pending", "While Testing I find the bugs in you code");
		JSONObject accountsJSonArray = new JSONObject(ticket);
//			request.setAttribute("ticketList", tickets);
//			request.getRequestDispatcher("tickets.jsp").forward(request, response);
		out.println(accountsJSonArray);
		out.flush();}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
