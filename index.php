<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="styles.css">
	<meta charset="UTF-8">
    <title>Quick Heroku Deployment test</title>
	<script src="https://d3js.org/d3.v5.min.js"></script>
  </head>
  <body>
	<script src="action.js"></script>
	<h1>Hello, welcome all viewers!</h1>
	<br>
	<p> This page is a data visualization for the UW IMHE coding challenge. For reference, the three numeric data points are </p>
	
	<p>Mean: This is the mean death rate (number of deaths per 100,000 people) due to opioid use disorders for a given location, sex, and year.</p>
	<p>Upper: This is the upper bound of uncertainty for the mean</p>
	<p>Lower: This is the lower bound of uncertainty for the mean</p>



	Country Name:<br>
	<input type="text" name="location" id="locationId"><br>
	Year (1990 - 2017):<br>
	<input type="number" name="yaer" id="yearId"><br>
	<button onclick="dataDump()"> Click me! </button>
	
	<p>after clicking the button, please wait about 20 seconds, the action is slow.</p>
    <div id="tablePrint"> </div>

	
  </body>
</html>