import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID MHo35HQNq5nfiVxUAkkcjs3WfXsei16SJXVV4z3mvuo'
    }
});