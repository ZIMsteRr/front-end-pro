import React from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {actionSaveItem} from "./store/actions";
import { Formik, Form, Field, useFormikContext } from 'formik'
import { ValidationError } from '../../components/ValidationError'
import * as Yup from 'yup';

const PHONE_TEMPLATE_REGEXP = /^\d{3}-\d{3}-\d{3}$/

const validationSchema = Yup.object({
    firstName: Yup.string().min(3).required(),
    phone: Yup.string().matches(PHONE_TEMPLATE_REGEXP).required(),
})

export function EditForm () {
    const dispatch = useDispatch();
    const editingWaiter = useSelector((state) => state.waiters.editingWaiter);
    const onSubmit = (values, {resetForm}) => {
        const formWaiter = {
            ...editingWaiter,
            ...values,
        }

        dispatch(actionSaveItem(formWaiter));
        resetForm();
    }

    return (
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
    )
}

function SaveButton () {
    const { isValid } = useFormikContext()

    return <button disabled={!isValid} type="submit">Save</button>
}