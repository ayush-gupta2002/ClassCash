const { Schema, model } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const OutletSchema = new Schema({
  //   name: {
  //     type: String,
  //     required: true,
  //     index: {
  //       unique: true,
  //     },
  //   },
  owner: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    requied: true,
  },
  coins: {
    type: Number,
    default: 0,
  },

  transactions: {
    type: [
      {
        coins: {
          type: Number,
          required: true,
        },
        source: {
          type: Schema.Types.ObjectId,
          required: true,
        },
      },
    ],
  },
});
OutletSchema.plugin(passportLocalMongoose);
const Outlet = model("Outlet", OutletSchema);
Outlet.createIndexes();
module.exports = Outlet;
