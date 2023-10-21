const express = require("express");
const router = express.Router();
const ExpenseRecord = require("../models/ExpenseRecord");

router
  .route("/create")

  // POST request to create a new expense record
  .post(async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    try {
      const { title, amount, date, description, userId } = req.body;
      const newRecord = new ExpenseRecord({
        title,
        amount,
        date,
        description,
        user: userId,
      });
      await newRecord.save();
      res.status(201).json(newRecord);
    } catch (error) {
      res.status(500).json({ error: "Failed to save the record." });
    }
  })

  .get(async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    try {
      const records = await ExpenseRecord.find({ user: req.query.userId });
      res.status(200).json(records);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch records." });
    }
  });

module.exports = router;
