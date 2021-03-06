var express = require("express");
var cors = require("cors");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('routing'));
app.use(express.static('public'));


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
