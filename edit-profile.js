"use strict"

const editProfile = {
template: `<p>Use the form below to update your profile</p>
            <label>Name</label>
            <input type="text" ng-model="$ctrl.input.input1"></input>
            <label>Contact</label>
            <input type="text" ng-model="$ctrl.input.input2"></input>
            <label>Bio</label>
            <input type="text" ng-model="$ctrl.input.input3"></input>
            <button type="button" ng-click="$ctrl.sendInfoToService($ctrl.input)">Update</button>`,

controller: ['ProfileService', function(ProfileService){
        let vm = this;
        vm.profileInfo = ProfileService.getInfo();
        // vm.name = ProfileService.getInfo();
        // vm.contact =  ProfileService.getInfo();
        // vm.bio =  ProfileService.getInfo();
        vm.sendInfoToService = function (newInfo) {
            vm.profileInfo = ProfileService.setInfo(newInfo);
        }
        
            }]
}



angular.module("App")
    .component("editProfile", editProfile);