$(
    function() {
        $("#b").click(
            function() {
                $.ajax(
                    {
                        url: "http://127.0.0.1:8081/Harry%20Potter",
                        type: 'GET',
                        crossDomain: true,
                        
                        success: function(result) {
                            var wikiIntro = result["WikiInfo"][0]["intro"];
                            var eBayName = result["eBayInfo"][0]["name"];
                            var eBayImageUri = result["eBayInfo"][0]["imageUri"];
                            var eBayPrice = result["eBayInfo"][0]["price"];
                            var eBayLink = result["eBayInfo"][0]["link"];

                            $("#result").replaceWith(
                                "<div id='result'><p align='left' style=\"font-family:'Trebuchet MS';font-size:1em;padding-top:1em;padding-left:1em;padding-right:1em;color:darkblue;text-decoration:underline;\">Wikipedia Introduction of \"Harry Potter\"</p><p align='justify' style=\"font-family:'Trebuchet MS';font-size: 1em;padding-top: 1em;padding-left:1em;color:darkblue;\">" +
                                wikiIntro +
                                "</p><p align='left' style=\"font-family:'Trebuchet MS';font-size:1em;padding-top:1em;padding-left:1em;color:darkblue;text-decoration:underline;\">eBay Trading Information of \"Harry Potter\"</p><table style='margin:0px auto;'><tr><td style='vertical-align:top; padding-right: 1em'><img src='" +
                                eBayImageUri +
                                "' style='height:150px;width:auto;'></td><td style='vertical-align:top;'><p class='narrative'>" +
                                eBayName +
                                "<br><br>Price: <b style='color:red;'>" +
                                eBayPrice +
                                "</b><br><br><a href='" +
                                eBayLink +
                                "' target='_blank'>" +
                                eBayLink +
                                "</a></p></td></tr></table></div>"
                            );
                        }
                    }
                );
            }
        );
    }
);
