import { useSelector, useDispatch } from "react-redux"
import { deleteTask, check, delectidAll } from "../features/taskSlice"

function Task() {
    const { tasks } = useSelector(s => s.taskData)
    console.log(tasks);

    const dispatch = useDispatch()

    return (
        <>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>True | False</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task, index) => {
                            return (
                                <tr key={index}>
                                    <td><input type="checkbox"
                                        style={{ textDecoration: task.done ? "line-through red" : "none", cursor: "pointer" }}
                                        checked={task.done ? true : false}
                                        onChange={() => {
                                            dispatch(check(task.id))
                                        }} /></td>
                                    <td>{task.id}</td>
                                    <td>{task.name}</td>
                                    <td>{task.description}</td>
                                    <td style={{ color: task.done ? "lightgreen" : "" }}>{task.done.toString()}</td>
                                    <td><button className="btn btn-danger" onClick={() => dispatch(deleteTask(task.id))}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button
            className="btn btn-success"
            onClick={() => {
                dispatch(delectidAll())
            }} 
            >Deleted Selectid</button>
        </>
    )
}

export default Task