import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateCommentForm } from "../../utils/validateCommentForm";
import { addReview } from "./reviewsSlice";


const ReviewForm = ({ wineId }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const review = {
            wineId: parseInt(wineId),
            rating: values.rating,
            author: values.author,
            text: values.reviewText,
            date: new Date(Date.now()).toISOString()
        };
        console.log(review);
        dispatch(addReview(review));
        setModalOpen(false);
    };

    return (
        <>
            <Button outline onClick={() => setModalOpen(true)}>
                <i className='fa fa-pencil fa-lg' /> Add Review
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Add Review
                </ModalHeader>
                <ModalBody>
                    <Formik
                      initialValues={{
                        rating: undefined,
                        author: '',
                        commentText: ''
                    }}
                    onSubmit={handleSubmit}
                    validate={validateCommentForm}
                    >
                      <Form>
                        <FormGroup>
                            <Label htmlFor="rating">
                                Rating
                            </Label>
                            <Field
                                    name='rating'
                                    as='select'
                                    className='form-control'
                            >
                                    <option>Select...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                            </Field>
                            <ErrorMessage name='rating'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="author">
                                Your Name
                            </Label>
                            <Field
                                name='author'
                                placeholder='Your Name'
                                className='form-control'
                            />
                            <ErrorMessage name='author'>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="reviewText">
                                Review
                            </Label>
                            <Field
                                    name='commentText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                            />
                        </FormGroup>
                        <Button type='submit' color='primary'>
                                Submit
                        </Button>
                      </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
}

export default ReviewForm;




