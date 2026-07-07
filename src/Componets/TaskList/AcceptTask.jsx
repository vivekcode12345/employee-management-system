import React from 'react'

const AcceptTask = ({data}) => {
    return (
        <div className="glass-card p-6 card-hover animate-scale-in group">
            <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold rounded-lg">
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
            
            <div className="flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg font-medium py-2 px-4 text-sm transition-all duration-200 hover:shadow-lg hover:shadow-green-500/50 active:scale-95">
                    Mark Complete
                </button>
                <button className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-lg font-medium py-2 px-4 text-sm transition-all duration-200 hover:shadow-lg hover:shadow-red-500/50 active:scale-95">
                    Mark Failed
                </button>
            </div>
        </div>
    )
}

export default AcceptTask