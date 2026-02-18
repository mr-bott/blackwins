const { pool } = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//signup
exports.getSignup = async (req, res) => {
  try {
    const { name,age,gmail,password,phone } = req.body;

    //Check if user already exists
    const userExists = await pool.query(
      "SELECT * FROM users WHERE gmail = $1",
      [gmail]
    );

    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //insert user
    const newUser = await pool.query(
      "INSERT INTO users (name,age,gmail,password,phone) VALUES ($1,$2,$3,$4,$5) RETURNING id ",
      [name,age,gmail,hashedPassword,phone]
    );
 
    res.status(201).json({
      message: "User created successfully",
      id:newUser.rows[0]
    });

  } catch (e) {
    console.log(`Error while creating user ${e.message}`);
    res.status(500).json({ message: e.message });
  }

};


// login
exports.getLogin = async (req, res) => {
  try {
    const { gmail, password } = req.body;

    // find user
    const user = await pool.query(
      "SELECT * FROM users WHERE gmail = $1",
      [gmail]
    );
  
    if (user.rows.length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // compare password
    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].password
    );

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // generate JWT
    const token = jwt.sign(
      { id: user.rows[0].id, gmail: user.rows[0].gmail },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(200).json({
      message: "Login successful",
      token
    });

  } catch (e) {
    console.log(`Error while login ${e.message}`);
    res.status(500).json({ message: e.message });
  }
};
