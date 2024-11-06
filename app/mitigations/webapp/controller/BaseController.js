sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
], 
function (Controller, UIComponent) {
    "use strict";

    return Controller.extend("mitigations.controller.BaseController", {
        onInit: function () {},

        getRouter: function () {
            return UIComponent.getRouterFor(this);
        }
    });
});
