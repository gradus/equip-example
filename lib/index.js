var equip = require('equip');

var flatiron = require('flatiron'),
    app = flatiron.app;

var hello = equip.configurable(function (world) {
  return function (req, res, next) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello %s!', world);
  }
});

app.use(flatiron.plugins.http);
app.use(hello, 'world');

app.start(8080);

