$(document).ready(function() {
    $(".text-form").hide();
    $(".text").live("click", function() {
        $(this).closest(".contact").find(".text-form").slideToggle();
    });

    $(".text-form").live("submit", function(e) {
    	e.preventDefault();
    	var options = {};
    	options["to"] = $(this).closest(".contact").find(".number").text(); //number
    	options["body"] = $(this).find(".text-body").val(); //body
    	console.log(options);
    	//send text
    	var url = "https://jsonpify.heroku.com?resource=http://sendtext.herokuapp.com/sms";
    	$.ajax({
    		type: 'GET',
    		url: url,
    		data: options,
    		dataType: "jsonp",
    		success: function(data) {
    			console.log("Text Sent!");
    		}
    	});
    	$(this).find(".text-body").val("");
    	$(this).slideToggle();
    });
});