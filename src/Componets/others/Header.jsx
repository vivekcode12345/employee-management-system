import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
    const username = props.data?.firstName || 'Admin'

    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        props.changeUser('')
    }

    return (
        <div className="glass-card p-6 mb-6 animate-fade-in">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Welcome back,</p>
                        <h1 className="text-2xl font-bold text-white">
                            {username} <span className="inline-block animate-wave">👋</span>
                        </h1>
                    </div>
                </div>
                
                <button 
                    onClick={logOutUser} 
                    className="group relative px-6 py-3 bg-dark-light border border-gray-600 text-gray-200 rounded-xl font-semibold
                             hover:bg-danger hover:border-danger hover:text-white
                             active:scale-95 transition-all duration-200"
                >
                    <span className="flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span>Log Out</span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Header