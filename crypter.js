

var p = 131;
	var q = 257;
	var nonce = new Decimal(p * q);
	var pN = (p - 1) * (q - 1);
	var public_key = new Decimal("137");
	var private_key = new Decimal(Euclid_gcd(public_key,pN));
	

	// e = public_key 
	// d = private_key (Dont give your private key to other people!)
	// N = RSA-Module
	// φ(N) = RSA-Module-φ for the calculation of the private_key
	
function encrypt_msg(msg,pkey,noncee){
	var txt = msg;
	
	var output_stuff = txt.split("");
	

	var i = 0;
	var resulttxt = "";
	while(output_stuff[i]){
		var hex = output_stuff[i].charCodeAt(0).toString(16);
		var hexsplited = hex.split("");
		var charinhexa = hexatronin(hexsplited[0]) + hexatronin(hexsplited[1]) + Math.floor((Math.random() * 9) + 1);
		var encrypted = Decimal.mod(Decimal.pow(charinhexa,pkey),noncee);
		var resulttxt = resulttxt + " " + encrypted;
		i++;
	}
	return resulttxt;
}

function decrypt_msg(msg,pkey,nonced){
	var txt = msg;
	
	var output_stuff = txt.split(" ");
	

	var i = 0;
	var resulttxt = "";
	while(output_stuff[i]){
		var decrypted = Decimal.mod(Decimal.pow(output_stuff[i],pkey),nonced);
		
		var resdecrypted = decrypted+"";
		var resdecrypted = resdecrypted.substr(0, resdecrypted.length - 1);
		var resdecrypted = hexatronout(resdecrypted);
		var resulttxt = resulttxt + "" + resdecrypted;
		i++;
	}
	return hex_to_ascii(resulttxt);
}
	
function get_privatekey(){
	return private_key;
}

function get_publickey(){
	return public_key;
}

function get_rsamodule(){
	return nonce;
}