$(document).ready(function() {

	//Save a contact to localStorage
	function save(name,number) {
		var data = localStorage["contacts"];
		var contacts = JSON.parse(data);
		contacts[name] = number;
		localStorage["contacts"] = JSON.stringify(contacts);
	}

	//shows a single contact
	function addOne(name,number) {
		//To do this we had to install handlebars from npm
		//Need handlebars.js
		//Make file contact.handlebars
		//Then fill in contact.handlebars file with the template we want
		//Run "handlebars templates/contact.handlebars -f js/templates.js" whenever we change contact.handlebars

		var template = Handlebars.templates.contact;
		var contact_html = template({name: name, number: number});
		$("#contacts").prepend(contact_html);
		$(".text-form").hide();
	}

	//shows all contacts
	function render() {
		var data = localStorage["contacts"];
		var contacts = JSON.parse(data);
		for (var name in contacts) {
			addOne(name, contacts[name]);
		}
	} 

	//Define what happens when we click submit
	$(".contact-form").on("submit", function(e) {
		//e.preventDefault(); //prevents form from resetting on submit
		var name = $("#name").val();
		var number = $("#number").val();
		save(name,number);
		addOne(name,number);
		console.log(name+ " " + number);
	});

	//if localStorage of "contacts" is empty
	if(!localStorage["contacts"]) {
		localStorage["contacts"] = "{}";
	}
	render();
});