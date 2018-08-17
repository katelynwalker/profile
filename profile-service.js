
"use strict";

function ProfileService() {
    const vm = this;
    vm.profileInfo = {};
    
    vm.getInfo = function (){
        return vm.profileInfo;
    }
    vm.setInfo = function (newInfo){
        vm.profileInfo = newInfo;
        return vm.profileInfo;
    }
}



angular
    .module("App")
    .factory("ProfileService", ProfileService);
