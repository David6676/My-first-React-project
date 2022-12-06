import { Link, Outlet } from "react-router-dom"

function Layout() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Task</Link></li>
                        <li><Link to="/addTask">Add Task</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}
export default Layout