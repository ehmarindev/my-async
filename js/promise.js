const makeXHttpRequest = (method, url) => {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open(method, url, true);
        xhttp.onload = () => {
            (xhttp.status === 200)
                ? resolve(xhttp.responseText)
                : reject(new Error(`Request not successful, status: ${xhttp.status}`));
        }
        xhttp.send();
    });
}

makeXHttpRequest("GET", "../php/php_server.php")
    .then((response) => { document.getElementById("p-response").innerText = response })
    .catch((err) => { console.error(err) });