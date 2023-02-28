import ErrorInterface from '../interfaces/Error.interface';

const getError = (err: ErrorInterface) => {
  const tipo = err.details[0].type;
  if (tipo === 'any.required' || tipo === 'string.empty') {
    return { ...err.details[0], code: 400, message: 'All fields must be filled' };
  }
  if (tipo === 'string.email' || tipo === 'string.min') {
    return { ...err.details[0], code: 401, message: 'Invalid email or password' };
  }
  return { ...err.details[0], code: 400, message: err.details[0].message };
};

export default getError;
