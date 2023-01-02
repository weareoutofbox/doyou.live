import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$/;
const usernameRules = /^(?!(?:.*\d+){3,})[a-z0-9]{3,10}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(8)
    .max(20)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Minimum 8-20 characters, one capital letter and one number"),
  username: yup
    .string()
    .min(3)
    .max(10)
    .matches(usernameRules, { message: "Please enter a valid username." })
    .required(
      " Minimum 3-10 characters,all lowercase,can use maximum of 2 numbers no special characters allowed"
    ),
});
