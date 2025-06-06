Autonomous Startup Simulator

A game-like platform where users can run AI-powered virtual startups. Think of it as SimCity but for AI companies!
Login page
![43A9E097-9137-4757-BD7A-5734F8FA9563](https://github.com/user-attachments/assets/de392be6-85b9-4bf9-8c47-30ba1263beba)
Dashboard
![8B148BDF-620B-4B45-8D03-2F4791830D23](https://github.com/user-attachments/assets/e047cea5-874c-4719-91fc-35dd0d1dc087)
Analytics Dashboard
![05A23078-8AA0-4AE4-9DD4-8B4EE2A74FD6](https://github.com/user-attachments/assets/a1572007-8ae0-4f8e-9ae0-b2dc911cd252)
Resources 
![25DB0943-6BB2-4017-B6BB-7C28C48736F6](https://github.com/user-attachments/assets/f20271f7-3aca-4a03-a0ba-a3decb2fce49)
Settings
![F3F4D6E4-2F47-4B99-8320-4AD0D1ED0B65](https://github.com/user-attachments/assets/7bc29139-1bae-4495-a240-d89e7c5bcc8a)



Features

- Create and manage virtual AI startups
- Simulate hiring, development progress, user growth, and revenue
- Compete with other startups in a sandboxed market
- Real-time metrics and visualizations
- Team management and development tracking

Tech Stack

- Frontend: React, Material-UI, Chart.js
- Backend: Node.js, Express
- atabase: MongoDB
- Authentication: JWT

Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/autonomous-startup-simulator.git
cd autonomous-startup-simulator
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd client
npm install
```

4. Create a `.env` file in the root directory:
```
MONGODB_URI=mongodb://localhost:27017/startup-simulator
JWT_SECRET=your-secret-key
PORT=5000
```

 Running the Application

1. Start the backend server:
```bash
npm run dev
```

2. In a new terminal, start the frontend:
```bash
cd client
npm start
```

The application will be available at `http://localhost:3000`

Usage

1. Register a new account or login
2. Create a new startup by providing a name and goal
3. Use the simulation controls to progress your startup
4. Monitor metrics and make strategic decisions
5. Compete with other startups in the market

Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

License

This project is licensed under the MIT License - see the LICENSE file for details. 
