export class Api {
    constructor(url) {
        this.url = url;
    }

    async request(url = '', method = 'GET', body) {
        try {
            const response = await fetch(`${this.url}${url}`, {
                method,
                body: body ? JSON.stringify(body) : undefined,
                headers: {
                    'Content-type': 'application/json',
                },
            });

            if (response.ok) {
                return await response.json();
            }

        } catch (error) {
            throw new Error(`Request error: ${error.message}`);
        }
    }

    async getList() {
        try {
            return await this.request();

        } catch (error) {
            throw new Error(`Can not fetch list: ${error.message}`);
        }
    }

    async create(data) {
        try {
            return await this.request('', 'POST', data);

        } catch (error) {
            throw new Error(`Can not create: ${error.message}`);
        }
    }

    async update(id, data) {
        try {
            return await this.request(`/${id}`, 'PUT', data);

        } catch (error) {
            throw new Error(`Can not update: ${error.message}`);
        }
    }

    async delete(id) {
        try {
            return await this.request(`/${id}`, 'DELETE');

        } catch (error) {
            throw new Error(`Can not delete: ${error.message}`);
        }
    }
}