sap.ui.controller("clock_in.ClockOut", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf clock_in.ClockOut
*/
	onInit: function() {
		var sServiceUrl = "http://ussltcsnw1538.solutions.glbsnet.com:8000/sap/opu/odata/sap/ZP_CLOCK_SRV";
		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
		var oJsonModel = new sap.ui.model.json.JSONModel();
		oModel.read("/CLOCK_SET?", null, null, true,
				function(oData, repsonse) {
					oJsonModel.setData(oData);
				});
		sap.ui.getCore().setModel(oJsonModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf clock_in.ClockOut
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf clock_in.ClockOut
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf clock_in.ClockOut
*/
//	onExit: function() {
//
//	}

	cOut: function(oEvent){
        var oEntry = {};	            
        oEntry.Badge = sap.ui.getCore().getElementById('badgeOut').getValue();
        oEntry.Time = sap.ui.getCore().getElementById('clockOut').getValue();
        oEntry.Type = "P20";
        
        OData.request({
            requestUri : "http://ussltcsnw1538.solutions.glbsnet.com:8000/sap/opu/odata/sap/ZP_CLOCK_SRV/CLOCK_SET(Badge='" + oEntry.Badge + "',Type='" + oEntry.Type + "',Time='" + oEntry.Time + "')",
            method : "GET",
            headers : {
                                    "X-Requested-With" : "XMLHttpRequest",
                                    "Content-Type" : "application/atom+xml",
                                    "DataServiceVersion" : "2.0",
                                    "X-CSRF-Token" : "Fetch"
                                    }
                        },
                        function(data, response) {
                                    header_xcsrf_token = response.headers['x-csrf-token'];
                                    var oHeaders = {
                                                "x-csrf-token" : header_xcsrf_token,
                                                'Accept' : 'application/json',
                        };

            OData.request({
                                    requestUri : "http://ussltcsnw1538.solutions.glbsnet.com:8000/sap/opu/odata/sap/ZP_CLOCK_SRV/CLOCK_SET(Badge='" + oEntry.Badge + "',Type='" + oEntry.Type + "',Time='" + oEntry.Time + "')",	 
                                    method : "GET",
                                    headers : oHeaders,
                                    data:oEntry
                        },
                                    function(data,request) {
                        			sap.m.MessageToast.show(oEvent.getSource().getId() + "Clocked OUT Successfully");        
                                    location.reload(true);
                        },          function(err) {
                                    alert("Error in Clocking");
                        });
            }, function(err) {
                                    var request = err.request;
                                    var response = err.response;
                                    alert("Error in Get -- Request " + request + " Response " + response);
                        }); 
        
	},
});