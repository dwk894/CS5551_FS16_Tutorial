function showResult() {
    var text = $("#userInput").val().replace(/\s/g, "%20");
    if (text.length == 0) {
        $("#r2").replaceWith("<div id = 'r2'><p id = 'reminder'>Please give a query string.</p></div>");
        $("#result").replaceWith("<div id = 'result'></div>");
		$("#pictures").replaceWith("<div id = 'pictures'></div>");
    } else {
        $("#r2").replaceWith("<div id = 'r2'><p id = 'reminder'></p></div>");
    }
	$.getJSON(
		"https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2ec2303f2f851adc69d5d238f3b76e41&accuracy=1&tags=" + text + "&sort=relevance&extras=url_l&format=json&nojsoncallback=1",
		function(result) {
			var i, id, secret, server, farm, purl;
			var j = 0;
			for (i = 162; i <= Math.floor(window.innerWidth); i += 162) {
				id = result["photos"]["photo"][j]["id"];
				secret = result["photos"]["photo"][j]["secret"];
				server = result["photos"]["photo"][j]["server"];
				farm = result["photos"]["photo"][j]["farm"];
				purl = "https://farm" + farm + ".staticflickr.com/" + server + "/" + id + "_" + secret + "_q.jpg";
				$("#pictures").append("<img src = '" + purl + "'></img>");
				j++;
			}
		}
	);
    $.getJSON(
        "https://en.wikipedia.org/w/api.php?action=query&titles=" + text + "&redirects=true&prop=extracts&exintro=true&explaintext=true&format=json&callback=?",
        function(result) {
            var intro = result["query"]["pages"];
            $.each(
                intro,
                function(key, value) {
                    $("#result").replaceWith("<div id = 'result'><p class = 'smallTitle'>" + intro[key]["title"] + "</p><p class = 'resultText'>" + intro[key]["extract"] + "</p></div>");
                }
            );
        }
    );
}

$(
	function() {
		$("#userInput").keyup(
			function(event) {
				if (event.which == 13) {
					showResult();
				}
			}
		);
	}
);

function LogOut() {
	window.location.href = "index.html";
}

$(document).ready(
	function() {
		var y = localStorage.getItem("user");
		$("#welcome").append("Welcome " + y + "!         ");
		$("#welcome").append("<button id = 'logOut' onclick = 'LogOut();'>Logout</button>");
	}
);