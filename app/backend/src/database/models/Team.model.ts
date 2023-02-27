import Pool = require('mysql2/typings/mysql/lib/Pool');
import { Model } from 'sequelize';
// import OtherModel from './OtherModel';

class Teams extends Model {
  public connection: Pool;

  constructor(connection: Pool) {
    super();
    this.connection = connection;
  }

  
}

// Teams.init({
//   // ... Campos
// }, {
//   // ... Outras configs
//   underscored: true,
//   sequelize: db,
//   // modelName: 'example',
//   timestamps: false,
// });

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Teams;
