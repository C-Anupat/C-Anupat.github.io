TrelloPowerUp.initialize({
    'card-buttons': function(t, options){
      return [{
        icon: 'https://raw.githubusercontent.com/C-Anupat/C-Anupat.github.io/78803d29a5a5987bf0a513ede7107c7922469a88/icon.svg',
        text: "Hello",
        callback: function(t){
            return t.card().then(card => alert("In Progress..."))
        }
      }];
    },
  });