import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
   const [userData,setUserData] =  useContext(AuthContext)

   if (!userData || userData.length === 0) {
       return (
           <div className="glass-card p-12 text-center animate-fade-in">
               <svg className="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
               </svg>
               <h3 className="text-xl font-semibold text-gray-300 mb-2">No employees found</h3>
               <p className="text-gray-500">Employee data will appear here</p>
           </div>
       )
   }
   
   return (
       <div className="glass-card p-6 md:p-8 animate-fade-in">
           <div className="mb-6">
               <h2 className="text-2xl font-bold text-white mb-2">Employee Overview</h2>
               <p className="text-gray-400 text-sm">Track task distribution across your team</p>
           </div>
           
           <div className="overflow-x-auto">
               <table className="w-full">
                   <thead>
                       <tr className="border-b border-gray-700">
                           <th className="text-left py-4 px-4 text-sm font-semibold text-gray-300">Employee Name</th>
                           <th className="text-center py-4 px-4 text-sm font-semibold text-gray-300">New Task</th>
                           <th className="text-center py-4 px-4 text-sm font-semibold text-gray-300">Active Task</th>
                           <th className="text-center py-4 px-4 text-sm font-semibold text-gray-300">Completed</th>
                           <th className="text-center py-4 px-4 text-sm font-semibold text-gray-300">Failed</th>
                       </tr>
                   </thead>
                   <tbody>
                       {userData.map(function(elem, idx) {
                           return (
                               <tr key={idx} className="border-b border-gray-800 hover:bg-dark-lighter/50 transition-colors">
                                   <td className="py-4 px-4">
                                       <div className="flex items-center space-x-3">
                                           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                                               {elem.firstName?.charAt(0) || 'E'}
                                           </div>
                                           <span className="text-white font-medium">{elem.firstName}</span>
                                       </div>
                                   </td>
                                   <td className="text-center py-4 px-4">
                                       <span className="inline-flex items-center justify-center w-12 h-8 rounded-lg bg-blue-500/20 text-blue-400 font-semibold text-sm">
                                           {elem.taskCounts?.newTask ?? 0}
                                       </span>
                                   </td>
                                   <td className="text-center py-4 px-4">
                                       <span className="inline-flex items-center justify-center w-12 h-8 rounded-lg bg-yellow-500/20 text-yellow-400 font-semibold text-sm">
                                           {elem.taskCounts?.active ?? 0}
                                       </span>
                                   </td>
                                   <td className="text-center py-4 px-4">
                                       <span className="inline-flex items-center justify-center w-12 h-8 rounded-lg bg-green-500/20 text-green-400 font-semibold text-sm">
                                           {elem.taskCounts?.completed ?? 0}
                                       </span>
                                   </td>
                                   <td className="text-center py-4 px-4">
                                       <span className="inline-flex items-center justify-center w-12 h-8 rounded-lg bg-red-500/20 text-red-400 font-semibold text-sm">
                                           {elem.taskCounts?.failed ?? 0}
                                       </span>
                                   </td>
                               </tr>
                           )
                       })}
                   </tbody>
               </table>
           </div>
       </div>
   )
}

export default AllTask