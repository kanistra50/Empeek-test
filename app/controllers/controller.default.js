/**
 * The Default Controller module
 *
 */

module
    .controller('defaultCtrl', ['$scope', 'Storage', function($scope, Storage) {

        $scope.items = [];
        $scope.$index = 0;
        $scope.currentIndex = 0;
        
        let checkForItems = function () {
            if ($scope.items != undefined || $scope.items[0] != -1) { 
            return false; 
            }
            else {return true;}
        }

        $scope.items = Storage.getData();
       
        $scope.clickItem = function (item) {
            $scope.textComment = '';
            $scope.disabledComment=false;
            $scope.currentIndex = $scope.items.indexOf(item);
            $scope.items[$scope.currentIndex].comments;
        }

        $scope.deleteItem = function (item) {

            let ind = $scope.items.indexOf(item);
            $scope.items.splice(ind, 1);
            let len = $scope.items.length;
            Storage.setData($scope.items);

            if (len == 0) {
                $scope.currentIndex = -1;
                $scope.disabledComment = true;
            } else {
                $scope.currentIndex = ind-1; 
            }
        } 

        $scope.createItem = function () {
            if (!checkForItems) {
                $scope.currentIndex = 0;
            }
            if($scope.textItem != undefined ) {
                $scope.items.push({username: $scope.textItem, comments: []} );
                $scope.currentIndex = $scope.items.length - 1;
                $scope.textItem = '';
                $scope.disabledComment=false;
              
                Storage.setData($scope.items);
            }
        }

        $scope.createComment = function (e) {
            
            if ($scope.textComment != undefined) {
                e = e || window.event;
                
                if (e.keyCode === 13) {
                    
                    $scope.items[$scope.currentIndex].comments.push($scope.textComment);
                    $scope.textComment = '';
                    Storage.setData($scope.items);
                };
            }
        }
       
        console.log("Controller loaded");
    }]);
