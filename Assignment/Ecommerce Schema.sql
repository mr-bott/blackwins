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
    password varchar(255) NOT NULL,
    role varchar(20) DEFAULT 'customer',
    phone INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders TAble :-

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL, --how to store multiple products Int[] ,jsonb 
    quantity INT NOT NULL,--
    amount INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

--oreder_products table id product_id quantity price coupons 

-- Products Table:-

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    -- user_id INT NOT NULL, employee_id who created tthis product 
    category_id INT NOT NULL,
    name varchar(50) NOT NULL,
    stock INT NOT NULL,
    price INT NOT NULL,
    --units 
    --images 
    --desc 

    FOREIGN KEY (category_id) REFERENCES category(id);
    FOREIGN KEY (user_id) REFERENCES users(id);
);


-- Whishlist Table:-

CREATE TABLE whishlist (
  id PRIMARY KEY SERIAL ,
  user_id INT NOT NULL ,
  product_id INT NOT NULL, --how to store multiple products 
  
  FOREIGN KEY (user_id) REFERNCES users(id);
  FOREIGN KEY (product_id) REFERNCES products(id);
);

-- Cart Table:-

CREATE TABLE cart (
  id PRIMARY KEY SERIAL ,
  user_id INT NOT NULL ,
  product_id INT NOT NULL, --how to store multiple products 
  -- quantity 

  -- total_Amount INT, no need in db 

  FOREIGN KEY (user_id) REFERNCES users(id);
  FOREIGN KEY (product_id) REFERNCES products(id);
);

-- Category Table:-

CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name varchar(20) NOT NULL
    --userid who created 
    --creted at , updated at 
);

-- CAtegory_Discount Table:-

CREATE TABLE category_discount (
    id SERIAL PRIMARY KEY,
    category_id INT NOT NULL,
    discount DOUBLE NOT NULL,
    --type 
    --from to when -> start date end date 

    FOREIGN KEY (category_id) REFERENCES category(id);
);




