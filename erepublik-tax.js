//var Country = ['Albania','Argentina','Armenia','Australia','Austria',
//               'Belarus','Belgium','Bolivia','Bosnia-Herzegovina',
//               'Brazil','Bulgaria','Canada','Chile','China','Colombia',
//               'Croatia','Cuba','Cyprus','Czech-Republic','Denmark','Egypt',
//               'Estornia','Finland','France','Gerogia','Germany','Greece',
//               'Hungary','India','Indonesia','Iran','Ireland','Israel','Italy',
//               'Japan','Latvia','Lithuania','Malaysia','Mexico','Montenegro',
//               'Netherlands','New-Zealand','Nigeria','North-Korea','Norway',
//               'Pakistan','Paraguay','Peru','Phillippines','Poland','Portugal',
//               'Republic-of-China-Taiwan','Republic-of-Macedonia-FYROM',
//               'Republic of Moldova','Romania','Russia','Saudi-Arabia','Serbia',
//               'Singapore','Slovakia','Slovenia','South-Africa','South-Korea',
//               'Spain','Sweden','Switzerland','Thailand','Turkey','Ukraine',
//               'United-Arab-Emirates','United-Kingdom','Uruguay','USA','Venezuela'];

//Delay for eRepublik Load Time
setTimeout(function getTax() {
	// Use Google spreadsheet Form
	var formLink = "";
	
	var sumTax = 0;
	var valCountry = location.href.split('/').slice(-1)[0];
	
	var rawScript = drawChart.toString();
	var taxData = JSON.parse(
		(/^\s*var data2 = google.*(\[\[.*\]\]).*$/m).exec(rawScript)[1]);

	for(var i = 1; i < taxData.length; i++){
		//Today Tax = 7
		sumTax += taxData[i][6];
	}
	
	sumTax = Math.floor(sumTax*100)/100;
  
    jQuery.ajax({
        url: formLink,
        data: {"": valCountry, "": sumTax},
        type: "POST",
        dataType: "xml",
        crossDomain: true,
    }); // it gives error, but still works
}, 1000);
