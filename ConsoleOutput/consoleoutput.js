var t = window.TrelloPowerUp.iframe();

t.render(function(){
    t.get('board', 'shared')
    .then(function (data) {
      console.log(JSON.stringify(data, null, 2));
    })
    .then(t.size)
});