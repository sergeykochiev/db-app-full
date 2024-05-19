import React from 'react'

export default function InputLabel({ children, label }: { children: React.ReactNode, label: string }) {
  return (
    <label className="flex gap-4 items-center justify-stretch">
        {label}
        {children}
    </label>
  )
}
