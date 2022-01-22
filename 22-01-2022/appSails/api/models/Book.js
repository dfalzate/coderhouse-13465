/**
 * Book.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: { type: "string" },
    price: { type: "number" },
    category: { type: "string" },
    author: { type: "string" },
  },
};
