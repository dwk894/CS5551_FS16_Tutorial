<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>COMP-SCI 5551 (FS16) - Tutorial 8 - Dayu Wang (59)</title>
<script src = "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script>
	$(document).ready(
		function() {
			$('#hideMe').hide();
			var random = Math.random();
			var totalNum = Math.floor(random * 100) % (6 - 4 + 1) + 4;
			document.getElementById("h0").value = totalNum;
			var i;
			var s = "";
			for (i = 0; i <= totalNum; i++) {
				if (i !== 0) {
					s += ", ";
				}
				random = Math.random();
				random = Math.floor(random * 100) % (15 - 3 + 1) + 3;
				document.getElementById("h" + (i + 1)).value = random;
				s += random;
			}
			document.getElementById("numOfMatrices").innerHTML = "Given a multiplication chain of " + totalNum + " matrices with dimensions {" + s + "}, what is the minimum number of operations necessary to complete the multiplication?";
		}
	);
</script>
</head>
<body style = 'background-color: azure;'>
	<p style = "color: darkred; font-family: 'Trebuchet MS'; font-size: 1em; padding-top: 0.5em;" align = 'center'>COMP-SCI 5551 (FS16) - Advanced Software Engineering</p>
	<p align = 'center' style = "color: darkred; font-family: 'Trebuchet MS'; font-size: 1.5em; padding-top: 0.5em; text-decoration: underline;">Tutorial 8 Assignment - Due 10/19/16 by 23:59 PM</p>
	<p align = 'center' style = "color: darkred; font-family: 'Trebuchet MS'; font-size: 1em; padding-top: 0.5em;"><i>Dayu Wang</i> (59)</p>
	<p align = 'center' style = "color: darkblue; font-family: 'Trebuchet MS'; font-size: 1.5em; padding-top: 0.5em; text-decoration: underline;">Algorithm Quiz - Matrix Multiplication</p>
	<form action = "GradingServlet" method = 'get'>
	<!-- Hidden yet necessary information -->
	<div id = 'hideMe'>
		<input name = 'h0' id = 'h0'>
		<input name = 'h1' id = 'h1'>
		<input name = 'h2' id = 'h2'>
		<input name = 'h3' id = 'h3'>
		<input name = 'h4' id = 'h4'>
		<input name = 'h5' id = 'h5'>
		<input name = 'h6' id = 'h6'>
		<input name = 'h7' id = 'h7'>
	</div>
	<table>
		<tr>
			<td valign = 'top' style = "color: darkblue; font-family: 'Trebuchet MS'; font-size: 1em;">Q. </td>
			<td valign = 'top' id = 'numOfMatrices' style = "text-align: justify; color: darkblue; font-family: 'Trebuchet MS'; font-size: 1em"></td>
		</tr>
		<tr>
			<td></td>
			<td style = "color: darkgreen; font-family: 'Trebuchet MS'; font-size: 0.9em;"><input name = 'q1' type = "text" style = "color: darkgreen; background-color: azure; font-family: 'Trebuchet MS'; font-size: 1em; width: 100%; border: none; border-bottom: 2px solid darkgreen;">
				<br><i>Your answer goes here.</i>
			</td>
		</tr>
		<tr>
			<td></td>
			<td><button type = "submit" style = "background-color: yellow; border: 2px solid orange; color: red; font-size: 1.2em; font-family: 'Trebuchet MS'; padding: 0.3em 0.5em 0.3em 0.5em; margin-top: 1em;">Submit Your Answer</button></td>
		</tr>
	</table>
	</form>
</body>
</html>