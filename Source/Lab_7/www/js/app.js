// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

function showResult() {
    var text = $("#userInput").val().replace(/\s/g, "%20");
    if (text.length == 0) {
        $("#r2").replaceWith("<div id = 'r2'><p id = 'reminder'>Please give a query string.</p></div>");
        $("#result").replaceWith("<div id = 'result'></div>");
        $('#printButton').replaceWith("<div id = 'printButton'></div>");
    } else {
        $("#r2").replaceWith("<div id = 'r2'><p id = 'reminder'></p></div>");
    }
    $.getJSON(
        "https://en.wikipedia.org/w/api.php?action=query&titles=" + text + "&redirects=true&prop=extracts&exintro=true&explaintext=true&format=json&callback=?",
        function(result) {
            var intro = result["query"]["pages"];
            $.each(
                intro,
                function(key, value) {
                    $("#result").replaceWith("<div id = 'result'><p class = 'smallTitle'><b>" + intro[key]["title"] + "</b></p><p class = 'resultText'>" + intro[key]["extract"] + "</p></div>");
                    localStorage.setItem('key', intro[key]["title"]);
                    localStorage.setItem('result', intro[key]["extract"]);
                }
            );
            $('#printButton').replaceWith("<div id = 'printButton'><p align = 'center'><button class = 'button' onclick = 'printPage();'><b>Print</b></button></p>");
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

function printPage() {
    var page = "<html><body><p style='font-size:15px;text-decoration:underline;'>" + localStorage.getItem('key') + "<br><br></p><p style='font-size:12px;text-align:justify;'>" + localStorage.getItem('result') + "</p></body></html>";
    cordova.plugins.printer.print(page, 'Document.html');
}
