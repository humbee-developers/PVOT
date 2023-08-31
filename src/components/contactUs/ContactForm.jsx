import { useFormik } from "formik";
import "./contactForm.css";
import { ContactFormSchemas } from "../../schemas/ContactFormSchemas";

const ContactForm = () => {
  const initialValue = {
    fullName: "",
    company: "",
    email: "",
    budget: "",
    onYourMind: "",
    checkbox: false,
  };
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: ContactFormSchemas,
    onSubmit: (value, action) => {
      action.resetForm();
    },
  });
  console.log(values);
  return (
    <div className="contact_form">
      <div className="contact_form_wrapper">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="fullName">Full name</label>
            <input
              type="name"
              name="fullName"
              onChange={handleChange}
              value={values.fullName}
            />
            {touched.fullName && errors.fullName && (
              <p className="error">{errors.fullName}</p>
            )}
          </div>
          <div className="field">
            <label htmlFor="company">Company</label>
            <input
              type="name"
              name="company"
              onChange={handleChange}
              value={values.company}
            />
            {touched.company && errors.company && (
              <p className="error">{errors.company}</p>
            )}
          </div>
          <div className="field">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            {touched.email && errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>
          <div className="field">
            <label htmlFor="budget">Your budget</label>
            <input
              type="text"
              name="budget"
              onChange={handleChange}
              value={values.budget}
            />
            {touched.budget && errors.budget && (
              <p className="error">{errors.budget}</p>
            )}
          </div>
          <div className="field">
            <label htmlFor="onYourMind">Whats on your mind</label>
            <input
              type="name"
              name="onYourMind"
              onChange={handleChange}
              value={values.onYourMind}
            />
            {touched.onYourMind && errors.onYourMind && (
              <p className="error">{errors.onYourMind}</p>
            )}
          </div>
          <div className="accept_check">
            <div className="checkbox_flex">
              <input
                type="checkbox"
                name="checkbox"
                onChange={handleChange}
                value={values.checkbox}
              />
              <div className="accept_pvot">
                I here by accept pvot{" "}
                <span>General terms & Privacy Policy</span>{" "}
              </div>
            </div>
            {touched.onYourMind && errors.onYourMind && (
              <p className="error">{errors.onYourMind}</p>
            )}
          </div>
          <div className="field">
            <input
              type="submit"
              value={"Send Message"}
              className="submit_btn"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
