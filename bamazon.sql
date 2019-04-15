DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tooth brush", "hygiene", 2.50, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tooth paste", "hygiene", 3.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mouthwash", "hygiene", 7.50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("floss", "hygiene", 3.50, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("paper towels", "household", 10.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("laundry detergent", "household", 18.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dryer sheets", "household", 9.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dish soap", "household", 4.50, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("banana", "food", .99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("peanut butter", "food", 5.50, 100);