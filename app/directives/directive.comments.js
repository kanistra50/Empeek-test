angular.module("myApp")
    .directive('dirComments', function () {
        return {
            scope: true,
            restrict: "A",
            templateUrl:'templates/comments.html',
            link: function (scope, element, attrs)
            {
                // scope.items = attrs.dirList;
                console.log("dir-comments loaded");
            }
        };
    }

);


