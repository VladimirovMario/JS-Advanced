import { post } from './api.js'

const endpoints = {
    login: '/users/login'
}

export async function login(email, password) {
    console.log(email , password);

    const data = await post(endpoints.login , {email , password});

    const userData = {
        id: data._id,
        email: data.email,
        accessToken: data.accessToken
    }
    localStorage.setItem('userData', JSON.stringify(userData))
}