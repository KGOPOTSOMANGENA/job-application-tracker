📌 Job Application Tracker
📖 Project Overview

The Job Application Tracker is a web-based application that helps users manage, track, and organize their job applications efficiently. The system allows users to record job details, monitor application progress, and sort or filter applications based on different criteria.

This project simulates a real-world job tracking system and applies modern frontend development practices using React, TypeScript, and JSON Server.

🎯 Key Features

User registration and login

Protected routes (authenticated users only)

Add, update, and delete job applications

Track application status:

Applied

Interviewed

Rejected

Sorting functionality:

Sort by application status (Applied / Rejected)

Sort alphabetically (A–Z)

URL query support for filtering and sorting

Responsive and clean UI

Centralized state management using React Context

Mock backend using JSON Server (JavaScript database)

🛠️ Tech Stack

Frontend: React, TypeScript

Styling: CSS

Routing: React Router DOM

State Management: React Context API

Custom Hooks: Reusable logic abstraction

Backend (Mock API): JSON Server

Build Tool: Vite

Deployment: GitHub Pages

Version Control: Git & GitHub

📂 Project Structure
src/
 ┣ assets/        # Images and static assets
 ┣ components/    # Reusable UI components
 ┣ context/       # Global state management (Context API)
 ┣ hooks/         # Custom React hooks
 ┣ pages/         # Application pages (Landing, Dashboard, Login, Register)
 ┣ routes/        # Protected and public routes
 ┣ services/      # API and data handling logic
 ┣ styles/        # Global and page-specific styles
 ┣ types/         # TypeScript type definitions
 ┣ utils/         # Utility functions
 ┣ App.tsx
 ┣ main.tsx
 ┗ index.css

🔐 Protected Routing

The application uses protected routes to ensure that only authenticated users can access sensitive pages such as the dashboard. Unauthenticated users are redirected to the login page.

🔄 Sorting & Filtering

Users can:

Sort job applications by status (Applied, Rejected)

Sort applications alphabetically (A–Z)

Use URL query parameters to maintain sorting and filtering state

This allows bookmarking and sharing of filtered dashboard views.

/***⚙️ Installation & Setup*\
1️⃣ Clone the repository
git clone (https://github.com/KGOPOTSOMANGENA/job-application-tracker.git)
cd job-application-tracker

2️⃣ Install dependencies
npm install

3️⃣ Start JSON Server (Port 5000)
npx json-server --watch db.json --port 5000

4️⃣ Run the application
npm run dev


The application will be available at:

http://localhost:5173

🧪 Sample API Endpoints
GET    /jobs
POST   /jobs
PUT    /jobs/:id
DELETE /jobs/:id

📱 Responsiveness

The UI is fully responsive and adapts seamlessly across:

Desktop screens

Tablets

Mobile devices

🚀 Future Enhancements

Role-based authentication

Advanced search and filters

Job analytics and insights

Notifications and reminders

Integration with a real backend API

👨‍💻 Author

Kgopotso Mangena
Informatics Graduate
Aspiring Software Developer & Business Analyst