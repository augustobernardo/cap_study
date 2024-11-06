sap.ui.define([
    "mitigations/controller/BaseController"
],
function (BaseController) {
    "use strict";

    return BaseController.extend("mitigations.controller.Detail", {
        onInit: function () {
            const oRouter = this.getRouter();
            oRouter.getRoute("RouteMitigation").attachMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function (oEvent) {
            const oArgs = oEvent.getParameter("arguments");
            const sKey = oArgs.key;
            const oView = this.getView();

            oView.bindElement("/Mitigations("+sKey+")")
        },

        onSendEmailActionPress: function (oEvent) {},
    });
});
