app.controller('Hamburger', function ($scope) {
  $scope.sandwichActive = false;

  $scope.toggleSandwich = function () {
    $scope.sandwichActive = !$scope.sandwichActive;
  };
});
