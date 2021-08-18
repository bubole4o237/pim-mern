//////////// Register an User ///////////////////////////////////

const register = (user) => {
    
    // let user = {
    //     username,
    //     password,
    //     repeatPassword
    // }

    return fetch('http://localhost:5000/api/user/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .catch(err => console.log(err));
};


////////////// Login an User /////////////////////////////////////

const login = (user) => {

    let result = fetch('http://localhost:5000/api/user/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            // localStorage.setItem('userToken', result.token);
            localStorage.setItem('username', result.username);
            localStorage.setItem('userId', result._id);

            // isLog(true);
        })
        .catch(err => console.log(err));


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

module.exports = {
    register,
    login,
    logout
}