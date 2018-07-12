var app = angular.module('dashboard').controller('dashboardCtrl',function($scope,$state){
    $scope.itemObj={};
    $scope.itemList=[];
    $scope.data ="(No Description)";
    $scope.addItem= function(){
      if($scope.itemObj.name!=null)
        {$scope.itemList.push(angular.copy($scope.itemObj));}
    }

  $scope.delete = function(index){
    $scope.itemList.splice(index, 1); 
    $scope.data = "(No Description)";
    
  };

  $scope.mouseClick = function (data) {
    if($scope.itemObj.description!=null)
    {$scope.data = data.description;}
    else
    {$scope.data = "(No Description)";}
 };
//  $scope.mouseLeave = function () {
//     $scope.data = '';
//  };

});