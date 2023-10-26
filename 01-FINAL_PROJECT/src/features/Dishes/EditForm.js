import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getOneItem, saveItem } from './store/thunks';
import { Formik, Form, Field } from 'formik';
import { ValidationError } from '../../components/ValidationError';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
});

export function EditForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { dishId } = useParams();
    const editingDish = useSelector((state) => state.dishes.editingDish);

    useEffect(() => {
        if (dishId) {
            dispatch(getOneItem(dishId));
        }
    }, [dispatch, dishId]);

    return (
        <div>
            <h2>Edit Dish</h2>
            <Formik
                initialValues={{
                    name: editingDish.name,
                    description: editingDish.description,
                    price: editingDish.price,
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    const newDish = {
                        id: editingDish.id,
                        ...values,
                    };
                    dispatch(saveItem(newDish));
                    navigate('/dishes');
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field type="text" name="name" />
                        <ValidationError name="name" />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <Field type="text" name="description" />
                        <ValidationError name="description" />
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <Field type="number" name="price" />
                        <ValidationError name="price" />
                    </div>
                    <button type="submit">Save</button>
                </Form>
            </Formik>
        </div>
    );
}
