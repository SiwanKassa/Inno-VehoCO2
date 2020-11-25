const url = 'http://10.114.32.107/app/';


const login = (username, password) => {
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
    };
    return fetch(url + 'auth/login', settings).then(response => {
        return response.json();
    });
};

const register = (username, password, fullName) => {
    const userInfo = {
        username: username,
        password: password,
        full_name: fullName,
    }


    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
    };
    return fetch(url + 'users/addUser', settings).then(response => {
        return response.json();
    });
};


export{login}
export{register}
