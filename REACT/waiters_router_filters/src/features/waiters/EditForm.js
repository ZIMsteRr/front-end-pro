import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {actionGetOneItem, actionSaveItem} from "./store/actions";
import { Formik, Form, Field, useFormikContext } from 'formik'
import { ValidationError } from '../../components/ValidationError'
import * as Yup from 'yup';
import {useNavigate,useParams} from "react-router-dom";

const PHONE_TEMPLATE_REGEXP = /^\d{3}-\d{3}-\d{3}$/

const validationSchema = Yup.object({
    firstName: Yup.string().min(3).required(),
    phone: Yup.string().matches(PHONE_TEMPLATE_REGEXP).required(),
})

export function EditForm () {
    let { waiterId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const editingWaiter = useSelector((state) => state.waiters.editingWaiter);


    useEffect(() => {
        if (waiterId) {
            dispatch(actionGetOneItem(waiterId));
        }
    }, [waiterId]);

    const onSubmit = (values, {resetForm}) => {
        const formWaiter = {
            ...editingWaiter,
            ...values,
        }

        dispatch(actionSaveItem(formWaiter));
        resetForm();
        navigate('/Waiters');
    }

    return (
        <div>
            <h1>Create / Edit Waiter</h1>
            <Formik
                enableReinitialize
                initialValues={editingWaiter}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <Field type="text" name="firstName" />
                        <ValidationError name="firstName" />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone</label>
                        <Field type="text" name="phone" />
                        <ValidationError name="phone" />
                    </div>

                    <SaveButton />
                </Form>
            </Formik>
        </div>
    )
}

function SaveButton () {
    const { isValid } = useFormikContext()

    return <button disabled={!isValid} type="submit">Save</button>
}