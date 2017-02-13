<?php
define('UPLOAD_DIR', 'business_card/');
header('Content-Type: application/json; Charset=UTF-8');
require("config.php");
$data = json_decode($_POST["data"],true);
$con = mysqli_connect($url_db,$db_user,$db_pwd,$db_name);
if (!$con){
	echo json_encode(array("success" => false, "message" => "Errore durante la connessione al DB"));
}
else{
	if(!filter_var( $data["email"], FILTER_VALIDATE_EMAIL))
		$msg_error .= "Email ".$data["email"]." non valida<br>";
	if($data["fname"]=="")
		$msg_error .= "Nome mancante<br>";
	if($data["lname"]=="")
		$msg_error .= "Cognome mancante<br>";
	if(is_null($data["nazione"]) || $data["nazione"]=="")
		$msg_error .= "Nazione mancante<br>";
	if($data["nazione"]=="IT" && $data["provincia"]=="")
		$msg_error .= "Provincia mancante<br>";
	if(is_null($data["richiesta"]))
		$msg_error .= "Nessuna richiesta selezionata<br>";	
	if(is_null($data["privacy"]))
		$msg_error .= "Privacy non accettata";
	if($msg_error != ""){
		echo json_encode(array("success" => false, "message" => $msg_error));
		exit();
	}
	else{	
			if (is_array($data["azienda"])) {
				foreach($data["azienda"] as $azienda_catalogo){
					switch($azienda_catalogo){
					case "ciam":{
							$aziende[0] = 1;
							$cataloghi .= "\tC.I.A.M. - Costruzioni Architettoniche Innovative: <url>";
							$cataloghi_html .= '- <a href="<url>">C.I.A.M. - Costruzioni Architettoniche Innovative</a><br/>';
						}
						break;
					case "azi_02":{
							$aziende[1] = 1;
							$cataloghi .= "\tAzienda 02: <url>";
							$cataloghi_html .= '- <a href="<url>">Azienda 02</a><br/>';
						}
						break;
					case "azi_03":{
							$aziende[2] = 1;
							$cataloghi .= "\tAzienda 03: <url>";
							$cataloghi_html .= '- <a href="<url>">Azienda 03</a><br/>';
						}
						break;
					case "azi_04":{
							$aziende[3] = 1;
							$cataloghi .= "\tAzienda 04: <url>";
							$cataloghi_html .= '- <a href="<url>">Azienda 04</a><br/>';
						}
						break;
					case "azi_05":{
							$aziende[4] = 1;
							$cataloghi .= "\tAzienda 05: <url>";
							$cataloghi_html .= '- <a href="<url>">Azienda 05</a><br/>';
						}
						break;
					case "azi_06":{
							$aziende[5] = 1;
							$cataloghi .= "\tAzienda 06: <url>";
							$cataloghi_html .= '- <a href="<url>">Azienda 06</a><br/>';
						}
						break;
					}
				}}
			else{
				switch($data["azienda"]){
				case "ciam":{
						$aziende[0] = 1;
						$cataloghi .= "\tC.I.A.M. - Costruzioni Architettoniche Innovative: <url>";
						$cataloghi_html .= '- <a href="<url>">C.I.A.M. - Costruzioni Architettoniche Innovative</a><br/>';
					}
					break;
				case "azi_02":{
						$aziende[1] = 1;
						$cataloghi .= "\tAzienda 02: <url>";
						$cataloghi_html .= '- <a href="<url>">Azienda 02</a><br/>';
					}
					break;
				case "azi_03":{
						$aziende[2] = 1;
						$cataloghi .= "\tAzienda 03: <url>";
						$cataloghi_html .= '- <a href="<url>">Azienda 03</a><br/>';
					}
					break;
				case "azi_04":{
						$aziende[3] = 1;
						$cataloghi .= "\tAzienda 04: <url>";
						$cataloghi_html .= '- <a href="<url>">Azienda 04</a><br/>';
					}
					break;
				case "azi_05":{
						$aziende[4] = 1;
						$cataloghi .= "\tAzienda 05: <url>";
						$cataloghi_html .= '- <a href="<url>">Azienda 05</a><br/>';
					}
					break;
				case "azi_06":{
						$aziende[5] = 1;
						$cataloghi .= "\tAzienda 06: <url>";
						$cataloghi_html .= '- <a href="<url>">Azienda 06</a><br/>';
					}
					break;
				}
			}
			if(is_array($data["richiesta"])){
				foreach($data["richiesta"] as $richiesta_form){
					switch($richiesta_form){
					case "info":{
							$richiesta[0] = 1;
							$send_email = 1;
						}
						break;
					case "cataloghi":
						$richiesta[1] = 1;
						break;
					case "newsletter":
						$richiesta[2] = 1;
						break;
					case "appuntamento":
						$richiesta[3] = 1;
						break;
					case "preventivo":
						$richiesta[4] = 1;
						break;
					case "fornitore":
						$richiesta[5] = 1;
						break;
					case "intervista":
						$richiesta[6] = 1;
						break;

					case "listini":
						$richiesta[7] = 1;
						break;
					}
				}
			}
			else{
				switch($data["richiesta"]){
					case "info":{
							$richiesta[0] = 1;
							$send_email = 1;
						}
						break;
					case "cataloghi":
						$richiesta[1] = 1;
						break;
					case "newsletter":
						$richiesta[2] = 1;
						break;
					case "appuntamento":
						$richiesta[3] = 1;
						break;
					case "preventivo":
						$richiesta[4] = 1;
						break;
					case "fornitore":
						$richiesta[5] = 1;
						break;
					case "intervista":
						$richiesta[6] = 1;
						break;

					case "listini":
						$richiesta[7] = 1;
						break;
					}
			}
			if(!is_null($data["interessi"])){
				foreach($data["interessi"] as $interessi_form){
					switch($interessi_form){
					case "legno_bio":
						$interesse[0] = 1;
						break;
					case "XLAM":
						$interesse[1] = 1;
						break;
					case "progettazione":
						$interesse[2] = 1;
						break;
					case "design":
						$interesse[3] = 1;
						break;
					case "isolamento":
						$interesse[4] = 1;
						break;
					case "serramenti":
						$interesse[5] = 1;
						break;
					case "materiali":
						$interesse[6] = 1;
						break;
					case "generale":
						$interesse[7] = 1;
						break;
					default:
					}
				}}
			if($data["img"] != NULL){
				$img = $data["img"];
				$img = str_replace('data:image/jpeg;base64,', '', $img);
				$img = str_replace(' ', '+', $img);
				$decoded_img = base64_decode($img);
				$file = UPLOAD_DIR . $data["lname"].'_'.$data["fname"] .'_'.substr(md5(uniqid($username, true)),0,5). '.jpeg';
				if(!file_put_contents($file, $decoded_img))
					echo json_encode(array("success" => false, "message" => "Errore nell'upload dell'immagine"));
			}
		
		if($data["nazione"]=="Italia"){
			switch($data["provincia"]){
			case "Agrigento":
				$zona = "Sicilia";
				break;
			case "Alessandria":
				$zona = "Nord Ovest";
				break;
			case "Ancona":
				$zona = "Centro Sud";
				break;
			case "Aosta":
				$zona = "Nord Ovest";
				break;
			case "Arezzo":
				$zona = "Centro";
				break;
			case "Ascoli Piceno":
				$zona = "Centro Sud";
				break;
			case "Asti":
				$zona = "Nord Ovest";
				break;
			case "Avellino":
				$zona = "Sud";
				break;
			case "Bari":
				$zona = "Sud";
				break;
			case "Barletta-Andria-Trani":
				$zona = "Sud";
				break;
			case "Belluno":
				$zona = "Nord Est";
				break;
			case "Benevento":
				$zona = "Sud";
				break;
			case "Bergamo":
				$zona = "Centro Nord";
				break;
			case "Biella":
				$zona = "Nord Ovest";
				break;
			case "Bologna":
				$zona = "Centro";
				break;
			case "Bolzano":
				$zona = "Nord Est";
				break;
			case "Brescia":
				$zona = "Centro Nord";
				break;
			case "Brindisi":
				$zona = "Sud";
				break;
			case "Cagliari":
				$zona = "Sardegna";
				break;
			case "Caltanissetta":
				$zona = "Sicilia";
				break;
			case "Campobasso":
				$zona = "Centro Sud";
				break;
			case "Carbonia-Iglesias":
				$zona = "Sardegna";
				break;
			case "Caserta":
				$zona = "Sud";
				break;
			case "Catania":
				$zona = "Sicilia";
				break;
			case "Catanzaro":
				$zona = "Sud";
				break;
			case "Chieti":
				$zona = "Centro Sud";
				break;
			case "Como":
				$zona = "Centro Nord";
				break;
			case "Cosenza":
				$zona = "Sud";
				break;
			case "Cremona":
				$zona = "Centro Nord";
				break;
			case "Crotone":
				$zona = "Sud";
				break;
			case "Cuneo":
				$zona = "Nord Ovest";
				break;
			case "Enna":
				$zona = "Sicilia";
				break;
			case "Fermo":
				$zona = "Centro Sud";
				break;
			case "Ferrara":
				$zona = "Centro";
				break;
			case "Firenze":
				$zona = "Centro";
				break;
			case "Foggia":
				$zona = "Sud";
				break;
			case "Forlì e Cesena":
				$zona = "Centro";
				break;
			case "Frosinone":
				$zona = "Centro Sud";
				break;
			case "Genova":
				$zona = "Nord Ovest";
				break;
			case "Gorizia":
				$zona = "Nord Est";
				break;
			case "Grosseto":
				$zona = "Centro";
				break;
			case "Imperia":
				$zona = "Nord Ovest";
				break;
			case "Isernia":
				$zona = "Centro Sud";
				break;
			case "La Spezia":
				$zona = "Nord Ovest";
				break;
			case "L'Aquila":
				$zona = "Centro Sud";
				break;
			case "Latina":
				$zona = "Centro Sud";
				break;
			case "Lecce":
				$zona = "Sud";
				break;
			case "Lecco":
				$zona = "Centro Nord";
				break;
			case "Livorno":
				$zona = "Centro";
				break;
			case "Lodi":
				$zona = "Centro Nord";
				break;
			case "Lucca":
				$zona = "Centro";
				break;
			case "Macerata":
				$zona = "Centro Sud";
				break;
			case "Mantova":
				$zona = "Centro Nord";
				break;
			case "Massa e Carrara":
				$zona = "Centro";
				break;
			case "Matera":
				$zona = "Sud";
				break;
			case "Medio Campidano":
				$zona = "Sardegna";
				break;
			case "Messina":
				$zona = "Sicilia";
				break;
			case "Milano":
				$zona = "Centro Nord";
				break;
			case "Modena":
				$zona = "Centro";
				break;
			case "Monza e Brianza":
				$zona = "Centro Nord";
				break;
			case "Napoli":
				$zona = "Sud";
				break;
			case "Novara":
				$zona = "Nord Ovest";
				break;
			case "Nuoro":
				$zona = "Sardegna";
				break;
			case "Ogliastra":
				$zona = "Sardegna";
				break;
			case "Olbia-Tempio":
				$zona = "Sardegna";
				break;
			case "Oristano":
				$zona = "Sardegna";
				break;
			case "Padova":
				$zona = "Nord Est";
				break;
			case "Palermo":
				$zona = "Sicilia";
				break;
			case "Parma":
				$zona = "Centro";
				break;
			case "Pavia":
				$zona = "Centro Nord";
				break;
			case "Perugia":
				$zona = "Centro Sud";
				break;
			case "Pesaro e Urbino":
				$zona = "Centro Sud";
				break;
			case "Pescara":
				$zona = "Centro Sud";
				break;
			case "Piacenza":
				$zona = "Centro";
				break;
			case "Pisa":
				$zona = "Centro";
				break;
			case "Pistoia":
				$zona = "Centro";
				break;
			case "Pordenone":
				$zona = "Nord Est";
				break;
			case "Potenza":
				$zona = "Sud";
				break;
			case "Prato":
				$zona = "Centro";
				break;
			case "Ragusa":
				$zona = "Sicilia";
				break;
			case "Ravenna":
				$zona = "Centro";
				break;
			case "Reggio Calabria":
				$zona = "Sud";
				break;
			case "Reggio Emilia":
				$zona = "Centro";
				break;
			case "Rieti":
				$zona = "Centro Sud";
				break;
			case "Rimini":
				$zona = "Centro";
				break;
			case "Roma":
				$zona = "Centro Sud";
				break;
			case "Rovigo":
				$zona = "Nord Est";
				break;
			case "Salerno":
				$zona = "Sud";
				break;
			case "Sassari":
				$zona = "Sardegna";
				break;
			case "Savona":
				$zona = "Nord Ovest";
				break;
			case "Siena":
				$zona = "Centro";
				break;
			case "Siracusa":
				$zona = "Sicilia";
				break;
			case "Sondrio":
				$zona = "Centro Nord";
				break;
			case "Taranto":
				$zona = "Sud";
				break;
			case "Teramo":
				$zona = "Centro Sud";
				break;
			case "Terni":
				$zona = "Centro Sud";
				break;
			case "Torino":
				$zona = "Nord Ovest";
				break;
			case "Trapani":
				$zona = "Sicilia";
				break;
			case "Trento (Autonoma)":
				$zona = "Nord Est";
				break;
			case "Treviso":
				$zona = "Nord Est";
				break;
			case "Trieste":
				$zona = "Nord Est";
				break;
			case "Udine":
				$zona = "Nord Est";
				break;
			case "Varese":
				$zona = "Centro Nord";
				break;
			case "Venezia":
				$zona = "Nord Est";
				break;
			case "Verbano-Cusio-Ossola":
				$zona = "Nord Ovest";
				break;
			case "Vercelli":
				$zona = "Nord Ovest";
				break;
			case "Verona":
				$zona = "Nord Est";
				break;
			case "Vibo Valentia":
				$zona = "Sud";
				break;
			case "Vicenza":
				$zona = "Nord Est";
				break;
			case "Viterbo":
				$zona = "Centro Sud";
				break;
			}
		}
		if($send_email==1){
			$header = "From: ".$data["persona"]." <info@ciamcostruzioni.it>\n";
			$boundary = "==String_Boundary_x" .md5(time()). "x";
			$header .= "MIME-Version: 1.0\n";
			$header .= "Content-Type: multipart/related;\n";
			$header .= " boundary=\"$boundary\";\n\n";
			$messaggio = "Grazie per essere passati a trovarci al Nostro Stand.\nDi seguito ";
			if(count($data["azienda"])>1)
				$messaggio .= "i link per scaricare i cataloghi delle aziende selezionate:\n";
			else
				$messaggio .= "il link per scaricare il catalogo della:\n";
			$messaggio .= $cataloghi;
			$messaggio .= $messaggio_footer;
			$messaggio .= "--".$boundary."\n";
			$messaggio .= "Content-Type: text/html; charset=\"iso-8859-1\"\n";
			$messaggio .= "Content-Transfer-Encoding: 7bit\n\n";
			$messaggio .= "<html>
		<body>
		<a style=\"border:0\" href=\"http://www.ciamcostruzioni.it\"><img src=\"".$img_base64."\" border=\"0\"></a><br /><br />Grazie per essere passati a trovarci al Nostro Stand.<br />Di seguito ";
			if(count($data["azienda"])>1)
				$messaggio .= "i link per scaricare i cataloghi delle aziende selezionate:<br />";
			else
				$messaggio .= "il link per scaricare il catalogo della:<br />";
			$messaggio .= $cataloghi_html;
			$messaggio .= $messaggio_footer_html;
			$messaggio .= "--".$boundary."--\n";
			$subject = "Credenziali contatto fiera MADE EXPO 2013";
			if(!mail($data["email"],$subject,$messaggio,$header)){
				$email_errore = 1;
			}
		}
		$values = "(NULL, '$data[fname]', '$data[lname]', '$data[email]', '$data[nazione]', '$data[provincia]','$zona', '$data[CAP]', '$data[indirizzo]', '$data[citta]', '$data[telefono]', '$data[cellulare]', '$data[website]', '$data[persona]', '$data[altro]', '$data[Nome_azienda]', '$data[privato]', '$data[professione]', '$richiesta[0]', '$richiesta[1]', '$richiesta[2]', '$richiesta[3]', '$richiesta[4]', '$richiesta[5]', '$richiesta[6]', '$richiesta[7]', '$interesse[0]', '$interesse[1]', '$interesse[2]', '$interesse[3]', '$interesse[4]', '$interesse[5]', '$interesse[6]', '$interesse[7]', '$data[feedback]', '$file','$email_errore')";
		$sql = "INSERT INTO $table_name $col_name VALUES  $values";
		if (!mysqli_query($con,$sql)){
			echo json_encode(array("success" => false, "message" => $values));
		}
		else{
			echo json_encode(array("success" => true, "message" => "OK"));
		}
	}
	mysqli_close($con);
}
?>