package com.fssa.pupdesk.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;

import com.fssa.pupdesk.model.Comment;
import com.fssa.pupdesk.services.CommentService;
import com.fssa.pupdesk.services.exceptions.ServiceException;

/**
 * Servlet implementation class ListCommentByIdServlet
 */
@WebServlet("/ListCommentByIdServlet")
public class ListCommentByIdServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ListCommentByIdServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String ticketId = request.getParameter("ticketid");
		CommentService listComment = new CommentService();
		PrintWriter out = response.getWriter();
		try {
			List<Comment> comments = listComment.listCommentService(ticketId);
			JSONArray ticketJsonArray = new JSONArray(comments);
			System.out.println(comments);
			out.println(ticketJsonArray.toString());
			out.flush();
			out.close();
		} catch (ServiceException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
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
