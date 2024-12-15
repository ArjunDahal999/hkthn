import axios from 'axios';

// this is for the api client without the header
export const pythonApiClientWithoutHeader = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PYTHON_API_BASE_URL,
});
