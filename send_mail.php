<?php 

// Pasi pentru formular ctrl + / pentru comment
// 1. Realizam formularul HTML si sa puna atributul nume
// 2. Creem o pagina php in care formam variabile cu $
// 3. Trebuie sa afisam  variabilele pentru a verifica datele trimise
// 4. Trimitem datele pe email



$varNume = $_POST["nume"];
$varEmail = $_POST["email"];
$varTel = $_POST["telefon"];
$varMesaj = $_POST["mesaj"];
$varCompanie = $_POST["companie"];

echo "
Nume: $varNume <br>
Email: $varEmail <br>
Telefon: $varTel <br>
Telefon: $varCompanie <br>
Mesaj: $varMesaj <br>
";



$to      = 'sgdorin+volum@gmail.com'; // adresa unde ajunge mesajul

$subject = 'Hey I would like to work with you'; // subiectul mailului

$content = "

Client's Name : $varNume

Company: $varCompanie

Work Email: $varEmail

Phone number: $varTel

Message: $varMesaj



"; //  continutul mailului



$headers = 'From: work@volum.design' . "\r\n" .

    "Reply-To: $varEmail" . "\r\n" .

    'X-Mailer: PHP/' . phpversion(); //necesare php

mail($to, $subject, $content, $headers); // functia de trimitere mail

header('Location:thank_you_page.html'); // face redirect pe paginea de multumire.htmml

exit();

?>
