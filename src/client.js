export const BASE_URL = 'http://localhost:5000';
const JSON_MIME_TYPE_HEADERS = { 'Content-Type': 'application/json'}

export async function hueyFetch(url, method, body ) {
    if (method === undefined) {
        method = 'GET';
    }
    const response = await fetch(url, {
        headers:JSON_MIME_TYPE_HEADERS,
        method:method,
        body:JSON.stringify(body)
    });
    return await response.json();
}