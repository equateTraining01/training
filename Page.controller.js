sap.ui.define([
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(jQuery, Controller, JSONModel) {
	"use strict";

	var PageController = Controller.extend("sap.m.sample.ComboBox.Page", {

		onInit: function () {

			// set explored app's demo model on this sample
			var pathx = jQuery.sap.getModulePath("sap.ui.demo.mock", "/products.json");
			var pathy = "mockdata/products.json";
			var oModel = new JSONModel(pathy);
			this.getView().setModel(oModel);
//			this.getView().setModel(oModel , "test");
var data = {
        "products": [
              {
                  "prodName": "Apple",
                  "prodCountry": "Netherlands",
                  "price": "normal"
              },
              {
                  "prodName": "Orange",
                  "prodCountry": "Spain",
                  "price": "extra"
              },
              {
                  "prodName": "Strawberry",
                  "prodCountry": "Poland",
                  "price": "normal"
              }
          ]
        };
// create a Model with this data and attach it to the view
            var modelx = new sap.ui.model.json.JSONModel();
            modelx.setData(data);	
 //           this.getView().setModel(modelx, "test");
 sap.ui.getCore().setModel(modelx,"test");
//    this.getView().setModel(modelx);
	var list = this.getView().byId("test-list"); 
	list.setModel(sap.ui.getCore().getModel("test"));
//	this.getView().byId("test-list").setModel(modelx);
list.bindItems({
                path : "/products", 
                //template : listTmpl
                template : new sap.m.StandardListItem({
                    title: "{prodName}",
                    description: "{prodCountry}"
                })
            }); 			
		}
	});


	return PageController;

});