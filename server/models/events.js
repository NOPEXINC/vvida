module.exports = function(sequelize, DataType) {
  return sequelize.define('Events', {
      // FOREIGN KEY
      // references the user id in users table
      // user_id: {
      //   type: DataType.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: users,
      //     key: 'id'
      //   }
      // },

      // event name
      // hold the name of the events
      ev_name: {
        type: DataType.STRING,
        allowNull: false,
      },

      // description
      description: {
        type: DataType.TEXT,
        allowNull: true
      },

      // location of the event
      location: {
        type: DataType.TEXT,
        allowNull: false
      },

      // venue of the event
      venue: {
        type: DataType.TEXT,
        allowNull: false
      },

      // time
      time: {
        type: DataType.DATE,
      },

      // event sponsors
      sponsor: {
        type: DataType.TEXT,
        allowNull: true
      }

    },
    // table configuration
    {
      // prevent time stamps from using camelase
      // updatedAt to updated_at and createdAt to created-at
      underscore: true,
      // prevent sequelize from transforming the user tables to prural
      freezetableName: true
    });
};
