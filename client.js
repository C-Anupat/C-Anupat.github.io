const apiKey = process.env.API_KEY;
const apiToken = process.env.API_TOKEN;
const listName = ["バックログ", "タスク", "進行中", "保留", "確認待ち", "完了"];

var boardInfo;

TrelloPowerUp.initialize(
  {
    'board-buttons': function(t, options){
      return[{
        icon: 'https://c-anupat.github.io/icon.svg',
        text: 'PowerUpTest',
        callback: function(t){
          return t.board("all").then(function(board){
            let boardInfo = board;
            console.log("API Key: " + apiKey);
            console.log("API Token: " + apiToken);
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
  }
);