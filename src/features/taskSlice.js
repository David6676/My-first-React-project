import { createSlice } from "@reduxjs/toolkit"

const taskState = {
    tasks: [
        { "id": 1, "name": "Google", "description": "Quality Engineer", "done": false },
        { "id": 2, "name": "Avaveo", "description": "Quality Engineer", "done": false },
        { "id": 3, "name": "Instagram", "description": "Nurse", "done": false },
        { "id": 4, "name": "Amazon", "description": "Dental Hygienist", "done": false },
        { "id": 5, "name": "Wikibox", "description": "Actuary", "done": false }
    ]
}

const tasksSlice = createSlice({
    initialState: taskState,
    name: "task",
    reducers: {
        deleteTask(state, action) {
            state.tasks = state.tasks.filter(el => el.id != action.payload)
        },
        addTask(state, action) {
            state.tasks.push(action.payload)
        },
        check(state, action) {
            state.tasks = state.tasks.map(el => {
                if (el.id == action.payload) {
                    el.done = !el.done
                }
                return el
            })
        },
        delectidAll(state, action){
            state.tasks = state.tasks.filter(el => !el.done)
        }
    }
})

console.log(tasksSlice)
export const { deleteTask, addTask, check, delectidAll } = tasksSlice.actions
export default tasksSlice.reducer