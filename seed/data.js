import db from "../db/connection.js";
import Budget from "../models/Budget.js";
import Expenses from "../models/Expenses.js";
import User from "../models/User.js";

const insertData = async () => {
  await Budget.deleteMany({});
  await Budget.create();

  await Expenses.deleteMany({});
  await Expenses.create();

  await User.deleteMany({});
  await User.create();

  await db.close();
};

insertData();
