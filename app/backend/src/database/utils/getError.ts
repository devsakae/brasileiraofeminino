import ErrorInterface from '../interfaces/Error.interface';

const getError = (err: ErrorInterface) => {
  if (err.details[0].type === 'any.required') return { code: 400, ...err.details[0] };
  return { code: 422, ...err.details[0] };
};

export default getError;
