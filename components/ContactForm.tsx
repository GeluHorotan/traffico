// Form
import { Field, Form, Formik } from 'formik';
import { HiArrowNarrowRight } from 'react-icons/hi';
import * as Yup from 'yup';
import { useAlert } from '../context/hooks/useAlert';
import Button from './Button';
import Input from './Input';

type Props = {
  className?: string;
};

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Please enter more than 3 characters!')
    .max(10, `Please enter less than 10 characters!`)
    .required('This field is required!'),
  email: Yup.string().required('This field is required!'),
});

const ContactForm = ({ className }: Props) => {
  const { createAlert } = useAlert();
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
        createAlert('Unconfigured yet!', false);
      }}
    >
      {({ values: { name, email }, errors, handleBlur, handleChange }) => (
        <Form
          className={
            'flex flex-col gap-8 px-20 py-14 py w-1/2 bg-white text-accent_black  rounded-xl -translate-y-1/4 max-lg:w-full max-lg:px-4'
          }
        >
          <Field
            label="Name"
            id="name"
            name="name"
            onChangeHandler={handleChange}
            onBlurHandler={handleBlur}
            type="input"
            value={name}
            error={errors.name}
            as={Input}
            placeholder="John Doe"
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
            as={Input}
            placeholder="Your email address"
          />
          <Button type="submit" withBackground>
            get started
            <HiArrowNarrowRight
              size={24}
              className="font-black "
              fontStyle={'font-black'}
            />
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
