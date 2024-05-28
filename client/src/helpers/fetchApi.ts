export default async function fetchApi(method: string, target: string, body?: Record<string, any>): Promise<Response> {
    const res = await fetch("/api/" + target + "/", { method: method, body: body && JSON.stringify(body), headers: {
        "Content-Type": "application/json",
    },})
    return res
}