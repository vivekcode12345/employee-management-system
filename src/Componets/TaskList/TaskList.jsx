import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    if (!data?.tasks || data.tasks.length === 0) {
        return (
            <div className="glass-card p-12 text-center animate-fade-in">
                <svg className="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">No tasks yet</h3>
                <p className="text-gray-500">Tasks will appear here when assigned</p>
            </div>
        )
    }

    return (
        <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-white mb-6">Task Board</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                {data.tasks.map((elem, idx) => {
                    if (elem.active) {
                        return <AcceptTask key={idx} data={elem} />
                    }
                    if (elem.newTask) {
                        return <NewTask key={idx} data={elem} />
                    }
                    if (elem.completed) {
                        return <CompleteTask key={idx} data={elem} />
                    }
                    if (elem.failed) {
                        return <FailedTask key={idx} data={elem} />
                    }
                    return null
                })}
            </div>
        </div>
    )
}

export default TaskList