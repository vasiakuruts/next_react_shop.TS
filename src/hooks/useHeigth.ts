import { useEffect, useState } from 'react'

function useHeight() {
    const [height, setHeigth] = useState(0)

    useEffect(() => {
        const screenHeight = window.innerHeight
        setHeigth(screenHeight)
    }, [])

    return height
}

export default useHeight
