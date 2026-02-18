const { pool } = require("../config/db");

exports.addCategory = async (req,res) => {
  try {
    const { name, employee_id } = req.body;
    const category = await pool.query(
      "INSERT INTO category (name ,employee_id) VALUES($1,$2) RETURNING id",
      [name, employee_id],
    );

    if (category.rows.length > 0) {
      res.status(201).json({ message: "Category added successfully", id :category.rows[0].id });
    }
  } catch (e) {
    console.log(`Erroe while adding category ${e.message}`);
    res.status(500).json({ message: e.message });
  }
};
