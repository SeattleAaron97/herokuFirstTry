//js file to do my things in!!
var counter = 0;
var locationCounter = 0;

	var myTable= "<table><tr><td style='width: 100px; color: red;'>Entry Number</td>";
	myTable+= "<td style='width: 100px; color: red; text-align: right;'>Sex</td>";
	myTable+="<td style='width: 100px; color: red; text-align: right;'>Mean</td></tr>";

	myTable+="<tr><td style='width: 100px;                   '>---------------</td>";
	myTable+="<td     style='width: 100px; text-align: right;'>---------------</td>";
	myTable+="<td     style='width: 100px; text-align: right;'>---------------</td></tr>";

function dataDump(){
		locationCounter = 0;
        d3.csv("GBD_2017_death_rate_opioid_use_disorders_all_ages.csv", function (data){

			showDataForCountryAndYear(data);
			
		myTable+="</table>";	
		document.getElementById('tablePrint').innerHTML = myTable;
			

            ///$("#csvData").text(JSON.stringify(data))
        })
}	


function countCountry(data){
	var selectedLocation = document.getElementById("locationId").value;
	console.log('selectedLocation = '+ selectedLocation);
	if(data.location == selectedLocation){
		locationCounter ++;
	}
		
	console.log('locationCounter = '+ locationCounter);
	
}

function showDataForCountryAndYear(data){
	var currentMean = 0;
	var selectedLocation = document.getElementById("locationId").value;
	var selectedYear = document.getElementById("yearId").value;
	var myArray    = new Array();
	

	if((data.location == selectedLocation) && (data.year = selectedYear)){
		currentMean = data.mean;
		currentSex = data.sex;
		locationCounter ++;
		myTable+="<tr><td style='width: 100px;'>Number " + locationCounter + " is: 	&nbsp&nbsp&nbsp&nbsp </td>";
		myTable+="<td style='width: 100px; text-align: right;'>" +" " + currentSex + " " + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</td>";
		myTable+="<td style='width: 100px; text-align: right;'>" + currentMean + "</td><br>";

	}	

}


function printCountries(data){
	counter ++;
	var currentCountry = data.location;
	console.log('currentCountry = '+ currentCountry);
	console.log(counter);
}