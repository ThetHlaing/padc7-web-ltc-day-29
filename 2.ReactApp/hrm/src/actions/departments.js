export const retrieve_departments = (token) => (dispatch) => {
    fetch('http://localhost:8088/api/departments', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: 'GET_ALL_DEPARTMENTS',
                departments: data
            })
        })
}

export const insert_department = (token, department_name) => (dispatch) => {
    const formData = new URLSearchParams();
    formData.append("name", department_name);

    fetch('http://localhost:8088/api/departments', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
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
                type: 'ADD_DEPARTMENT',
                department: data.department
            })
        })
        .catch(err => { console.log(err) });
}

