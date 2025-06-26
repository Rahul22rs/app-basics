import StatusAndResponse from "./StatusAndResponse";

const apiMultiply = async (n1: string, n2: string) => {

    const url = 'http://127.0.0.1:8000/api/multiply'
    const method = 'POST'
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    const body = {
        n1: n1,
        n2: n2
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
export default apiMultiply;