# AgroTalent 🌾

![AgroTalent Preview](https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200&h=400)


A platform connecting agricultural workers with job opportunities in the field.

## 🌟 Features

- Landing page with responsive design
- WhatsApp integration for instant communication
- Automated response system
- Job posting and application system

## 🏗 Architecture

```mermaid
flowchart TD
    A[Landing Page] --> B[WhatsApp Button]
    B --> C[Twilio API]
    C --> D[Webhook Handler]
    D --> E[Automated Responses]
    E --> F[User WhatsApp]
    
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style C fill:#bbf,stroke:#333,stroke-width:2px
    style F fill:#bfb,stroke:#333,stroke-width:2px
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- Twilio account
- WhatsApp enabled phone number

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/field-jobs-platform.git
cd field-jobs-platform
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
# Create .env file in whatsapp-bot directory
TWILIO_ACCOUNT_SID=your_sid_here
TWILIO_AUTH_TOKEN=your_token_here
TWILIO_WHATSAPP_NUMBER=+14155238886
PORT=3001
```

4. Start the development server
```bash
npm run dev
```

## 📱 WhatsApp Integration

### Flow Diagram

```mermaid
sequenceDiagram
    participant U as User
    participant L as Landing Page
    participant B as Backend
    participant T as Twilio
    participant W as WhatsApp

    U->>L: Clicks WhatsApp button
    L->>B: POST /api/whatsapp/start-chat
    B->>T: Send initial message
    T->>W: Deliver message
    W->>U: Receive welcome message
    U->>W: Send response
    W->>T: Forward message
    T->>B: Webhook notification
    B->>T: Send automated response
    T->>W: Deliver response
    W->>U: Receive automated response
```

### Features

- Instant connection through WhatsApp
- Automated response system
- Menu-driven interaction
- Real-time message handling

### Response Menu

1. **Initial Contact**
   - Welcome message
   - Main menu options

2. **Menu Options**
   - View job opportunities
   - Post a job
   - Speak with an advisor

3. **Automated Responses**
   - Customized responses based on user selection
   - Option to connect with human advisor

## 🛠 Technical Stack

- **Frontend**:
  - React
  - TypeScript
  - Tailwind CSS
  - Vite

- **Backend**:
  - Node.js
  - Express
  - TypeScript
  - Twilio SDK

## 📦 Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── WhatsAppButton.tsx
│   │   ├── CTASection.tsx
│   │   └── ...
│   └── ...
├── whatsapp-bot/
│   ├── src/
│   │   ├── config/
│   │   │   └── twilio.ts
│   │   ├── controllers/
│   │   │   └── whatsappController.ts
│   │   ├── routes/
│   │   │   └── whatsappRoutes.ts
│   │   └── app.ts
│   ├── .env
│   └── package.json
└── package.json
```

## 🔧 Configuration

### Twilio Setup

1. Create a Twilio account
2. Enable WhatsApp Sandbox
3. Configure webhook URL
4. Set up environment variables

### Webhook Configuration

Configure your Twilio webhook URL:
- URL: `https://your-domain.com/api/whatsapp/webhook`
- Method: POST
- Content Type: application/json

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, contact us through our WhatsApp channel or create an issue in the repository.