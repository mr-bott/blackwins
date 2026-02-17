-- Ecommerce DB Schema:- 

-- // database schema 
-- // postgers e-commerce 
-- // user wats to sign up login . user details , user orders , whislist , cart , 
-- // categorized  products list   // stock 
-- // categrogied discount 

-- Users Table:-

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name varchar(20) NOT NULL,
    age INT NOT NULL,
    gmail varchar(50) UNIQUE NOT NULL,
    password varchar(250) NOT NULL,
    phone INT,
    created_at TIMESTAMP CURRENT_TIMESTAMP
);

-- Orders TAble :-

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    amount INT NOT NULL,
    created_at TIMESTAMP CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Products Table:-

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    category_id INT NOT NULL,
    name varchar(50) NOT NULL,
    stock INT NOT NULL,
    price INT NOT NULL,

    FOREIGN KEY (category_id) REFERENCES category(id);
);


-- Whishlist Table:-

CREATE TABLE whishlist (
  id PRIMARY KEY SERIAL ,
  user_id INT NOT NULL ,
  product_id INT NOT NULL,
  
  FOREIGN KEY (user_id) REFERNCES users(id);
  FOREIGN KEY (product_id) REFERNCES products(id);
);

-- Cart Table:-

CREATE TABLE cart (
  id PRIMARY KEY SERIAL ,
  user_id INT NOT NULL ,
  product_id INT NOT NULL,
  total_Amount INT,

  FOREIGN KEY (user_id) REFERNCES users(id);
  FOREIGN KEY (product_id) REFERNCES products(id);
);

-- Category Table:-

CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name varchar(20) NOT NULL
);

-- CAtegory_Discount Table:-

CREATE TABLE category_discount (
    id SERIAL PRIMARY KEY,
    category_id INT NOT NULL,
    discount DOUBLE NOT NULL,

    FOREIGN KEY (category_id) REFERENCES category(id);
);




