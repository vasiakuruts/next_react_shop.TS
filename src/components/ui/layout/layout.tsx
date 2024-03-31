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
                <Sidebar isHidden={sidebarHidden} />
                <button
                    className=' cursor-pointer absolute text-primary h-2 w-2'
                    onClick={() => setSidebarHidden(!sidebarHidden)}
                >
                    {sidebarHidden ? (
                        <IoMdClose size={'40px'} />
                    ) : (
                        <GiHamburgerMenu size={'40px'} />
                    )}
                </button>
                <main className='p-12'>{children}</main>
            </div>
        </div>
    )
}

export default Layout
