import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getOneItem, saveItem } from './store/thunks';
import { Formik, Form, Field } from 'formik';
import { ValidationError } from '../../components/ValidationError';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';

const validationSchema = Yup.object({
    number: Yup.number().required('Number is required').positive('Number must be positive'),
});

export function EditForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { tableId } = useParams();
    const editingTable = useSelector((state) => state.tables.editingTable);

    useEffect(() => {
        if (tableId) {
            dispatch(getOneItem(tableId));
        }
    }, [dispatch, tableId]);

    return (
        <div>
            <h2>{tableId ? 'Edit Table' : 'Add Table'}</h2>
            <Formik
                initialValues={{
                    number: editingTable.number,
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    const newTable = {
                        id: editingTable.id,
                        number: values.number,
                    };
                    dispatch(saveItem(newTable));
                    navigate('/tables');
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="number">Number</label>
                        <Field type="number" name="number" />
                        <ValidationError name="number" />
                    </div>
                    <button type="submit">Save</button>
                </Form>
            </Formik>
        </div>
    );
}