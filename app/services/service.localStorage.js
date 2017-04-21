angular.module("storeService", [])

    .service('Storage', function() {

// For initial loading, I  prepared the following data from two elements.
        const INITIAL_DATA = [
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
                            ];

        this.name = 'Empeek';

        this.getData = function () {
            
            let data = localStorage.getItem(this.name);
            
            if ( data === undefined  || data[0] == -1) {return JSON.parse(data);}  
            else {
                    console.log("getData - empty Storage");
                    data = INITIAL_DATA;
                    this.setData(data);
                    return data;
                }
        };

        this.setData = function(data) {
            localStorage.setItem(this.name, JSON.stringify(data));
        };

    });
