import useIsMobile from '@/hooks/useIsMobile'
import { Box, Container } from '@mui/material'
import { FC, PropsWithChildren, useState } from 'react'
import PrimaryAppBar from '../header/app-bar'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [sidebarHidden, setSidebarHidden] = useState(false)
    const isMobile = useIsMobile()
    return (
        <Container
            sx={{
                padding: 0
            }}
            disableGutters
        >
            <PrimaryAppBar />
            {/* <Header /> */}
            <Box
                style={{
                    gridTemplateColumns: sidebarHidden ? '1fr 4fr' : '',
                    display: isMobile ? 'block' : 'grid',
                    padding: isMobile ? '0px' : '48px',
                    overflowY: 'hidden'
                }}
            >
                {children}
            </Box>
        </Container>
    )
}

export default Layout
