export const retrieveToken = (name, password) => (dispatch) => {
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("password", password);

    fetch('http://localhost:8088/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        body: formData,
    })
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(data => {
            console.log(data);
            dispatch({
                type: 'ADD_TOKEN',
                token: data.token
            })
        })
        .catch(err => { console.log(err) });
}