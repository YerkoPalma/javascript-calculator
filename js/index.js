(function() {
  'use strict';
  angular.module('Calculator', ['ngMaterial'])
    .controller('AppCtrl', function($scope) {
      $scope.output = '0';
      $scope.result = '0';
      $scope.updateOutput = function(val){
        if ($scope.output === '0') {
          $scope.output = val.toString();
        }else {          
          $scope.output += val.toString();
          $scope.result = eval($scope.output);
        }
      };
      $scope.add = function() {
        $scope.output += '+';
      };
      $scope.substract = function() {
        $scope.output += '-';
      };
      $scope.divide = function() {
        $scope.output += '/';
      };
      $scope.multiply = function() {
        $scope.output += '*';
      };
      $scope.equal = function() {
        $scope.result = eval($scope.output);
        $scope.output = '0';
      };
      $scope.clear = function() {
        $scope.output = $scope.result = '0';
      }
    });
})();