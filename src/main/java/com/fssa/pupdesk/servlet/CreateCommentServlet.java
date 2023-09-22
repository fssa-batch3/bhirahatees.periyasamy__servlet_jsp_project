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

import com.fssa.pupdesk.model.Comment;
import com.fssa.pupdesk.services.CommentService;
import com.fssa.pupdesk.services.exceptions.ServiceException;

/**
 * Servlet implementation class CreateCommentServlet
 */
@WebServlet("/CreateCommentServlet")
public class CreateCommentServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CreateCommentServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		StringBuilder requestBody = new StringBuilder();
		PrintWriter out = response.getWriter();
		String line;
		while ((line = request.getReader().readLine()) != null) {
			requestBody.append(line);
		}
		JSONObject jsonData = new JSONObject(requestBody.toString());
		HttpSession session = request.getSession();	
		String fromEmail = (String)session.getAttribute("logginEmail");
		String name = jsonData.getString("name");
		String description = jsonData.getString("description");
		boolean isEdited = false;
		String ticketId = jsonData.getString("ticketid");
		try {
			Comment comment = new Comment(ticketId,name,fromEmail,description,isEdited);
			CommentService createComment = new CommentService();
			createComment.createCommentService(comment);
			out.println("Success");
		}catch(ServiceException e) {
			out.println(e.getMessage());
		}
	}

}
