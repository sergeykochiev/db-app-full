interface VariantInputProps {
    label: string
    defaultTrue: boolean
    name: string
}

function Variant(p: { defaultTrue: boolean, value: number, name: string, label: string }) {
    return <label className='transition-all outline outline-transparent outline-2 -outline-offset-2 hover:outline-fav font-bold text-slate-500 has-[input:checked]:text-slate-200 cursor-pointer flex gap-4 items-center justify-center p-1 pr-8 pl-8 rounded-xl has-[input:checked]:bg-fav'>
        {p.label}
        <input type='radio' className='hidden' value={1} defaultChecked={p.defaultTrue} name={p.name}/>
    </label>
}

export default function VariantInput(p: VariantInputProps) {
  return (
    <div className='transition-all flex justify-stretch items-center gap-1 p-1 bg-white rounded-xl'>
        <div className='p-1 px-4 flex-1 text-slate-500'>{p.label}</div>
        <Variant defaultTrue={p.defaultTrue} value={1} name={p.name} label={"Да"}/>
        <Variant defaultTrue={!p.defaultTrue} value={0} name={p.name} label={"Нет"}/>
    </div>
  )
}
