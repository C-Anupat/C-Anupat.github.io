var boardInfo;
TrelloPowerUp.initialize({
    'board-buttons': function(t, options){
      return[{
        icon: 'https://c-anupat.github.io/icon.svg',
        text: 'PowerUpTest',
        callback: function(t){
          t.board("all")
          .then(function(board){
            console.log(JSON.stringify(board, null, 2));
            let boardInfo = JSON.parse(board);
            console.log(boardInfo.name);
            console.log(boardInfo.id);
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