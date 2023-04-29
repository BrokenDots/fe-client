import Joi from "joi";

const newTicketSchema = Joi.object({
  title: Joi.string().min(3).max(128).required(),
  client: Joi.string().required(),
  crm: Joi.string().required(),
  status: Joi.string(),
});

export default newTicketSchema;
