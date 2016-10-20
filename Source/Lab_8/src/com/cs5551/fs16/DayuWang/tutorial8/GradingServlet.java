package com.cs5551.fs16.DayuWang.tutorial8;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class GradingServlet
 */
@WebServlet("/GradingServlet")
public class GradingServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GradingServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
		int num = Integer.parseInt(request.getParameter("h0"));
		int p[] = new int[num + 1];
		
		for (int i = 0; i <= num; i++) {
			p[i] = Integer.parseInt(request.getParameter("h" + (i + 1)));
		}
		
		int correctAnswer = new MatrixMultiplicationAlgorithm().Solution(p);
		
		
		String yourAnswer = request.getParameter("q1");
		
		if (yourAnswer.contains(Integer.toString(correctAnswer))) {
			out.println("<html><head><title>Result</title></head>");
			out.println("<body style = 'background-color: azure;'>");
			out.println("<p style = \"font-family: 'Trebuchet MS'; font-size: 1.5em; color: red; padding-top: 1em;\"> Congratulations!  Your answer " + yourAnswer + " is correct!</p>");
			out.println("<button onclick = \"window.history.back();\" style = \"background-color: yellow; border: 2px solid orange; color: red; font-size: 1.2em; font-family: 'Trebuchet MS'; padding: 0.3em 0.5em 0.3em 0.5em; margin-top: 1em;\">Try Another Question</button>");
		}
		else {
			out.println("<html><head><title>Result</title></head>");
			out.println("<body style = 'background-color: azure;'>");
			out.println("<p style = \"font-family: 'Trebuchet MS'; font-size: 1.5em; color: gray; padding-top: 1em;\"> Sorry!  Your answer " + yourAnswer + " is incorrect!</p>");
			out.println("<p style = \"font-family: 'Trebuchet MS'; font-size: 1em; color: red; padding-top: 1em;\"> Correct answer is " + correctAnswer + ".</p>");
			out.println("<button onclick = \"window.history.back();\" style = \"background-color: yellow; border: 2px solid orange; color: red; font-size: 1.2em; font-family: 'Trebuchet MS'; padding: 0.3em 0.5em 0.3em 0.5em; margin-top: 1em;\">Try Another Question</button>");
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
