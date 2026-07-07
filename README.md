# EMS Portal - Employee Management System

A modern, full-featured Employee Management System built with React and Tailwind CSS. EMS Portal streamlines workforce management by enabling administrators to create, assign, and track tasks while providing employees with a clean interface to manage their work.

![React](https://img.shields.io/badge/React-19.2.6-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0.12-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.0-38B2AC?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?logo=typescript)

## Features

### Admin Features
- **Task Creation**: Create and assign tasks to team members with title, description, due date, and category
- **Task Overview**: View all tasks across the organization in a centralized dashboard
- **Team Management**: Assign tasks to specific employees by name
- **Real-time Analytics**: Monitor task distribution and completion status

### Employee Features
- **Personal Dashboard**: View assigned tasks in an organized interface
- **Task Status Tracking**: Monitor new, active, completed, and failed tasks
- **Task Management**: Accept, complete, or mark tasks as failed
- **Progress Overview**: Visual statistics of task completion

### General Features
- **Role-based Access**: Separate interfaces for Admin and Employee roles
- **Responsive Design**: Fully responsive UI that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Glass-morphism design with smooth animations and transitions
- **Local Storage**: Persistent data storage using browser localStorage
- **Secure Authentication**: Simple and secure login system

## Tech Stack

- **Frontend Framework**: React 19.2.6
- **Build Tool**: Vite 8.0.12
- **Styling**: Tailwind CSS 4.3.0
- **Language**: JavaScript (ES6+)
- **Linting**: ESLint with React plugins
- **Icons**: Inline SVG icons

## Project Structure

```
EMS/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── Componets/
│   │   ├── Auth/
│   │   │   └── Login.jsx                 # Authentication component
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx        # Admin dashboard layout
│   │   │   └── EmployeeDashboard.jsx     # Employee dashboard layout
│   │   ├── others/
│   │   │   ├── AllTask.jsx               # View all tasks (Admin)
│   │   │   ├── CreateTask.jsx            # Create new task form
│   │   │   ├── Header.jsx                # Navigation header
│   │   │   └── TaskListNumbers.jsx        # Task statistics display
│   │   └── TaskList/
│   │       ├── AcceptTask.jsx            # Accept task component
│   │       ├── CompleteTask.jsx          # Complete task component
│   │       ├── FailedTask.jsx            # Failed task component
│   │       ├── NewTask.jsx               # New task component
│   │       └── TaskList.jsx              # Task list container
│   ├── context/
│   │   └── AuthProvider.jsx              # Authentication context provider
│   ├── utils/
│   │   └── localStorage.jsx              # Local storage utilities
│   ├── App.jsx                           # Main application component
│   ├── App.css                           # Application styles
│   ├── index.css                         # Global styles
│   └── main.jsx                          # Application entry point
├── index.html
├── package.json
├── vite.config.ts
├── eslint.config.js
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vivekcode12345/employee-management-system.git
cd EMS
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Demo Credentials

### Admin Account
- **Email**: admin@me.com
- **Password**: 123

### Employee Accounts
Employee accounts can be created and managed through the application's data structure.

## Usage Guide

### For Administrators

1. **Login** with admin credentials
2. **Create Tasks**: Use the "Create New Task" form to assign work to employees
   - Enter task title and description
   - Set due date
   - Assign to employee by name
   - Select category (Design, Development, etc.)
3. **Monitor Tasks**: View all tasks in the "All Tasks" section
4. **Track Progress**: Monitor task status across the team

### For Employees

1. **Login** with employee credentials
2. **View Tasks**: See all assigned tasks in your personal dashboard
3. **Manage Tasks**:
   - Accept new tasks
   - Mark tasks as completed
   - Mark tasks as failed if necessary
4. **Track Statistics**: View task counts and completion rates

## Key Components

### Authentication System
- Role-based login (Admin/Employee)
- Persistent sessions using localStorage
- Automatic session restoration on page reload

### Task Management
- Create, read, update, and delete operations
- Task status tracking (New, Active, Completed, Failed)
- Category-based organization
- Due date management

### Dashboard
- Admin Dashboard: Task creation and overview
- Employee Dashboard: Personal task management
- Responsive header with user information
- Real-time task statistics

## Design Features

- **Glass-morphism UI**: Modern glass-like card designs with backdrop blur
- **Gradient Backgrounds**: Beautiful gradient color schemes
- **Smooth Animations**: Fade-in, scale-in, and pulse animations
- **Responsive Layout**: Mobile-first design approach
- **Dark Theme**: Professional dark color palette
- **Interactive Elements**: Hover effects and transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements

- [ ] Backend API integration
- [ ] Database persistence (replace localStorage)
- [ ] User registration and management
- [ ] Email notifications
- [ ] Task comments and attachments
- [ ] Team collaboration features
- [ ] Advanced analytics and reporting
- [ ] Export functionality (PDF, Excel)
- [ ] Dark/Light theme toggle
- [ ] Multi-language support

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Vivek Verma - [@vivekcode12345](https://github.com/vivekcode12345)

Project Link: [https://github.com/vivekcode12345/employee-management-system](https://github.com/vivekcode12345/employee-management-system)

## Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [Vite](https://vitejs.dev/)

---

**Note**: This is a frontend demonstration project. In a production environment, implement proper backend authentication, database storage, and security measures.