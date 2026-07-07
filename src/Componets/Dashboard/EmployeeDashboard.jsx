import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
    return (
        <div className="min-h-screen bg-dark p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <Header changeUser={props.changeUser} data={props.data} />
                
                <div className="space-y-6">
                    <div className="animate-fade-in stagger-1">
                        <TaskListNumbers data={props.data} />
                    </div>
                    
                    <div className="animate-fade-in stagger-2">
                        <TaskList data={props.data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDashboard