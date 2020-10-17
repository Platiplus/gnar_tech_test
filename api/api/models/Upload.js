const { Model, DataTypes } = require('sequelize')

class Upload extends Model {
  static init (connection) {
    super.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      sequelize: connection
    })
  }

  static associate (models) {
    this.hasMany(models.UploadInfo, { foreignKey: 'id_upload', as: 'upload_infos' })
  }
}

module.exports = Upload
