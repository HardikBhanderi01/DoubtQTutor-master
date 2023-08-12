import { toast } from "react-toastify";

export const getSimplifiedError = (error, field) => {
  toast.error(error.response.data.error)
  if (error.response?.status === 500) return 'Please contact support team.';
  const errorResponse = error.response && error.response.data;
  if (!errorResponse) {
    return 'Something went wrong, please try again later';
  }
  if(errorResponse?.error === "Invalid refresh token!"){
    if(!window.location.href.includes("signin")){
      window.location.href = '/logout';
    }
  }
  return getErrors(errorResponse);
};

const getError = (error) => {
  if (!Object.keys(error).length || typeof error === 'string') return error;
  let errors = [];
  if (Array.isArray(error) && error.length) {
    errors = [error[0].message, ...error];
  } else {
    Object.keys(error).forEach((e) => {
      return (errors = [...errors, error[e]]);
    });
  }

  return errors.filter((e) => e);
};

const getErrors = (errorResponse) => {
  return errorResponse
};
