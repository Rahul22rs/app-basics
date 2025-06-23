import StatusAndResponse from "./StatusAndResponse";

const apiGetHelloName = async (name: string) => {

    const url = `http://127.0.0.1:8000/api/hello/${name}`
    const method = 'GET'
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    const response = await fetch(
        url,
        {
            method: method,
            headers: headers
        }
    );
    const r: StatusAndResponse = {
        status: response.status,
        data: await response.json()
    }
    console.log(JSON.stringify(r))
    return r

}
export default apiGetHelloName;