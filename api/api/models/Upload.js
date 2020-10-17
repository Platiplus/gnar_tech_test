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
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      sequelize: connection
    })
  }

  static associate (models) {
    this.hasOne(models.UploadInfo, { foreignKey: 'id_upload', as: 'upload_info' })
  }
}

module.exports = Upload
