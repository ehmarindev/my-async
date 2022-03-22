
const SERV = "../php/php_server.php";

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

const makeXHttpRequest2 = async (method, url) => {
    let xhttp = new XMLHttpRequest();
    let response;
    xhttp.open(method, url, true);
    xhttp.onload = () => {
        (xhttp.status === 200)
            ? response = xhttp.responseText
            : response = new Error(`Request not successful, status: ${xhttp.status}`);
    }
    xhttp.send();
    return response;
}


(async () => {
    try { console.log(makeXHttpRequest("GET", SERV)); }
    // try { document.getElementById("p-response").innerText = makeXHttpRequest("GET", "../php/php_server.php"); }
    catch(err) { console.error(err); }
})();