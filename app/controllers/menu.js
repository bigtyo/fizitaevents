var args = arguments[0] || {};

function menuclick(e){
	var rowId=e.rowData.rowId;
	
	switch (rowId){
		case "1":
			Alloy.CFG.main.url = "http://fizita.com/";
			break;
		case "2":
			Alloy.CFG.main.url = Alloy.CFG.main.url + "#";
			break;
		case "3":
			Alloy.CFG.main.url = "http://fizita.com/the-planner/";
			break;
		case "4":
			Alloy.CFG.main.url = "http://fizita.com/wedding-catering/";
			break;
		case "5":
			Alloy.CFG.main.url = "http://fizita.com/event/";
			break;
		case "6":
			Alloy.CFG.main.url = "http://fizita.com/gallery/";
			break;
		case "7":
			Alloy.CFG.main.url = "http://fizita.com/about/";
			break;
		case "8":
			Alloy.CFG.main.url = "http://fizita.com/contact/";
			break;
	}
	
	Alloy.CFG.drawermenu.showhidemenu();
	
}

function init(obj){
	var url = "http://localhost/fizitaevents2/?json=get_menus";
	 //var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	 //    onload : function(e) {
	 //        Ti.API.info("Received text: " + this.responseText);
	 //        alert('success');
	 //    },
	     // function called when an error occurs, including a timeout
	 //    onerror : function(e) {
	 //        Ti.API.debug(e.error);
	 //        alert('error');
	 //    },
	 //    timeout : 5000  // in milliseconds
	// });
	 // Prepare the connection.
	// client.open("GET", url);
	 // Send the request.
	// client.send();
}


function setMenu(){
	
}
