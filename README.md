# Autonomous Startup Simulator

A game-like platform where users can run AI-powered virtual startups. Think of it as SimCity but for AI companies!

## Features

- Create and manage virtual AI startups
- Simulate hiring, development progress, user growth, and revenue
- Compete with other startups in a sandboxed market
- Real-time metrics and visualizations
- Team management and development tracking

## Tech Stack

- **Frontend**: React, Material-UI, Chart.js
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

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

## Running the Application

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

## Usage

1. Register a new account or login
2. Create a new startup by providing a name and goal
3. Use the simulation controls to progress your startup
4. Monitor metrics and make strategic decisions
5. Compete with other startups in the market

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 