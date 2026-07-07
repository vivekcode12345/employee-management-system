import React from 'react'

const FailedTask = ({ data }) => {
    return (
        <div className="glass-card p-6 card-hover animate-scale-in opacity-75">
            <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-semibold rounded-lg">
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
                <div className="flex items-center justify-center space-x-2 text-red-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-sm font-medium">Failed</span>
                </div>
            </div>
        </div>
    )
}

export default FailedTask