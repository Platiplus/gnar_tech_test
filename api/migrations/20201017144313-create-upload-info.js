'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('upload_info', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      id_upload: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'uploads'
          },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      yard_code: {
        type: Sequelize.STRING,
        allowNull: false
      },
      employee_code: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      clock_in: {
        type: Sequelize.DATE,
        allowNull: false
      },
      clock_out: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('upload_info')
  }
}
