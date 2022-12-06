import { useSelector, useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { addTask } from "../features/taskSlice"


function AddTask() {
    const { tasks } = useSelector(s => s.taskData)
    console.log(tasks);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const add = (data) => {
        data.id = tasks.length + 1
        data.done = false
        dispatch(addTask(data))
        reset()
        navigate("/")
    }

    return (
        <form onSubmit={handleSubmit(add)}>
            <div>
                <input type="text"
                    placeholder="Name"
                    {...register("name", { required: true })} />
                {errors.name && <p style={{ color: "red" }}>Name is required.</p>}
            </div><br />
            <div>
                <input type="text"
                    placeholder="Description"
                    {...register("description", { required: true })} />
                {errors.description && <p style={{ color: "red" }}>Description is required.</p>}
            </div><br />
            <button className="btn btn-warning">Add Task</button>
        </form>
    )
}
export default AddTask