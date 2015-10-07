var app = angular.module('grocer', []);

app.factory('items', [function(){
	var o = {
		items: [
		  { name: 'chicken', price: 0, amount: 1, unit: 'lbs'},
  		  { name: 'lentils', price: 0, amount: 1, unit: 'lbs'},
		  { name: 'cheese', price: 0, amount: 1, unit: 'lbs'},
		  { name: 'bread', price: 0, amount: 1, unit: 'ea'}, 
		  { name: 'sauce', price: 0, amount: 1, unit: 'ea'}
		]
	};

	return o;

}])

app.controller('MainCtrl', [
	'$scope',
	'items',

	function($scope, items){
		$scope.title= 'Carl\'s List';

		$scope.itemlist = items.items;

		$scope.hiddenItems = [];

		$scope.units = "ct";

		$scope.addToList = function(){
			if(!$scope.name || $scope.name === ''){ return; }

			if(!$scope.price){ $scope.price = 0 };

			console.log($scope.unit);
			console.log($scope.name);

			$scope.itemlist.push({ name: $scope.name, price: $scope.price, amount: $scope.amount, unit: $scope.unit} );

			$scope.amount = '';
			$scope.name = '';
			$scope.price = '';
			$scope.unit = '';
		};

		$scope.updateAmount = function(item, amount){
			var newAmount = prompt("amount: ");
			item.amount = newAmount;
		}

		$scope.updatePrice= function(item, price){
			var newPrice= prompt("price: ");
			item.price = newPrice;
		}


		$scope.updateName = function(item, name){
			var newName = prompt("name: ");
			item.name = newName;
		}

		$scope.updateUnit = function(item, unit){
			var newUnit = prompt("unit: ");
			item.unit = newUnit;
		}


		$scope.listTotal = function(){
			var list = $scope.itemlist;
			var sum = sum || 0;

			for(var i = 0; i < list.length; i++){
				sum = sum + (list[i].price * list[i].amount);
			};

			return sum;
		}

		$scope.hideItem = function(item){
			var toHide = $scope.itemlist.splice($scope.itemlist.indexOf(item), 1);
			$scope.hiddenItems.push(toHide);
		};

		$scope.addPriceToitem = function(item, price){
			item.price = price;
		}

		$scope.crossout = function(item){
			if(item.crossout){
				item.crossout = false;
			} else if(!item.crossout){
				var price = prompt("price: ");
				$scope.addPriceToitem(item, price);
				item.crossout = true;
				clickCount = 0;
			}
		};
	}
]);