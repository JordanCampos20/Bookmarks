var img = new Image();
img.onload = function () {
	var email = prompt("Qual o Email Abrir? (DEFAULT: GMAIL)");
	var num_email = prompt("Qual o Número do Email? (DEFAULT: 0)");
	if (email == "GMAIL" || email == "gmail" || email == "") {
		if (num_email == "" || num_email == 0) {
			emailescolhido = "https://mail.google.com/mail/u/" + 0 + "/#inbox";
		} else {
			emailescolhido = "https://mail.google.com/mail/u/" + num_email + "/#inbox";
		}
	} else if (email == "HOTMAIL" || email == "hotmail") {
		if (num_email == "" || num_email == 0) {
			emailescolhido = "https://outlook.live.com/mail/" + 0 + "/";
		} else {
			emailescolhido = "https://outlook.live.com/mail/" + num_email + "/";
		}
	} else if (email == null || num_email == null) {
		window.close();
	} else {
		loaded();
	}
	window.open(emailescolhido, "_self");
}
img.src = "gorh.png"