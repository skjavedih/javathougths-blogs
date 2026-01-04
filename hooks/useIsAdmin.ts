'use client'

import { useEffect, useState } from 'react'

export function useIsAdmin() {
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        // Check URL param first
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search)
            const adminParam = params.get('admin')

            if (adminParam === 'true') {
                localStorage.setItem('isAdmin', 'true')
                setIsAdmin(true)
                return
            } else if (adminParam === 'false') {
                localStorage.removeItem('isAdmin')
                setIsAdmin(false)
                return
            }
            // If adminParam is not 'true' or 'false', continue to check local storage.
            // The `return` from the snippet was misplaced and would prevent local storage check.
            // Removing the misplaced `return` to ensure correct flow.

            // Check local storage
            const stored = localStorage.getItem('isAdmin')
            if (stored === 'true') {
                setIsAdmin(true)
            }
        }
    }, [])

    return isAdmin
}
