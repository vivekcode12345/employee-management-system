import React from 'react'

const TaskListNumbers = ({data}) => {
    const stats = [
        {
            label: 'New Tasks',
            value: data?.taskCounts?.newTask ?? 0,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            ),
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-500/10',
            borderColor: 'border-blue-500/30',
            textColor: 'text-blue-400'
        },
        {
            label: 'Completed',
            value: data?.taskCounts?.completed ?? 0,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-500/10',
            borderColor: 'border-green-500/30',
            textColor: 'text-green-400'
        },
        {
            label: 'Active',
            value: data?.taskCounts?.active ?? 0,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            color: 'from-yellow-500 to-orange-500',
            bgColor: 'bg-yellow-500/10',
            borderColor: 'border-yellow-500/30',
            textColor: 'text-yellow-400'
        },
        {
            label: 'Failed',
            value: data?.taskCounts?.failed ?? 0,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ),
            color: 'from-red-500 to-pink-500',
            bgColor: 'bg-red-500/10',
            borderColor: 'border-red-500/30',
            textColor: 'text-red-400'
        }
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
                <div 
                    key={index} 
                    className={`glass-card p-6 card-hover animate-fade-in stagger-${index + 1} ${stat.bgColor} ${stat.borderColor}`}
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg`}>
                            {stat.icon}
                        </div>
                    </div>
                    
                    <div>
                        <h2 className={`text-4xl font-bold ${stat.textColor} mb-1`}>
                            {stat.value}
                        </h2>
                        <p className="text-gray-400 text-sm font-medium">
                            {stat.label}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TaskListNumbers