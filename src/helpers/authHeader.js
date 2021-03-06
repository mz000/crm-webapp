export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.idToken) {
        return {
            'authorization': user.accessToken,
            'idtoken': user.idToken
        };
    } else {
        return {};
    }
}