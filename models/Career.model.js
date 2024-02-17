const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
const careerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name  is missing"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    phone: {
      type: Number,
      required: [true, "phone date is required"],
    },
    document: {
      type: String,
      required: [true, "document is required"],
    },
    cover: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

careerSchema.plugin(mongoose_delete, {
  overrideMethods: ["find", "findOne", "findOneAndUpdate", "update"],
});
const Career = mongoose.model("career", careerSchema);

module.exports = Career;
