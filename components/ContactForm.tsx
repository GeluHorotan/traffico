// Form
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

type Props = {
  className?: string;
};

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Please enter more than 3 characters!')
    .max(10, `Please enter less than 10 characters!`)
    .required('This field is required!'),
  email: Yup.string()
    .min(3, `Please enter more than 3 characters!`)
    .max(10, `Please enter less than 10 characters!`)
    .required('This field is required!'),
});

const ContactForm = ({ className }: Props) => {
  return (
    <Formik
      validateOnBlur
      validateOnChange
      initialValues={{
        name: '',
        email: '',
      }}
      validationSchema={FormSchema}
      onSubmit={async ({ email, name }) => {
        console.log('WORKING');
      }}
    >
      {({ values: { name, email }, errors, handleBlur, handleChange }) => (
        <Form className={'flex flex-col gap-8 py-4 text-primary'}>
          <Field
            label="Name"
            id="name"
            name="name"
            onChangeHandler={handleChange}
            onBlurHandler={handleBlur}
            type="input"
            value={name}
            error={errors.name}
            //  as={Input}
          />
          <Field
            label="Email"
            id="email"
            name="email"
            onChangeHandler={handleChange}
            onBlurHandler={handleBlur}
            type="input"
            value={email}
            error={errors.email}
            //  as={Input}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
