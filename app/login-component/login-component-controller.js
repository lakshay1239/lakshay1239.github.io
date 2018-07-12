var app = angular.module('login').controller('loginCtrl',function($scope,$state){
    
    $scope.email="";
    $scope.password="";
    
    $scope.submit=function(){
        localStorage.setItem('email',$scope.email);
        localStorage.setItem('password',$scope.password);
        
        // $state.go('home.dashboard');
    }
  });
