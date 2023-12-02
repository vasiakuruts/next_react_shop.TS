import { FC, PropsWithChildren } from 'react'
import Header from '../header/header'
import Sidebar from '../sidebar/sidebar'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div>
            <Header />
            <div
                className='grid'
                style={{
                    gridTemplateColumns: '1fr 4fr'
                }}
            >
                <Sidebar />
                <main className='p-12'>{children}</main>
            </div>
        </div>
    )
}

export default Layout
