var express = require('express');
var app = express();
var request = require('request');

app.get(
    '/Harry%20Potter',
    function(req, res) {
        var result = {
            'WikiInfo': [],
            'eBayInfo': []
        };
        
        request(
            "https://en.wikipedia.org/w/api.php?action=query&titles=" + "Harry%20Potter" + "&redirects=true&prop=extracts&exintro=true&explaintext=true&format=json&callback=?",
            function(error, response, body) {
                if (error) {
                    return console.log('Error:', error);
                }
                if (response.statusCode !== 200) {
                    return console.log('Invalid Status Code Returned:', response.statusCode);
                }
                body = body.substring(5);
                body = body.substring(0, body.length - 1);
                body = JSON.parse(body);
                var ven = body.query.pages;
                for (key in ven) {
                    result.WikiInfo.push(
                        {
                            'name': ven[key]["title"],
                            'intro': ven[key]["extract"]
                        }
                    );
                }
            }
        );
        
        request(
            "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=yunlongl-s-PRD-a9f3034fd-7c6e9430&GLOBAL-ID=EBAY-US&keywords=Harry%20Potter&RESPONSE-DATA-FORMAT=JSON&paginationInput.entriesPerPage=1",
            function(error2, response2, body2) {
                if (error2) {
                    return console.log('Error:', error2);
                }
                if (response2.statusCode !== 200) {
                    return console.log('Invalid Status Code Returned:', response2.statusCode);
                }
                body2 = JSON.parse(body2);
                var name2 = body2.findItemsByKeywordsResponse[0].searchResult[0].item[0].title;
                var imageUri2 = body2["findItemsByKeywordsResponse"][0]["searchResult"][0]["item"][0]["galleryURL"];
                var price2 = body2["findItemsByKeywordsResponse"][0]["searchResult"][0]["item"][0]["sellingStatus"][0]["currentPrice"][0]["__value__"];
                var ebayLink2 = body2["findItemsByKeywordsResponse"][0]["searchResult"][0]["item"][0]["viewItemURL"];
                result.eBayInfo.push(
                    {
                        'name': name2,
                        'imageUri': imageUri2,
                        'price': 'USD ' + price2,
                        'link': ebayLink2
                    }
                );
                res.contentType('application/json');
                res.write(JSON.stringify(result));
                res.end();
            }
        );
    }
);

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
