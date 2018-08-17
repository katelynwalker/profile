"use strict";

    angular.module("App").config(["$routeProvider", function($routeProvider){
        $routeProvider
        .when("/edit-profile", {
            template: `
            <edit-profile></edit-profile>
            `
        })
        .when("/profile", {
            template: `
            <profile></profile>
            `
        })
        .otherwise({
            redirectTo: "/profile"
        })

    }])

