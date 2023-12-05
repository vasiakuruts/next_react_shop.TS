import Burger from '@/assets/image/burger'
import Closer from '@/assets/image/closer'
import { FC, PropsWithChildren, useState } from 'react'
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [sidebarHidden, setSidebarHidden] = useState(false)
    return (
        <div>
            <Header />
            <div
                className='grid'
                style={{
                    gridTemplateColumns: `${sidebarHidden ? '1fr 4fr' : ''}`
                }}
            >
                <Sidebar isHidden={sidebarHidden} />
                <image
                    className=' cursor-pointer absolute text-primary h-2 w-2'
                    onClick={() => setSidebarHidden(!sidebarHidden)}
                >
                    {sidebarHidden ? <Closer size={2} /> : <Burger size={2} />}
                </image>
                <main className='p-12'>{children}</main>
            </div>
        </div>
    )
}

export default Layout
