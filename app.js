var app = angular.module('grocer', []);

app.controller('MainCtrl', [
	'$scope', 
	function($scope){
		$scope.title= 'Carl\'s List';

		$scope.foodlist = [
		  { name: 'chicken', price: 0, amount: 1 },
  		  { name: 'lentils', price: 0, amount: 1},
		  { name: 'cheese', price: 0, amount: 1},
		  { name: 'bread', price: 0, amount: 1}, 
		  { name: 'sauce', price: 0, amount: 1}
		];

		$scope.addToList = function(){
			if(!$scope.name || $scope.name === ''){ return; }

			$scope.foodlist.push({ name: $scope.name, price: 0, amount: $scope.amount });
			$scope.name = '';
			$scope.price = '';
		};

		$scope.updateAmount = function(food, amount){
			var newAmount = prompt("amount: ");
			food.amount = newAmount;
		}

		$scope.updatePrice= function(food, price){
			var newPrice= prompt("price: ");
			food.price = newPrice;
		}


		$scope.updateName = function(food, name){
			var newName = prompt("name: ");
			food.name = newName;
		}


		$scope.listTotal = function(){
			var list = $scope.foodlist;
			var sum = sum || 0;
			for(var i = 0; i < $scope.foodlist.length; i++){
				sum = sum + (list[i].price * list[i].amount);
			};

			return sum;
		}

		$scope.addPriceToFood = function(food, price){
			food.price = price;
		};

		$scope.crossout = function(food){
			if(food.crossout){
				food.crossout = false;
			} else if(!food.crossout){
				var price = prompt("price: ");
				$scope.addPriceToFood(food, price);
				food.crossout = true;
				clickCount = 0;
			}
		};
	}
]);