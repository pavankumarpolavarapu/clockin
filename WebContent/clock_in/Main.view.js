sap.ui.jsview("clock_in.Main", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf clock_in.Main
	 */
	getControllerName : function() {
		return "clock_in.Main";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf clock_in.Main
	 */
	createContent : function(oController) {
		
		var oList = new sap.m.List({
			id: "listId",
			mode: sap.m.ListMode.SingleSelect,
			select: function(){
				oController.itemSelected(oList);
			}	
		})
		
		var oClockIn = new sap.m.StandardListItem("sCin", {
			title: "Clock In",
		})
		
		var oClockOut = new sap.m.StandardListItem("sCout", {
			title: "Clock Out",
		})
		
		oList.addItem(oClockIn).addItem(oClockOut);
 		return new sap.m.Page({
			title: "Application",
			content: [
				oList
			]
		});	
	}

});
