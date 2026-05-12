const API_URL = 'https://students.netoservices.ru/fe-diplom';

const handleResponse = async (response) => {
    if (!response.ok) {
        let errorMessage = `HTTP error! status: ${response.status}`;
        errorMessage = await response.text || errorMessage;
        throw new Error(errorMessage);
    }

    if (response.status === 204) {
        return {};
    }

    return await response.json();
}

function buildUrl(baseUrl, params) {
    const filteredParams = Object.fromEntries(
        Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== '')
    );
    
    const queryString = new URLSearchParams(filteredParams).toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

export const api = {

    subscribe: async (email) => {
        try {
            const response = await fetch(`${API_URL}/subscribe?email=${email}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
            });
            return await handleResponse(response);
        } catch (error) {
            console.log(error)
            throw error;
        }
    },

    getCities: async(substr) => {
        try {
            const response = await fetch(`${API_URL}/routes/cities?name=${substr}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            });
            return await handleResponse(response);
        } catch (error) {
            console.log(error)
            throw error;
        }
    },

    getRoutes: async(params) => {
        const url = buildUrl(`${API_URL}/routes`, params);
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            });
            return await handleResponse(response);
        } catch (error) {
            console.log(error)
            throw error;
        }
    },

    getSeats: async(departure_id) => {
        try {
            const response = await fetch(`${API_URL}/routes/${departure_id}/seats`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            });
            return await handleResponse(response);
        } catch (error) {
            console.log(error)
            throw error;
        }
    },

    order: async(order) => {
        try {
            const response = await fetch(`${API_URL}/order`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                body: JSON.stringify(order),
            });
            return await handleResponse(response);
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

}