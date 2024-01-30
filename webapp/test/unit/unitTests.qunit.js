/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"perceptio_academy/invoices/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
