import { Outlet } from 'react-router-dom'

export default function index() {
    return (
        <div>
            page2
            <Outlet />
        </div>
    )
}
