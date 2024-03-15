const listName = ["バックログ", "タスク", "進行中", "保留", "確認待ち", "完了"];
var boardInfo;
var apiKey;
var apiToken;
TrelloPowerUp.initialize(
  {
    appKey: "my-api-key",
    appName: "My Trello App",
    appAuthor: "My Company",
  },
  {
    'board-buttons': function(t, options){
      return[{
        icon: 'https://c-anupat.github.io/icon.svg',
        text: 'PowerUpTest',
        callback: function(t){
          return(t.getRestApi().getToken()
          .then(function(token){
            if(!token){
              console.log("Fail to get token");
            }
            else{
              let apiKey = appKey;
              let apiToken = token;
              console.log("API Key: " + apiKey);
              console.log("API Token: " + apiToken);
            }
          }))
          // boardPromise.then(function(board){
          //   let boardInfo = board;
          //   console.log("Board Name: " + boardInfo["name"]);
          //   console.log("Board ID: " + boardInfo["id"]);
          // })
          // .then(function(board){
            
          // });
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