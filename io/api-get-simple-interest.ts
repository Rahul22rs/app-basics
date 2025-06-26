import StatusAndResponse from "./StatusAndResponse";
const apiSimpleInterest = async function (principal: any, rate: any, time: any) {
    const url = `http://127.0.0.1:8000/api/simpleInt`
    const method = "POST"
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    const body = {
        principal: principal,
        rate: rate,
        time: time,
    }

    const response = await fetch(
        url,
        {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
        }
    )

    const r: StatusAndResponse = {
        status: response.status,
        data: await response.json()
    }
    console.log(JSON.stringify(r))
    return r

}

export default apiSimpleInterest;