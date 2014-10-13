function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function menuclick(e) {
        var rowId = e.rowData.rowId;
        switch (rowId) {
          case "1":
            Alloy.CFG.main.url = "http://fizita.com/";
            break;

          case "2":
            Alloy.CFG.main.url = "http://fizita.com/#";
            break;

          case "3":
            Alloy.CFG.main.url = "http://fizita.com/the-planner/";
            break;

          case "4":
            Alloy.CFG.main.backgroundColor = "#D88922";
        }
        Alloy.CFG.drawermenu.showhidemenu();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#4F4F4F",
        id: "menu"
    });
    $.__views.menu && $.addTopLevelView($.__views.menu);
    $.__views.__alloyId0 = Ti.UI.createView({
        top: "0",
        height: "100",
        backgroundImage: "/coffee.png",
        id: "__alloyId0"
    });
    $.__views.menu.add($.__views.__alloyId0);
    var __alloyId2 = [];
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        color: "#fff",
        height: Ti.UI.SIZE,
        rowId: "1",
        id: "__alloyId3"
    });
    __alloyId2.push($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        backgroundColor: "#414141",
        height: "50",
        layout: "horizontal",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        left: "5",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createImageView({
        width: "30",
        height: "30",
        image: "/ic_action_not_important.png",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#fff",
        left: "10",
        text: "Home",
        id: "__alloyId7"
    });
    $.__views.__alloyId4.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        color: "#fff",
        height: Ti.UI.SIZE,
        rowId: "2",
        id: "__alloyId8"
    });
    __alloyId2.push($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        backgroundColor: "#414141",
        height: "50",
        layout: "horizontal",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        left: "5",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createImageView({
        width: "30",
        height: "30",
        image: "/ic_action_not_important.png",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#fff",
        left: "10",
        text: "Our Service",
        id: "__alloyId12"
    });
    $.__views.__alloyId9.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        color: "#fff",
        height: Ti.UI.SIZE,
        rowId: "3",
        id: "__alloyId13"
    });
    __alloyId2.push($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
        backgroundColor: "#414141",
        height: "50",
        layout: "horizontal",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        left: "5",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createImageView({
        width: "30",
        height: "30",
        image: "/ic_action_not_important.png",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#fff",
        left: "10",
        text: "The Planner",
        id: "__alloyId17"
    });
    $.__views.__alloyId14.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        color: "#fff",
        height: Ti.UI.SIZE,
        rowId: "4",
        id: "__alloyId18"
    });
    __alloyId2.push($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
        backgroundColor: "#414141",
        height: "50",
        layout: "horizontal",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        left: "5",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createImageView({
        width: "30",
        height: "30",
        image: "/ic_action_not_important.png",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#fff",
        left: "10",
        text: "Wedding and catering",
        id: "__alloyId22"
    });
    $.__views.__alloyId19.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        color: "#fff",
        height: Ti.UI.SIZE,
        rowId: "5",
        id: "__alloyId23"
    });
    __alloyId2.push($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createView({
        backgroundColor: "#414141",
        height: "50",
        layout: "horizontal",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        left: "5",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createImageView({
        width: "30",
        height: "30",
        image: "/ic_action_not_important.png",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#fff",
        left: "10",
        text: "Events",
        id: "__alloyId27"
    });
    $.__views.__alloyId24.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        color: "#fff",
        height: Ti.UI.SIZE,
        rowId: "6",
        id: "__alloyId28"
    });
    __alloyId2.push($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView({
        backgroundColor: "#414141",
        height: "50",
        layout: "horizontal",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        left: "5",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createImageView({
        width: "30",
        height: "30",
        image: "/ic_action_not_important.png",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#fff",
        left: "10",
        text: "Gallery",
        id: "__alloyId32"
    });
    $.__views.__alloyId29.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        color: "#fff",
        height: Ti.UI.SIZE,
        rowId: "7",
        id: "__alloyId33"
    });
    __alloyId2.push($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createView({
        backgroundColor: "#414141",
        height: "50",
        layout: "horizontal",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        left: "5",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createImageView({
        width: "30",
        height: "30",
        image: "/ic_action_not_important.png",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#fff",
        left: "10",
        text: "About",
        id: "__alloyId37"
    });
    $.__views.__alloyId34.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        color: "#fff",
        height: Ti.UI.SIZE,
        rowId: "8",
        id: "__alloyId38"
    });
    __alloyId2.push($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        backgroundColor: "#414141",
        height: "50",
        layout: "horizontal",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        left: "5",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createImageView({
        width: "30",
        height: "30",
        image: "/ic_action_not_important.png",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#fff",
        left: "10",
        text: "Contact",
        id: "__alloyId42"
    });
    $.__views.__alloyId39.add($.__views.__alloyId42);
    $.__views.__alloyId1 = Ti.UI.createTableView({
        backgroundColor: "#343434",
        top: "100",
        height: Ti.UI.SIZE,
        data: __alloyId2,
        id: "__alloyId1"
    });
    $.__views.menu.add($.__views.__alloyId1);
    menuclick ? $.__views.__alloyId1.addEventListener("click", menuclick) : __defers["$.__views.__alloyId1!click!menuclick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId1!click!menuclick"] && $.__views.__alloyId1.addEventListener("click", menuclick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;