module.exports = function(m) {
  // Categories
  m.Categories.hasMany(m.Items);

  // Events
  m.Events.hasMany(m.Rsvp);
  m.Events.hasMany(m.Images);
  m.Events.belongsTo(m.Users);

  // Images
  m.Images.belongsTo(m.Items);
  m.Images.belongsTo(m.Users);
  m.Images.belongsTo(m.Events);

  // Items
  m.Items.hasMany(m.Images);
  m.Items.hasMany(m.Promotions);
  m.Items.hasMany(m.Reviews);

  m.Items.belongsTo(m.Categories);
  m.Items.belongsTo(m.Users);

  // Item promotions: recommedations, shares and sponsors
  m.Promotions.belongsTo(m.Users);

  // Messaging
  m.Messages.belongsTo(m.Users);
  m.Messages.belongsTo(m.Users, {
    foreignKey: 'receiver_id'
  });

  // Notifications
  m.Notifications.belongsTo(m.Users);

  // Review ratings
  m.Rating.belongsTo(m.Items);
  m.Rating.belongsTo(m.Reviews);
  m.Rating.belongsTo(m.Users);

  // RSVPs
  m.Rsvp.belongsTo(m.Events);
  m.Rsvp.belongsTo(m.Users);

  // Reviews
  m.Reviews.hasMany(m.Rating);
  m.Reviews.belongsTo(m.Items);
  m.Reviews.belongsTo(m.Users);

  // Users
  m.Users.belongsTo(m.Countries);
  m.Users.hasMany(m.Events);
  m.Users.hasMany(m.Images);
  m.Users.hasMany(m.Items);
  m.Users.hasMany(m.Promotions, {
    foreignKey: 'created_by'
  });
  m.Users.hasMany(m.Promotions, {
    foreignKey: 'created_for'
  });
  m.Users.hasMany(m.Messages);
  m.Users.hasMany(m.Notifications);
  m.Users.hasMany(m.Rsvp);
  m.Users.hasMany(m.Reviews);
};
