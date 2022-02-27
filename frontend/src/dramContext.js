import { createContext, useEffect, useState } from 'react'

export const DramContext = createContext()

export const DramProvider = props => {
    const [drams, setDrams] = useState([])

    const getDrams = async () => {
        const res = await fetch('http://localhost:5001/api/drams/allDrams')
        const data = await res.json()
        setDrams(data)
    }
    useEffect(() => {
        getDrams()
    }, [])

    return (
        <DramContext.Provider value={drams}>
            {props.children}
        </DramContext.Provider>
    )
}
