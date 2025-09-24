# AI Onboarding Agent - Winvesta Assignment

A conversational AI agent for streamlining customer onboarding in banking/fintech.

##  Quick Start
\`\`\`bash
# Clone and install
git clone https://github.com/ShyamalThakur/winvesta-ai-onboarding-agent
cd winvesta-ai-onboarding-agent
npm install

# Set up environment
cp .env.example .env
# Add your OpenAI API key and other secrets

# Run locally
npm run dev
\`\`\`

##  Testing
\`\`\`bash
npm test              # Unit tests
npm run test:integration  # Integration tests
npm run test:e2e      # End-to-end tests
\`\`\`

##  Features Implemented
- [x] Natural language entity type detection
- [x] Business classification workflow
- [x] Dynamic document requirements generation
- [x] Human escalation logic
- [x] Secure data handling
- [x] Real-time conversation interface

##  Tech Stack
- **Backend**: Node.js, TypeScript, Express
- **AI**: OpenAI GPT-4, Langchain
- **Database**: PostgreSQL, Redis
- **Frontend**: Next.js, React, Tailwind CSS
- **Testing**: Jest, Supertest
- **Deployment**: Docker, GitHub Actions

##  Documentation
- [API Documentation](./docs/api-documentation.md)
- [Conversation Flow Examples](./docs/conversation-examples.md)
- [Deployment Guide](./docs/deployment-guide.md)

##  Assignment Context
This was built as part of the Winvesta AI Fullstack Developer Internship assignment.
The goal was to create an AI-powered onboarding agent that can:
1. Identify customer entity types
2. Collect business information
3. Generate document requirements
4. Handle edge cases gracefully

##  Problem Solving Solutions
The assignment also included problem-solving challenges:
- **Logic Puzzle**: Box labeling solution in `/docs/problem-solutions.md`
- **Algorithm**: Unique number finder using XOR
- **UX Design**: Company size input improvements

