sap.ui.define([
    "mitigations/controller/BaseController"
],
function (BaseController) {
    "use strict";

    return BaseController.extend("mitigations.controller.Main", {
        onInit: function () {

        },

        onColumnListItemPress: function (oEvent) {
            const oBindingContext = oEvent.getSource().getBindingContext();
            const sPath = oBindingContext.getPath();
            const sKey = sPath.split("(")[1].split(")")[0];
            
            this.getRouter().navTo("RouteMitigation", {
                key: sKey
            });
        },
    });
});
