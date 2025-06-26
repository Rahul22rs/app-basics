import StatusAndResponse from "./StatusAndResponse";

const apiEmpCreate = async (name: string, email: string) => {

    const url = 'http://127.0.0.1:8000/api/emp'
    const method = 'POST'
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    const body = {
        name: name
        , email: email
    }
    const response = await fetch(
        url,
        {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
        },

    );

    const r: StatusAndResponse = {
        status: response.status,
        data: await response.json()
    }
    console.log(JSON.stringify(r))
    return r

}
export default apiEmpCreate;