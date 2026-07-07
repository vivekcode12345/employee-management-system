import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className="min-h-screen bg-dark p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <Header changeUser={props.changeUser} />
                
                <div className="space-y-6">
                    <div className="animate-fade-in stagger-1">
                        <CreateTask />
                    </div>
                    
                    <div className="animate-fade-in stagger-2">
                        <AllTask />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard