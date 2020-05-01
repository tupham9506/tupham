/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'users',
  attributes: {
    userName: {
      type: 'string',
      maxLength: 64,
      required: true
    },
    password: {
      type: 'string',
      maxLength: 256,
      required: true
    },
    desktop: {
      type: 'string',
      maxLength: 256,
      required: true
    },
    background: {
      type: 'string',
      maxLength: 512,
      required: true
    },
  },

};

