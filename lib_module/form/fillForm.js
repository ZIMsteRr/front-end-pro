const data = {
    "id": 1,
    "firstName": "Presley",
    "lastName": "Ward-Jaskolski",
    "phone": "774-00-01",
    "email": "Presley.Ward-Jaskolski@yahoo.com"
}

export function fillForm (formElements, data) {
    for (const input of formElements) {
        if (
            ['text', 'hidden'].includes(input.type)
            && data?.[input.id]
        ) {
            input.value = data[input.id]
        }
    }
}