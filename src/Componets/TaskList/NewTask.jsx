import React from 'react'

const NewTask = ({ data }) => {
    return (
        <div className="glass-card p-6 card-hover animate-scale-in group">
            <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold rounded-lg">
                    {data.category}
                </span>
                <span className="text-xs text-gray-400 font-medium">{data.taskDate}</span>
            </div>
            
            <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {data.taskTitle}
            </h2>
            
            <p className="text-sm text-gray-400 mb-6 line-clamp-3">
                {data.taskDescription}
            </p>
            
            <div className="mt-6">
                <button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary text-white rounded-lg font-medium py-2.5 px-4 text-sm transition-all duration-200 hover:shadow-lg hover:shadow-primary/50 active:scale-95">
                    Accept Task
                </button>
            </div>
        </div>
    )
}

export default NewTask