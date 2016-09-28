$(
	function() {
		$(".button").click(
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