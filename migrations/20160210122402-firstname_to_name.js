(function() {

  'use strict';

  module.exports = {
    up: function(queryInterface, Sequelize) {
      return queryInterface.renameColumn('Users', 'firstname', 'name');
    },

    down: function(queryInterface, Sequelize) {

    }
  };
})();
