import { FC, PropsWithChildren, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import PrimaryAppBar from '../header/app-bar'
import Sidebar from '../sidebar/sidebar'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [sidebarHidden, setSidebarHidden] = useState(false)
    return (
        <div>
            <PrimaryAppBar />
            {/* <Header /> */}
            <div
                className='grid'
                style={{
                    gridTemplateColumns: `${sidebarHidden ? '1fr 4fr' : ''}`
                }}
            >
                <main className='p-12'>{children}</main>
            </div>
        </div>
    )
}

export default Layout
