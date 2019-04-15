var mysql = require("mysql");

var inquirer = require("inquirer")

var connection = mysql.createConnection({
  host: "localhost",

  // Port
  port: 8889,

  // Username
  user: "root",

  // Password
  password: "root",
  database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    showItems();
  });

//   Shows what is for sale.s
  function showItems(){
    connection.query("SELECT * FROM products", function (err, res) {
        for (i=0; i<res.length; i++){ 
        console.log(
                "ID: " + res[i].id + 
                " || Product: " + res[i].product_name +
                " || Department: " + res[i].department_name +
                " || Price: " + res[i].price +
                " || Stock: " + res[i].stock_quantity
            );
        }
    
    // runs the menu
    menu();
    })
  }

  function menu(){

    inquirer.
    prompt([
        {
            name: "item",
            message: "What is the ID of the item you would like to buy?",
            type: "input",
        },
        {
          name: "quantity",
          message: "How many units would of the item would you like to buy?",
          type: "input",
        }
    ]).then(answers =>{
      var idInputted = parseFloat(answers.item);
      var quantity = answers.quantity;

      connection.query("SELECT * FROM products WHERE ?",
      {
        id: idInputted
      }, function(err, res){
        // Creates variables for the table data
        var stockQuantity = parseFloat([res[0].stock_quantity])
        var price = parseFloat(res[0].price)

        if (err) throw err;
        if (stockQuantity >= quantity){
          
          // Allows the shopper to buy the product. Notifies the buyer the amount owed.
          console.log("We have that in stock!");
          var amountDue = price * parseFloat(quantity);
          console.log("For " + quantity + " units, you owe $"+ amountDue +". \n Thank you!")
          
          // Updates the stock quantity 
          stockQuantity = stockQuantity - quantity
          connection.query("UPDATE products SET stock_quantity = '" + stockQuantity + "' WHERE id ='" +  idInputted+"'")

          // Ends the database connection
          connection.end()
          } else{
            console.log("Sorry, it looks like we don't have enough in stock. Choose another item or change the quantity.")
            menu();
          }
        })
      })
  }