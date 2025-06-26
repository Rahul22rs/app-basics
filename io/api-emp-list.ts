import StatusAndResponse from "./StatusAndResponse";

const apiEmpList = async () => {

    const url = 'http://127.0.0.1:8000/api/empList'
    const method = 'GET'
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    // const body = {
    //     name: name
    //     , email: email
    // }
    const response = await fetch(
        url,
        {
            method: method,
            headers: headers,
            // body: JSON.stringify(body)
        },

    );

    const r: StatusAndResponse = {
        status: response.status,
        data: await response.json()
    }
    console.log(JSON.stringify(r))
    return r

}
export default apiEmpList;