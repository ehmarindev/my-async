let xhttp = new XMLHttpRequest();
xhttp.open ("GET", "../php/php_server.php", false);
xhttp.send();
document.getElementById("p-respuesta").innerText = `Sync: ${xhttp.responseText}`;
