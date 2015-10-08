sap.ui.jsview("clock_in.InitDetail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf clock_in.InitDetail
	*/ 
	getControllerName : function() {
		return "clock_in.InitDetail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf clock_in.InitDetail
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Labor Clocking",
			content: [
			 new sap.ui.commons.TextView({
				 text: "Welcome to Demo",
				 design: sap.ui.commons.TextViewDesign.H5
			 })
			]
		});
	}

});