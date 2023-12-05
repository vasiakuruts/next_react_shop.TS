import { FC } from 'react'
import Heading from '../heading/heading'

const Sidebar: FC<{ isHidden: boolean }> = ({ isHidden }) => {
    return (
        <aside
            className=' h-screen bg-secondary'
            style={{ display: `${isHidden ? 'block' : 'none'}` }}
        >
            <Heading className=' w-full text-center pb-6'>SIDEBAR</Heading>
        </aside>
    )
}

export default Sidebar
