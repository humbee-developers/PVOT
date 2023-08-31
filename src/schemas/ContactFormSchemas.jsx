import * as Yup from "yup";

export const ContactFormSchemas = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  company: Yup.string().required("Company name is required"),
  email: Yup.string().email().required("Email is required"),
  budget: Yup.string().required("budget is required"),
  onYourMind: Yup.string().required("This field is required is required"),
  checkbox:Yup.boolean().required("This field is required")
});
