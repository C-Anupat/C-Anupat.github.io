TrelloPowerUp.initialize({
    'card-buttons': function(t, options){
      return [{
        icon: 'https://raw.githubusercontent.com/C-Anupat/C-Anupat.github.io/master/icon.png',
        text: "Hello",
        callback: function(t){
            return t.card().then(card => alert("In Progress..."))
        }
      }];
    },
  });