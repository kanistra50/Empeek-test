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

        let data = Storage.getData();
       
        if (!data || !data[0]) {
            console.log('empty');
// For initial loading, I  prepared the following data from two elements.
            Storage.setData([
                                {username: "Benjamin Franklin", 
                                 comments: [
                                    "Early to bed, and early to rise, Makes a man healthy, wealthy, and wise.",
                                    "Dost thou love life? Then do not squander time, for that's the stuff life is made of.",
                                    "No nation was ever ruined by trade",
                                    "Trust thy self, and another shall not betray thee."
                                    ]
                                },
                                {username: "Friedrich Nietzsche",
                                 comments: [
                                    "To forget one's purpose is the commonest form of stupidity.",
                                    "Talking much about oneself can also be a means to conceal oneself."
                                    ]
                                }			
                            ]
                        );
            $scope.items = Storage.getData();
        } else {
            console.log('full');
            $scope.items = data;
        }
        

        $scope.clickItem = function (item) {
            $scope.textComment = '';
            $scope.disabledComment=false;
            $scope.currentIndex = $scope.items.indexOf(item);
            return $scope.items[$scope.currentIndex].comments;
        }

        $scope.deleteItem = function (item) {

            // localStorage.clear();
            let ind = $scope.items.indexOf(item);
            
            console.log(ind);
            $scope.items.splice(ind, 1);
            let len = $scope.items.length;
            Storage.setData($scope.items);

            if (len == 0) {
                console.log("no");
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
            if($scope.textItem[0] != undefined ) {
                $scope.items.push({username: $scope.textItem, comments: []} );
                $scope.currentIndex = $scope.items.length - 1;
                $scope.textItem = '';
                $scope.disabledComment=false;
              
                Storage.setData($scope.items);
            }

        }

        $scope.createComment = function (comment, e) {
            
            if ($scope.textComment[0] != undefined) {
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