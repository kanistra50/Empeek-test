/**
 * The Default Controller module
 *
 */

module
    .controller('defaultCtrl', ['$scope', 'Storage', function($scope, Storage) {

        $scope.items = [];
        $scope.$index = 0;
        $scope.currentIndex = 0;
        $scope.showItemAdvise = "none";
        $scope.showCommentAdvise = "none";
        
        // let checkForItems = function () {
        //     if ($scope.items != undefined || $scope.items[0] != -1) {
        //     return false;
        //     }
        //     else {return true;}
        // };

        $scope.items = Storage.getData();
       
        $scope.clickItem = function (item) {
            $scope.textComment = '';
            $scope.disabledComment=false;
            $scope.currentIndex = $scope.items.indexOf(item);
            // $scope.items[$scope.currentIndex].comments;
        };

        $scope.keypress = function(e){
            if (e.keyCode === 13) {
                $scope.createItem();
            }
        };

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
        };

        $scope.createItem = function (clbckFn) {
            // if (!checkForItems) {
            //     $scope.currentIndex = 0;
            // }

            let el = $scope.items.find(e => e.username === $scope.textItem);

            if($scope.textItem && !el) {
                $scope.items.push({ username: $scope.textItem, comments: [] });
                $scope.currentIndex = $scope.items.length - 1;
                $scope.textItem = '';
                $scope.disabledComment = false;
                Storage.setData($scope.items);

                // if (clbckFn && $scope.items.length == 4){
                //     clbckFn($scope.items[0]);
                // }
            }
        };

        $scope.createComment = function (e) {
            $scope.showCommentAdvise = "none";
            console.log($scope.textComment);
            // e = e || window.event;
            if (e.keyCode === 13) {

                let commentsArr = $scope.items[$scope.currentIndex].comments;
                let el = commentsArr.find(
                    function check(element) {
                        return element == $scope.textComment;
                    });
                console.log(el);  console.log(commentsArr);
                //
                //

                if ($scope.textComment && !el) {

                    commentsArr.push($scope.textComment);
                    $scope.textComment = '';
                    Storage.setData($scope.items);

                } else {$scope.showCommentAdvise = "display";}
            }
        };
       
        console.log("Controller loaded");
    }]);
