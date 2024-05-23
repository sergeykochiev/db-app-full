import { IoMdCheckmark, IoMdClose } from "react-icons/io";

interface AlertProps {
    label: string
    error: boolean
}

export default function Alert(p: AlertProps) {
    const size = 28
    if (!p.label) return <></>
    return (
        <div className={`${p.error ? "text-red-400" : "text-green-400"} flex gap-2 items-center justify-center py-8 font-semibold text-xl`}>
            {p.error ? <IoMdClose size={size}/> : <IoMdCheckmark size={size}/>}
            {p.label}
        </div>
    )
}