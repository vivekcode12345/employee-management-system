import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const newTaskData = { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false }

        const updatedData = userData.map(elem => {
            if (asignTo === elem.firstName) {
                return {
                    ...elem,
                    tasks: [...elem.tasks, newTaskData],
                    taskCounts: {
                        ...elem.taskCounts,
                        newTask: elem.taskCounts.newTask + 1
                    }
                }
            }
            return elem
        })
        
        setUserData(updatedData)

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')

    }

    return (
        <div className="glass-card p-6 md:p-8 animate-fade-in">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Create New Task</h2>
                <p className="text-gray-400 text-sm">Assign tasks to your team members</p>
            </div>
            
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className="space-y-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">
                            Task Title
                        </label>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className="input-field"
                            type="text"
                            placeholder="Make a UI design"
                            required
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">
                            Due Date
                        </label>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className="input-field"
                            type="date"
                            required
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">
                            Assign To
                        </label>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            className="input-field"
                            type="text"
                            placeholder="Employee name"
                            required
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">
                            Category
                        </label>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className="input-field"
                            type="text"
                            placeholder="Design, Development, etc."
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                        Description
                    </label>
                    <textarea 
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }} 
                        className="input-field min-h-[120px] resize-none" 
                        placeholder="Enter task description..."
                        required
                    ></textarea>
                </div>

                <div className="flex justify-end">
                    <button type="submit" className="btn-primary flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span>Create Task</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask