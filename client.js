TrelloPowerUp.initialize({
    'on-enable': function(t, options){
      var consoleWindowFrame = window.TrelloPowerUp.iframe();
      return consoleWindowFrame.get('board', 'private').then(function (data){
          console.log(JSON.stringify(data, null, 2));
      });
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