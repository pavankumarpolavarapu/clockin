sap.ui.jsview("clock_in.ClockOut", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf clock_in.ClockOut
	 */
	getControllerName : function() {
		return "clock_in.ClockOut";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf clock_in.ClockOut
	 */
	createContent : function(oController) {
		var oSimpleForm = new sap.ui.layout.form.SimpleForm("cOut", {
			maxContainerCols : 1,
			editable : true,
			layout : "ResponsiveGridLayout",
			content : [ 
			new sap.ui.core.Title({text:"Details"}),
			new sap.ui.commons.Label({text:"Badge"}),
			new sap.ui.commons.TextField({id:"badgeOut",maxLength:11}).addStyleClass("formText"),
			new sap.ui.commons.Label({text:"End Time (Military Time HH:MM)"}),
			new sap.ui.commons.TextField({id:"clockOut",maxLength:5}).addStyleClass("formText"),
			]
		});

		oSubmit = new sap.ui.commons.Button("buttonCOut",{
			text : "Clock Out",
			style : sap.ui.commons.ButtonStyle.Emph,
			press : function(oEvent) {oController.cOut(oEvent)}
		}).addStyleClass("button")
		
		return new sap.m.Page({
			title : "Clock Out",
			showNavButton : true,
			navButtonPress : function() {
				oApp.toMaster("idMain");
				// oApp.back();
			},
			content : [ oSimpleForm, oSubmit ]
		});
	}

});