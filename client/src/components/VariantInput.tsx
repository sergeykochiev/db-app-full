import Checkbox from './Checkbox'

interface VariantInputProps {
    label: string
    defaultTrue: boolean
    name: string
}

export default function VariantInput(p: VariantInputProps) {
  return (
    <div className='flex justify-between items-center'>
        {p.label}
        <div className='flex gap-8 items-center'>
            <label className='flex gap-4 items-center'>
                Да
                <Checkbox type='radio' value={1} defaultChecked={p.defaultTrue} name={p.name}/>
            </label>
            <label className='flex gap-4 items-center'>
                Нет
                <Checkbox type='radio' value={0} defaultChecked={!p.defaultTrue} name={p.name}/>
            </label>
        </div>
    </div>
  )
}
