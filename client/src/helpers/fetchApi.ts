export default async function fetchApi(method: string, target: string, body?: Record<string, any>): Promise<Record<any, any> | { results: Record<string, any>[] }> {
    const data = await fetch("/api/" + target + "/", { method: method, body: body && JSON.stringify(body), headers: {
        "Content-Type": "application/json",
    },})
    return await data.json()
}