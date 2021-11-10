const User = require('./User');
const Project = require('./Project');
const Comments = require('./Commenting');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Project.hasMany(Comments, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});
 
Comments.belongsTo(Project, {
  foreignKey: 'project_id'
});

module.exports = { User, Project, Comments };
