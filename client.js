TrelloPowerUp.initialize({
    'card-buttons': function(t, options){
      return [{
        icon: 'https://c-anupat.github.io/icon.svg',
        // icon: 'icon.svg',
        text: 'Hello',
        callback: function(t){
            return t.popup()({
                title: "DropBox",
                url: "./DropBox/dropbox.html"
            })
        }
      }];
    },
  });