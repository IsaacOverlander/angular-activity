let foodApp = angular.module('foodApp', []);

foodApp.controller('FoodController', function() {
    let vm =this;
    vm.allFoods = [];

    vm.addFood = function() {
        console.log(vm.foodIn);
        
        vm.allFoods.push(vm.foodIn);
    }
})