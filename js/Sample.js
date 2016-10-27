var app = angular.module("myApp", []);

app.controller("SampleCtrl", function ($scope) {
    $scope.model = { firstName: "Gabriel", lastName: "Schenker" };

    $scope.clickMe = function (name) {
        alert("Hello " + name);
    };

    $scope.regex = '\\d{1,4}';
});


