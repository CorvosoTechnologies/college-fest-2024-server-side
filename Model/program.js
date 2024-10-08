const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
  value: { type: String, required: true, unique: true },
  label: { type: String, required: true },
});

// programSchema.pre("remove", async function (next) {
//   try {
//     console.log("this.id", this._id);
//     // Update products that reference this category
//     await Teams.updateMany(
//       { product_category: this._id },
//       { $set: { product_category: null } } // or some default category
//     );
//     next();
//   } catch (error) {
//     next(error);
//   }
// });

const Program = mongoose.model("Program", programSchema);

module.exports = Program;
