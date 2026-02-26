import * as yup from "yup";

export const registerSchema = yup.object({
    fullName: yup.string().required("Full name is required"),

    email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
    
    password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 charachters."),
    
    confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Password do not match.")
    
});