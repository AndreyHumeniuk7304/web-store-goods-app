import { Formik, Field, Form, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import "./form.scss";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../store/productCart/actions";

const PurchaseForm = () => {
  const cartProduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const CustomErrorMessage = ({ name }) => (
    <ErrorMessage name={name}>
      {(message) => (
        <div className="error-box">
          <i>{message}</i>
        </div>
      )}
    </ErrorMessage>
  );

  const purschaseSchema = object({
    firstName: string().required("It's a required field"),
    secondName: string().required("It's a required field"),
    userAge: number()
      .typeError("Enter the value in number type")
      .required("It's a required field"),
    deliveryAddress: string().required("It's a required field"),
    phoneNumber: number()
      .typeError("Enter the value in number type")
      .required("It's a required field")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point"),
  });

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);
    setTimeout(() => {
      actions.resetForm(true);
      console.log("user information:", values);
      console.log("products:", cartProduct);
      actions.setSubmitting(false);
      dispatch(clearCart());
    }, 2000);
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        secondName: "",
        userAge: "",
        deliveryAddress: "",
        phoneNumber: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={purschaseSchema}
    >
      {(props) => {
        return (
          <>
            <Form className="form">
              <h2 className="form-title">Enter the information about you</h2>
              <section className="form-inputs">
                <div className="form-input-item">
                  <label className="label" htmlFor="firstName">
                    Enter your first name:
                  </label>
                  <Field
                    className="input-item"
                    id="firstName"
                    name="firstName"
                  />
                  <CustomErrorMessage className="error-box" name="firstName" />
                </div>
                <div className="form-input-item">
                  <label className="label" htmlFor="secondName">
                    Enter your second name:
                  </label>
                  <Field
                    className="input-item"
                    id="secondName"
                    name="secondName"
                  />
                  <CustomErrorMessage name="secondName" />
                </div>
                <div className="form-input-item">
                  <label className="label" htmlFor="userAge">
                    Enter your age:
                  </label>
                  <Field className="input-item" id="userAge" name="userAge" />
                  <CustomErrorMessage name="userAge" />
                </div>
                <div className="form-input-item">
                  <label className="label" htmlFor="deliveryAddress">
                    Enter your delivery address:
                  </label>
                  <Field
                    className="input-item"
                    id="deliveryAddress"
                    name="deliveryAddress"
                  />
                  <CustomErrorMessage name="deliveryAddress" />
                </div>
                <div className="form-input-item">
                  <label htmlFor="phoneNumber" className="label">
                    Enter your phone number
                  </label>
                  <Field
                    className="input-item"
                    id="phoneNumber"
                    name="phoneNumber"
                  />
                  <CustomErrorMessage name="phoneNumber" />
                </div>

                <button
                  disabled={props.isSubmitting}
                  className="btn checkout-btn"
                  type="submit"
                >
                  Checout
                </button>
              </section>
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default PurchaseForm;
