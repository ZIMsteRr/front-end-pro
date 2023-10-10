import { useState, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik'
import * as Yup from 'yup';
import { ValidationError } from '../../components/ValidationError'

const PHONE_TEMPLATE_REGEXP = /^\d{3}-\d{3}-\d{3}$/
const validationSchema = Yup.object({
    firstName: Yup.string().min(3).required(),
    lastName: Yup.string().min(3).required(),
    phone: Yup.string().matches(PHONE_TEMPLATE_REGEXP).required(),
})

const initialContact = {
    firstName: 'Harry',
    lastName: 'Potter',
    phone: '666-777-888'
}

export function ContactForm () {
    const [contact, setContact] = useState(initialContact)

    useEffect(() => {
        setTimeout(() => {
            setContact({
                firstName: 'Hermione',
                lastName: 'Granger',
                phone: '999-888-777'
            })
        }, 2000)
    }, [])

    console.log('contact', contact)

    return (
        <Formik
            enableReinitialize
            initialValues={contact}
            onSubmit={(values) => {
                console.log(JSON.stringify(values, null, 2))
            }}
            validationSchema={validationSchema}
        >
            <Form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field type="text" name="firstName" />
                    <ValidationError name="firstName" />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field type="text" name="lastName" />
                    <ValidationError name="lastName" />
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