TrelloPowerUp.initialize({
    'board-buttons': function(t, options){
      var data = t.get('board', 'shared')
      console.log(JSON.stringify(data, null, 2));
      return[{
        icon: 'https://c-anupat.github.io/icon.svg',
        text: 'PowerUpTest',
        callback: function(t){
            return t.modal({
                title: "ConsoleOutput",
                url: "./ConsoleOutput/consoleoutput.html"
            })
        }
      }]
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