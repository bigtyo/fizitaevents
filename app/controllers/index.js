var thisWin=$.index;

var main=Ti.UI.createWebView({
	backgroundColor: "#fff"
});

main.addEventListener('load',function(e){
	
	var jquery = webview.evalJS("$");
	jquery("#top").hide(); 
});
// store drawermenu and main in global variable for easy access from menu
Alloy.CFG.drawermenu=$.drawermenu;
Alloy.CFG.main=main;

var menu=Alloy.createController('menu').getView();

$.drawermenu.init({
    menuview:menu,
    mainview:main,
    duration:200,
    parent: thisWin
});

thisWin.addEventListener('open',function(e){
	var actionBarHelper = require('com.alcoapps.actionbarhelper')(thisWin);	
	actionBarHelper.setIcon('/drawericonw@2x.png');
	actionBarHelper.setTitle('Fizita Events');
	actionBarHelper.setUpAction(function(e){
		$.drawermenu.showhidemenu();
	});
	actionBarHelper.displayHomeAsUp(false);
});

thisWin.open();
