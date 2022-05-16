import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


export const fetchCard = (id) => API.get(`/cards/${id}`);
export const fetchCards = () => API.get(`/cards`);

export const signIn = (formData) => API.get('/user/signin', {headers:formData});
export const signUp = (formData) => API.post('/user/signup', formData);
