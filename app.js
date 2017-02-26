(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', function ($scope) {
  $scope.lunchList = "";
  $scope.resultMessage = "";

  $scope.checkTheLunchlist = function () {
    var tempMessage = calculateNumberofLunchItems($scope.lunchList);
    $scope.resultMessage = tempMessage;
  };

  function calculateNumberofLunchItems(string) {
    var numberOfLunchItems  = 0;
    var message = "";
      numberOfLunchItems = string.split(",").length;
      if(string.length > 0){
      if(numberOfLunchItems > 3){
        message = "Too Much!";
      }else if (numberOfLunchItems > 0){
        message ="Enjoy!";
      }
    }else{
        alert("Please enter data first");
      }
    return message;
  }
});
})();
