import { Button, Label, Col, FormGroup} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';

const ContactForm = () => {
    const handleSubmit = (values, {resetForm}) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                agree: false,
                contactType: 'By Phone',
                feedback: ''
            }}
            onSubmit={handleSubmit}
            validate={validateContactForm}
        >
            <Form>
                <FormGroup row>
                    <label htmlFor='firstName' md='2'>
                        First Name
                    </label>
                    <Col md='10'>
                        <Field 
                         name='firstName'
                         placeholder='First Name'   
                         className='form-control'/>
                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <label htmlFor='lastName' md='2'>
                        Last Name
                    </label>
                    <Col md='10'>
                        <Field 
                        name='lastName'
                        placeholder='Last Name' className='form-control'/>
                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <label htmlFor='phoneNum' md='2'>
                        Phone
                    </label>
                    <Col md='10'>
                        <Field 
                        name='phoneNum'
                        placeholder='Phone' className='form-control'/>
                        <ErrorMessage name='phoneNum'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <label htmlFor='email' md='2'>
                        Email
                    </label>
                    <Col md='10'>
                        <Field 
                        name='email'
                        placeholder='Email' className='form-control'/>
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>

                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label check md={{ size: 4, offset: 2 }}>
                        <Field 
                            name='agree'
                            type='checkbox'
                            className='form-check-input'
                        />{''}
                        May we contact you?
                    </Label>
                    <Col md='4'>
                        <Field 
                        name='contactType'
                        as='select'
                        className='form-control'
                        >
                            <option>By Phone</option>
                            <option>By Email</option>
                        </Field>
    
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <label htmlFor='feedback' md='2'>
                        Your Feedback
                    </label>
                    <Col md='10'>
                        <Field 
                        name='feedback'
                        as='textarea'
                        rows='12'
                        className='form-control'/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: 10, offset: 2 }}>
                        <Button type='submit' color='primary'>
                            Send Feedback
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    )
}

export default ContactForm;