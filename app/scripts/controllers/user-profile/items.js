angular.module('vvida.controllers')
  .controller('UserProductsCtrl', ['$scope',
  '$rootScope',
  'Users',
  'modalService', 
  function($scope, $rootScope, Users, modalService) {
    if ($rootScope.currentUser) {
      Users.items($rootScope.currentUser, function(err, res) {
        if (err) {
          $scope.message = 'Your products goes here.';
        } else {
          $scope.items = res;
          if (res.Items.length === 0) {
            $scope.message = 'Your products goes here.';
          }
        }
      });
    }

    $scope.addItemModal = function(ev) {
      modalService(ev, 'item', 'Create an Item');
    };

  }]);
