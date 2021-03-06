//Code for the first DIV
var mod1 = angular.module('Mod1', []);

mod1.config(function () {
    console.log('Mod 1 - Config')
});

angular.element(document.getElementById('div1')).ready(function () {
    angular.bootstrap(document.getElementById('div1'), ['Mod1']);
});

mod1.controller('SimpleController', function() {
    this.msg="Simple Controller Instantiated!";
    
    this.doIt = function() {
        console.log(this.msg);
    };
});




//Code for the second DIV
var mod2 = angular.module('Mod2', []);

mod2.config(function () {
    console.log('Mod 2 - Config')
});

angular.element(document.getElementById('div2')).ready(function () {
    angular.bootstrap(document.getElementById('div2'), ['Mod2']);
});

mod2.controller('ScopeController', ['$scope', function($scope) {
    $scope.msg = "Scope Controller Instantiated!";
}]);

