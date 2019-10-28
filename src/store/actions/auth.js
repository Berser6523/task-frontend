const REQUEST_AUTH = 'REQUEST_AUTH';

export function auth({email, password}){
    return {
        type: REQUEST_AUTH,
        email,
        password,
    }
}