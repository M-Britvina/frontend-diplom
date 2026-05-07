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

}