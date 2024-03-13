TrelloPowerUp.initialize({
    'card-buttons': function(t, options){
      return [{
        icon: 'https://raw.githubusercontent.com/C-Anupat/C-Anupat.github.io/0b5781c7baebf0061937dc4a3e49ab74a38cf448/icon.svg',
        text: "Hello",
        callback: function(t){
            return t.card().then(card => alert("In Progress..."))
        }
      }];
    },
  });