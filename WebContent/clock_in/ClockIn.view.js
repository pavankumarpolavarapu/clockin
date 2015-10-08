sap.ui.jsview("clock_in.ClockIn", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf clock_in.ClockIn
	 */
	getControllerName : function() {
		return "clock_in.ClockIn";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf clock_in.ClockIn
	 */
	createContent : function(oController) {
		var oSimpleForm = new sap.ui.layout.form.SimpleForm("cIn", {
			maxContainerCols : 1,
			editable : true,
			layout : "ResponsiveGridLayout",
			content : [ 
			new sap.ui.core.Title({text:"Details"}),
			new sap.ui.commons.Label({text:"Badge"}),
			new sap.ui.commons.TextField({id:"badgeIn", maxLength : 11}).addStyleClass("formText"),
			new sap.ui.commons.Label({text:"Start Time (Military Time HH:MM)"}), 
			new sap.ui.commons.TextField({id:"clockIn",maxLength: 5}).addStyleClass("formText"),		
			]
		});
		
		var oSubmit = new sap.ui.commons.Button("buttonCIn",{
			text : "Clock In",
			style: sap.ui.commons.ButtonStyle.Emph,
			press : function(oEvent) {oController.cIn(oEvent, oSimpleForm)}
		}).addStyleClass("button")
		

		// var oLayout1 = new sap.ui.layout.form.GridLayout();
		// var oLayout2 = new sap.ui.layout.form.ResponsiveLayout();
		// var oLayout3 = new sap.ui.layout.form.ResponsiveGridLayout();
		//
		// var oForm1 = new sap.ui.layout.form.Form(
		// "F1", {
		// title: new sap.ui.core.Title({
		// text: "Clock IN",
		// tooltip: "Clock IN"
		// }),
		// editable: true,
		// layout: oLayout1,
		// formContainers: [new sap.ui.layout.form.FormContainer(
		// "F1C1", {
		// title : "Details",
		// formElements: [
		// new sap.ui.layout.form.FormElement({
		// label : new sap.ui.commons.Label({
		// text : "Badge",
		// layoutData : new sap.ui.core.VariantLayoutData({
		// multipleLayoutData : [
		// new sap.ui.layout.ResponsiveFlowLayoutData({weight: 1}),
		// new sap.ui.layout.form.GridElementData({hCells: "1"}),
		// new sap.ui.layout.GridData({span: "L1 M1 S12"})
		// ]})
		// }),
		// fields : [
		// new sap.ui.commons.TextField({
		// value : "",
		// layoutData : new sap.ui.core.VariantLayoutData({
		// multipleLayoutData : [
		// new sap.ui.layout.ResponsiveFlowLayoutData({weight: 4}),
		// new sap.ui.layout.GridData({span: "L5 M5 S12"})
		// ]
		// })
		// })
		// ],
		// layoutData : new sap.ui.layout.ResponsiveFlowLayoutData({
		// linebreak : true,
		// margin : false
		// })
		// })
		// ],
		// layoutData: new sap.ui.core.VariantLayoutData({
		// multipleLayoutData: [new sap.ui.layout.GridData({
		// span: "L12 M12 S12"
		// })]
		// })
		// })
		//
		// ]
		// });

		return new sap.m.Page({
			title : "Clock In",
			showNavButton: true,
			navButtonPress: function(){
				oApp = sap.ui.getCore().byId("appId");
                oApp.toMaster("idMain");
//                oApp.back();
            },
			content : [ oSimpleForm, oSubmit ]
		});
	}

});