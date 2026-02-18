-- Ecommerce DB Schema:- 

-- // database schema 
-- // postgers e-commerce 
-- // user wats to sign up login . user details , user orders , whislist , cart , 
-- // categorized  products list   // stock 
-- // categrogied discount 

-- Users Table:-
-- done
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name varchar(20) NOT NULL,
    age INT NOT NULL,
    gmail varchar(50) UNIQUE NOT NULL,
    password varchar(255) NOT NULL,
    role varchar(20) DEFAULT 'customer',
    phone BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders TAble :-

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    total_amount NUMERIC(10,2) NOT NULL,
    status varchar DEFAULT "Pending",
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price NUMERIC(10,2) NOT NULL,

    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

--oreder_products table id product_id quantity price coupons 

-- Products Table:-
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    employee_id INT NOT NULL, 
    category_id INT NOT NULL,
    name varchar(250) NOT NULL,
    stock INT NOT NULL,
    price INT NOT NULL,
    units INT NOT NULL,
    images int[] NOT NULL,
    description TEXT,

    FOREIGN KEY (category_id) REFERENCES category(id),
    FOREIGN KEY (employee_id) REFERENCES users(id)
);


-- Whishlist Table:-
CREATE TABLE wishlist (
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (user_id, product_id),

  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Cart Table:-
CREATE TABLE cart (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE cart_items (
  id SERIAL PRIMARY KEY,
  cart_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL CHECK (quantity > 0),

  FOREIGN KEY (cart_id) REFERENCES cart(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id)
);


-- Category Table:-
-- done
CREATE TABLE category (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  employee_id INT NOT NULL REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
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




