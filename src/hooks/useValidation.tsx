import newTicketSchema from "../schemas/newTicketSchema";

// we create the function validate inside the hook and export return it. We need to do this because custom hooks cannot be called inside other functions or conditionally, however, the returned the returned function can
function useValidation() {
  function validate(data: any) {
    const { error } = newTicketSchema.validate(data, { abortEarly: false });
    if (!error) return null;
    return error;
  }
  return { validate };
}

export default useValidation;
