"use strict"
const profile = {
    template: `<h3>{{$ctrl.input.input1}}</h3>
              <p>{{$ctrl.input.input2}}</p>
              <p>{{$ctrl.input.input3}}</p>
              <button type="button">Edit</button>`,

    controller: ["ProfileService", function(ProfileService){
            const vm = this;
            vm.input = ProfileService.getInfo();
        }]

    } 
        
            

angular
    .module("App")
    .component("profile", profile)