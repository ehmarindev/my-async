function makeXHttpRequest(method, url, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.onload = function () {
        if (xhttp.status === 200) callback(null, xhttp.responseText);
        else {
            const err = new Error("Request not successful, status: " + xhttp.status);
            callback(err, null);
        }
    }
    xhttp.send();
}

makeXHttpRequest("GET", "../php/php_server.php", function(err, response) {
    if (!err) document.getElementById("p-response").innerText = response;
    else console.error(err);
});