export default function checkIfInstanceOf<T>(value: any, fieldNames: string[]): value is T {
    let is: boolean = true
    fieldNames.forEach(fn => {
        if (!(fn in value)) is = false
    })
    return is
}