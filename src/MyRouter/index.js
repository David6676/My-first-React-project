import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../components/Layout"
import AddTask from "../pages/AddTask"
import Task from "../pages/Task"

function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Task />} />
                    <Route path="addTask" element={<AddTask />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default MyRouter