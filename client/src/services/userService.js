//////////// Register an User ///////////////////////////////////

const register = (user) => {

    return fetch('http://localhost:5001/api/user/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => {
            if (!res.ok) {
                return res.json().then(err => {
                    throw new Error(err.error || 'Registration failed');
                });
            }
            return res.json();
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};


////////////// Login an User /////////////////////////////////////

const login = (user) => {

    let result = fetch('http://localhost:5001/api/user/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then((res) => {
            if (!res.ok) {
                return res.json().then(err => {
                    throw new Error(err.error || 'Login failed');
                });
            }
            return res.json();
        })
        .then((result) => {
            console.log(result);
            localStorage.setItem('username', result.username);
            localStorage.setItem('userId', result._id);
            return result;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });

    return result;
};



////////////////// Logout an User //////////////////////////////////

const logout = async () => {
    try {
        let results = await Promise.all([
            localStorage.removeItem('username'),
            localStorage.removeItem('userId'),
        ]);

        return results;

    } catch (err) {
        console.log(err);
    }
};



export {
    register,
    login,
    logout
}