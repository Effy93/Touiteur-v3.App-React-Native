const URL = "touiteur.cefim-formation.org"; 
// local 127.0.0.1
// classe 192.168.20.81
// CEFIM : touiteur.cefim-formation.org

function sendMessage (name, message, callback) {
    const request = new XMLHttpRequest();                                                  
    request.open("POST","http://" + URL + "/send", true);                             
    /* EVENT (avec une fonction) qui analyse l'etat requete */
       request.addEventListener ("readystatechange", function() {                           
            if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {     
                let response = JSON.parse(request.responseText);                            
                callback(response);                                                         
            }
        });
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");      
        request.send("name=" + encodeURIComponent(name) + "&message=" + encodeURIComponent(message));
        // alert("message envoyé");
}

function getMessages (timestamp, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://' + URL + '/list?ts=' + encodeURIComponent(timestamp), true);
    request.addEventListener('readystatechange', function() {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            let response = JSON.parse(request.responseText);
            callback(response);
        }
    });
    request.send();
}

function getTrendingWords(callback) {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://' + URL + '/trending',  true);
    request.addEventListener('readystatechange', function() {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            let response = JSON.parse(request.responseText);
            callback(response);
        }
    });
    request.send();
}

export { getMessages, sendMessage, getTrendingWords }
