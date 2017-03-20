var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
    $scope.addItem = function () {
        $scope.products.push($scope.addMe);
    }
    $scope.removeItem = function (item) {
        $scope.products.splice(item, 1);
    } 
});