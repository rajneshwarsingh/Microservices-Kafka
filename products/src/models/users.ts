module.exports = (sequelize: any, DataTypes: any) => {
  const users = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING(100),
      },
      age: {
        allowNull: true,
        type: DataTypes.STRING(3),
      },
      email: {
        allowNull: true,
        type: DataTypes.STRING(30),
      },
      productCount: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      password: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      deletedBy: {
        type: DataTypes.STRING(36),
        allowNull: true,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    },
  );
  return users;
};
