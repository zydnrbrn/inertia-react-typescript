import React from 'react'
import { Toaster } from './components/ui/toaster'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Toaster />
            {children}
        </>
    )
}
