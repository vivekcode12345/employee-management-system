import React from 'react'

const CompleteTask = ({ data }) => {
    return (
        <div className="glass-card p-6 card-hover animate-scale-in opacity-75">
            <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-lg">
                    {data.category}
                </span>
                <span className="text-xs text-gray-400 font-medium">{data.taskDate}</span>
            </div>
            
            <h2 className="text-xl font-bold text-white mb-3">
                {data.taskTitle}
            </h2>
            
            <p className="text-sm text-gray-400 mb-6 line-clamp-3">
                {data.taskDescription}
            </p>
            
            <div className="mt-6">
                <div className="flex items-center justify-center space-x-2 text-green-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">Completed</span>
                </div>
            </div>
        </div>
    )
}

export default CompleteTask