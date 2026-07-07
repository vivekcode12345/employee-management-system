import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        
        // Simulate loading for better UX
        setTimeout(() => {
            handleLogin(email, password)
            setEmail("")
            setPassword("")
            setIsLoading(false)
        }, 500)
    }

    return (
        <div className="flex h-screen w-screen overflow-hidden">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-secondary to-accent p-12 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
                </div>
                
                <div className="relative z-10 flex flex-col justify-center text-white max-w-lg">
                    <div className="mb-8">
                        <h1 className="text-5xl font-bold mb-4 animate-fade-in">
                            EMS Portal
                        </h1>
                        <div className="h-1 w-24 bg-white rounded-full mb-6"></div>
                    </div>
                    
                    <p className="text-xl mb-8 leading-relaxed animate-fade-in stagger-1">
                        Streamline your workforce management with our modern Employee Management System. 
                        Track tasks, manage teams, and boost productivity.
                    </p>
                    
                    <div className="space-y-4 animate-fade-in stagger-2">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="text-lg">Task Management & Tracking</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span className="text-lg">Real-time Analytics</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <span className="text-lg">Team Collaboration</span>
                        </div>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-white/20 animate-fade-in stagger-3">
                        <p className="text-sm opacity-80">Trusted by 500+ companies worldwide</p>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-dark relative">
                {/* Mobile Logo */}
                <div className="lg:hidden absolute top-8 left-8">
                    <h1 className="text-3xl font-bold gradient-text">EMS Portal</h1>
                </div>
                
                <div className="w-full max-w-md">
                    <div className="glass-card p-10 animate-scale-in">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-white mb-2">Welcome back</h2>
                            <p className="text-gray-400">Sign in to your account to continue</p>
                        </div>
                        
                        <form onSubmit={submitHandler} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="input-field"
                                    type="email"
                                    placeholder="admin@me.com"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Password
                                </label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="input-field"
                                    type="password"
                                    placeholder="••••••••"
                                />
                            </div>
                            
                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-dark-light text-primary focus:ring-primary/50" />
                                    <span className="ml-2 text-sm text-gray-400">Remember me</span>
                                </label>
                                <a href="#" className="text-sm text-primary hover:text-primary-dark transition-colors">
                                    Forgot password?
                                </a>
                            </div>
                            
                            <button 
                                type="submit"
                                disabled={isLoading}
                                className="btn-primary w-full flex items-center justify-center"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Signing in...
                                    </>
                                ) : (
                                    'Sign In'
                                )}
                            </button>
                        </form>
                        
                        <div className="mt-8 pt-6 border-t border-gray-700">
                            <p className="text-center text-sm text-gray-400">
                                Demo credentials: <span className="text-gray-300">admin@me.com / 123</span>
                            </p>
                        </div>
                    </div>
                    
                    <p className="text-center text-gray-400 text-sm mt-6">
                        © 2026 EMS Portal. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login