const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      ref: "user",
      required: [true, "User Id is missing"],
    },
    email: {
      type: String,
      required: [true, "title is required"],
    },
    phone: {
      type: Number,
      required: [true, "Phone is required"],
    },
    message: {
      type: String,
      required: [true, "message is required"],
    },
  },
  {
    timestamps: true,
  }
);

contactSchema.plugin(mongoose_delete, {
  overrideMethods: ["find", "findOne", "findOneAndUpdate", "update"],
});
const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
