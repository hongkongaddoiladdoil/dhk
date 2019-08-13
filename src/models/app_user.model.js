// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const appUser = sequelizeClient.define('app_user', {
    id: {
      field:'user_uuid',
      type: DataTypes.UUIDV1,
      primaryKey: true     
    },
    username: {
      type: DataTypes.STRING    
    },
    display_name: {
      type: DataTypes.STRING     
    },
    createdAt:{
      type: DataTypes.NOW,
      field: 'created_at'      
    },
    updatedAt:{
      type: DataTypes.NOW,
      field: 'updated_at'
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  appUser.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return appUser;
};
