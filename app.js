angular.module("flapperNews", [])
.controller('MainCtrl', [ '$scope',
  function($scope) {
    $scope.posts = [
    ];

    $scope.addPost = function() {
      if(!$scope.title || $scope.title === '')
        { return; }
      $scope.posts.push({
        title: $scope.title,
        upvotes: 0
      });

    $scope.title = '';

    $scope.incrementUpVotes = function(post) {
      post.upvotes += 1;
    };
  };
}]);