function hexatronin(letter){
	
	switch(letter){
		case "0":
			var hexa = "00";
			break;
		case "1":
			var hexa = "01";
			break;
		case "2":
			var hexa = "02";
			break;
		case "3":
			var hexa = "03";
			break;
		case "4":
			var hexa = "04";
			break;
		case "5":
			var hexa = "05";
			break;
		case "6":
			var hexa = "06";
			break;
		case "7":
			var hexa = "07";
			break;
		case "8":
			var hexa = "08";
			break;
		case "9":
			var hexa = "09";
			break;
		case "a":
			var hexa = "10";
			break;
		case "b":
			var hexa = "11";
			break;
		case "c":
			var hexa = "12";
			break;
		case "d":
			var hexa = "13";
			break;
		case "e":
			var hexa = "14";
			break;
		case "f":
			var hexa = "15";
			break;
	}
	return hexa;
}

function hexatronout(letter){
	var letter = letter.split("");
	switch(letter[0]){
		case "0":
			var hexa1 = "0";
			break;
		case "1":
			var hexa1 = "1";
			break;
		case "2":
			var hexa1 = "2";
			break;
		case "3":
			var hexa1 = "3";
			break;
		case "4":
			var hexa1 = "4";
			break;
		case "5":
			var hexa1 = "5";
			break;
		case "6":
			var hexa1 = "6";
			break;
		case "7":
			var hexa1 = "7";
			break;
		case "8":
			var hexa1 = "8";
			break;
		case "9":
			var hexa1 = "9";
			break;
		case "10":
			var hexa1 = "a";
			break;
		case "11":
			var hexa1 = "b";
			break;
		case "12":
			var hexa1 = "c";
			break;
		case "13":
			var hexa1 = "d";
			break;
		case "14":
			var hexa1 = "e";
			break;
		case "15":
			var hexa1 = "f";
			break;
	}
	var letter2 = letter[1]+""+letter[2];
	switch(letter2){
		case "00":
			var hexa2 = "0";
			break;
		case "01":
			var hexa2 = "1";
			break;
		case "02":
			var hexa2 = "2";
			break;
		case "03":
			var hexa2 = "3";
			break;
		case "04":
			var hexa2 = "4";
			break;
		case "05":
			var hexa2 = "5";
			break;
		case "06":
			var hexa2 = "6";
			break;
		case "07":
			var hexa2 = "7";
			break;
		case "08":
			var hexa2 = "8";
			break;
		case "09":
			var hexa2 = "9";
			break;
		case "10":
			var hexa2 = "a";
			break;
		case "11":
			var hexa2 = "b";
			break;
		case "12":
			var hexa2 = "c";
			break;
		case "13":
			var hexa2 = "d";
			break;
		case "14":
			var hexa2 = "e";
			break;
		case "15":
			var hexa2 = "f";
			break;
	}
	return hexa1+""+hexa2;
}
function hex_to_ascii(str1)
 {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }