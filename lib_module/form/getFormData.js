export function getFormData (formElements) {
    const data = {}

    for (const input of formElements) {
        if (input.type === 'text' || input.type === 'hidden') {

            data[input.id] = input.id === 'id' ? Number(input.value) : input.value;
        }
    }

    return data
}