import IUser from "../interfaces/IUser";

const joi = require('joi');

const userSchema = joi.object({
  userName: joi.string().required().messages({
    'any.required': '"userName" is required',
    'string.email': '"userName" must be a valid userName',
  }),
  password: joi.string().min(6).required().messages({
    'any.required': '"password" is required',
    'string.min': '"password" length must be at least 6 characters long',
  }),
});

const userValidate = (params: any) => {
  const { error } = userSchema.validate(params);
  if (error) {
    return { type: 400, message: error.message };
  }
  return { type: null, message: '' };
};

export default userValidate;
