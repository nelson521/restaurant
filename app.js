// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
let customers = [
  {
  customerName: "nicole",
  phoneNumber: "973491024",
  customerEmail: "nicolelasusa@gmail.com",
  customerID: "21323"
}

]

let tables = []

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "index.html"));
});

// Displays all tables
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservations", function (req, res) {
  res.sendfile(path.join(__dirname, "reservations.html"))
})

app.get('/customers', function(req, res){
  res.send(customers)
})

// Displays a single character, or returns false
app.get("/api/characters/:character/:name", function (req, res) {
  var chosen = req.params.character;
  let steve = req.params.name;

  console.log(chosen);
  console.log(steve);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/customers", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  let newcustomers = req.body;

  console.log(newcustomers);

  // We then add the json the user sent to the character array
  customers.push(newcustomers);

  // We then display the JSON to the users
  res.json(newcustomers);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
