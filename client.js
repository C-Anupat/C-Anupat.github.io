const listName = ["バックログ", "タスク", "進行中", "保留", "確認待ち", "完了"];
var boardInfo;
TrelloPowerUp.initialize(
  {
    appKey: "my-trello-key",
    appName: "My Power-Up",
    appAuthor: "My Company",
  },
  {
    'board-buttons': function(t, options){
      return[{
        icon: 'https://c-anupat.github.io/icon.svg',
        text: 'PowerUpTest',
        callback: function(t){
          return(board)
          .then(function(board){
            boardInfo = board;
            console.log("Trello Key: " + appKey);
            console.log("Power-Up Name: " + appName);
            console.log("Company: " + appAuthor);
            console.log("Board Name: " + boardInfo["name"]);
            console.log("Board ID: " + boardInfo["id"]);
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