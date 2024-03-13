TrelloPowerUp.initialize({
    'card-buttons': function(t, options){
      return [{
        // icon: 'https://raw.githubusercontent.com/C-Anupat/C-Anupat.github.io/78803d29a5a5987bf0a513ede7107c7922469a88/icon.svg',
        icon : 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
        text: "Hello",
        callback: function(t){
            return t.card().then(card => alert("In Progress..."))
        }
      }];
    },
  });