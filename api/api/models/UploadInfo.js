const { Model, DataTypes } = require('sequelize')

class UploadInfo extends Model {
  static init (connection) {
    super.init({
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      id_upload: {
        type: DataTypes.UUID,
        references: {
          model: {
            tableName: 'uploads'
          },
          key: 'id'
        },
        allowNull: false
      },
      yard_code: {
        type: DataTypes.STRING,
        allowNull: false
      },
      employee_code: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      clock_in: {
        type: DataTypes.DATE,
        allowNull: false
      },
      clock_out: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      sequelize: connection,
      tableName: 'upload_info'
    })
  }

  static associate (models) {
    this.belongsTo(models.Upload, { foreignKey: 'id_upload', as: 'upload' })
  }
}

module.exports = UploadInfo
