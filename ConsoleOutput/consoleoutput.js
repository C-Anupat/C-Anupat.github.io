var t = window.TrelloPowerUp.iframe();

return t.get('board', 'shared')
.then(function (data) {
  console.log(JSON.stringify(data, null, 2));
});