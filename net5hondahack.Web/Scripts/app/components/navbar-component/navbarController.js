(function () {
    'use strict';

    angular
        .module(APPNAME)
        .controller('NavbarController', NavbarController)

    function NavbarController() {
        var vm = this;

        //////// Variables TOC ////////
        vm.sidePanelOpen = false;

        //////// Functions TOC /////////
        vm.toggleSidePanel = _toggleSidePanel;

        //////// Function definitions ////////
        function _toggleSidePanel() {
            vm.sidePanelOpen = !vm.sidePanelOpen;
        }
    }
})();