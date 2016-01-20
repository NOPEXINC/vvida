angular.module('vvida.services', [])
  .service('Utils', function($mdToast, $mdDialog) {
    this.toast = function(msg) {
      $mdToast.show($mdToast.simple().content(msg));
    };

    this.dialog = function(title, message, event, callback) {
      $mdDialog.show(
          $mdDialog.confirm()
          .parent(angular.element(document.body))
          .clickOutsideToClose(true)
          .title(title)
          .content(message)
          .ariaLabel('Utils Dialog Service')
          .ok('OK')
          .cancel('CANCEL')
          .targetEvent(event)
        )
        .then(function() {
          callback();
        }, function() {});
    };

    this.modal = function(ev, title, content) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'views/modal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: true
      });

      function DialogController($scope, $mdDialog) {

        $scope.modalContent = title;
        $scope.modalTitle = content;

        $scope.hide = function() {
          $mdDialog.hide();
        };

        $scope.cancel = function() {
          $mdDialog.cancel();
        };
      }
    };
  });
