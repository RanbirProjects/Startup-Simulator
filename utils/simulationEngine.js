class SimulationEngine {
    constructor(startup) {
        this.startup = startup;
        this.timeStep = 0;
    }

    // Simulate one time step of the startup
    async simulateStep() {
        this.timeStep++;
        
        // Update development progress
        this.updateDevelopment();
        
        // Update team productivity
        this.updateTeamProductivity();
        
        // Update market metrics
        this.updateMarketMetrics();
        
        // Generate random events
        this.generateEvents();
        
        return this.startup;
    }

    updateDevelopment() {
        const teamProductivity = this.calculateTeamProductivity();
        const progressIncrement = (teamProductivity * 0.1) + (Math.random() * 0.05);
        
        this.startup.development.progress = Math.min(
            100,
            this.startup.development.progress + progressIncrement
        );

        // Update feature completion
        this.startup.development.features.forEach(feature => {
            if (feature.status !== 'completed') {
                feature.completion += progressIncrement;
                if (feature.completion >= 100) {
                    feature.status = 'completed';
                }
            }
        });
    }

    updateTeamProductivity() {
        this.startup.team.forEach(member => {
            const baseProductivity = 0.7;
            const randomFactor = Math.random() * 0.3;
            const experienceBonus = this.timeStep * 0.01;
            
            member.productivity = Math.min(
                1,
                baseProductivity + randomFactor + experienceBonus
            );
        });
    }

    updateMarketMetrics() {
        // Update user growth
        const userGrowthRate = this.calculateUserGrowthRate();
        this.startup.metrics.users += userGrowthRate;

        // Update revenue
        const revenuePerUser = 0.5;
        this.startup.metrics.revenue = this.startup.metrics.users * revenuePerUser;

        // Update market share
        this.startup.market.marketShare = this.calculateMarketShare();
    }

    calculateTeamProductivity() {
        return this.startup.team.reduce((total, member) => total + member.productivity, 0) / 
               Math.max(1, this.startup.team.length);
    }

    calculateUserGrowthRate() {
        const baseGrowth = 10;
        const productQuality = this.startup.development.progress / 100;
        const marketFactor = 1 + (this.startup.market.marketShare / 100);
        
        return Math.floor(baseGrowth * productQuality * marketFactor * (1 + Math.random() * 0.5));
    }

    calculateMarketShare() {
        const totalCompetitors = this.startup.market.competitors.length;
        const baseShare = 100 / (totalCompetitors + 1);
        const qualityBonus = this.startup.development.progress / 100;
        
        return Math.min(100, baseShare * (1 + qualityBonus));
    }

    generateEvents() {
        // Random events that can affect the startup
        const events = [
            {
                type: 'funding',
                probability: 0.1,
                effect: () => {
                    const funding = Math.floor(Math.random() * 1000000);
                    this.startup.metrics.funding += funding;
                    return `Received $${funding} in funding!`;
                }
            },
            {
                type: 'competitor',
                probability: 0.15,
                effect: () => {
                    const competitor = {
                        name: `Competitor ${this.startup.market.competitors.length + 1}`,
                        strength: Math.random()
                    };
                    this.startup.market.competitors.push(competitor);
                    return `New competitor entered the market!`;
                }
            }
        ];

        events.forEach(event => {
            if (Math.random() < event.probability) {
                event.effect();
            }
        });
    }
}

module.exports = SimulationEngine; 