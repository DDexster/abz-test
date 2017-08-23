var headers = {
    "Authorization": "038c7ed86fc3962b6c37f046c1e475976ccdee01"
}
var url = "http://504080.com/api/v1/services/categories";
var creds = {
    method: "GET",
    headers: headers
}

var fetch = require('fetch');

fetch.fetchUrl(url, creds, function(err, meta, body) {
    if (err) {
        console.log(err);
    } else {
        console.log(body.toString());
    }
});