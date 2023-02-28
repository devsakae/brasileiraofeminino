import { ValidationError } from 'sequelize';

export default interface ErrorInterface extends ValidationError {
  code: number,
  details: {
    type: string,
    message: string,
  }[],
}
