const REQUEST_AUTH = 'REQUEST_AUTH';
const TOKEN_EXPIRED = 'TOKEN_EXPIRED'


export function auth({email, password}){
    return {
        type: REQUEST_AUTH,
        email,
        password,
    }
}