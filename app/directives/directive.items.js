angular.module("myApp")
    .directive('dirItems', function () {
        return {
            scope: true,
            restrict: "A",
            templateUrl:'templates/items.html',
            link: function (scope, element, attrs)
            {
                // scope.items = attrs.dirForm;
                console.log("dir-items - loaded");
            }
        }
    });