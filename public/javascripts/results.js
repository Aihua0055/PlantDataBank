//const plantButton = document.getElementById("resultButton");

//plantButton.addEventListener('click', event => {
//    window.location.href = 'plantInformation?plant=' + plantButton.value;
//});


// function result_name(){
// const http = require('http'); 
// const url = require('url'); 
// const querystring = require('querystring'); 
// const port = process.env.PORT || 8080;

// Add your code below
// const url = new Url('http://localhost:8080/attributes?hello=world&lorem=ipsum'); 

//     const server = http.createServer((req, res) => {
//     var parameters = url.parse(req.url,true).query;
//     console.log(parameters);
//     var result = "<!DOCTYPE html><html><head><style>table, th, td {border: 1px inset;}</style></head><body><table>";

//     // Add your code below
//     Object.keys(parameters).map((key, index) => {
//        console.log(key, parameters[key]);
//        result +=  "<tr><td>" + key + "</td><td>" + parameters[key] + "</td></tr>";
//        });

//        result += " </table></body></html>";
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(result);
//     res.end();


//  });
// }


const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener('click', event => {
    let query = window.location.search.substring(1).split('?');
    let destruct = query[0].split('&');
    let searchStr = destruct[0].split('=');
    let pageNum = nextBtn.value;

    if (pageNum !== 'reset') {
        pageNum++;
        window.location.href = 'results?nextGenusPage=' + searchStr[1] + '&page=' + pageNum;
    } else {
        window.location.href = 'results?genus=abies';
    }
});