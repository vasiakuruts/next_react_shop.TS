import { useEffect, useState } from 'react'

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const screenWidth = window.innerWidth
        setIsMobile(screenWidth <= 768) // Перевірка, чи ширина екрану менше або дорівнює 768px
    }, [])

    return isMobile
}

export default useIsMobile
