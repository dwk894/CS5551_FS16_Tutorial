var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

$(
	function() {
		$("#button1").click(
			function() {
				var value = $("#userName").val();
				localStorage.setItem("user", value);
				window.location.href = "Home.html";
			}
		);
	}
);

$(
	function() {
		$("#button2").click(
			function() {
				window.location.href = "Registration.html";
			}
		);
	}
);

$(
	function() {
		$("#password").keyup(
			function() {
				if(event.keyCode >= 48) {
					var x = $("#password").val();
					var s = localStorage.getItem("star");
					s = s + "*";
					localStorage.setItem("star", s);
					$("#password").val(s.substring(4));
				}
			}
		);
	}
);

$(document).ready(
	function() {
		localStorage.setItem("star", null);
	}
);