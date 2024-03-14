var boardInfo;
TrelloPowerUp.initialize({
    'board-buttons': function(t, options){
      return[{
        icon: 'https://c-anupat.github.io/icon.svg',
        text: 'PowerUpTest',
        callback: function(t){
          return t.board("all")
          .then(function(board){
            console.log("Type of arugument:" + typeof(board));
            let boardInfo = JSON.stringify(board, null, 2);
            console.log("Board Name:" + boardInfo.name);
            console.log("Board ID: " + boardInfo.id);
          });
        }
      }];
    },
    'card-buttons': function(t, options){
      return [{
        icon: 'https://c-anupat.github.io/icon.svg',
        text: 'PowerUpTest',
        callback: function(t){
            return t.popup({
                title: "DropBox",
                url: "./DropBox/dropbox.html"
            })
        }
      }];
    },
  });