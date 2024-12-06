# Next.js Project

A modern web application built with Next.js, React 18, and TypeScript, featuring a beautiful UI with Radix UI components.

## 🚀 Features

- Built with Next.js and React 18
- TypeScript for type safety
- Modern UI components using Radix UI
- Command palette functionality with CMDK
- Responsive design
- Dark mode support with next-themes
- Form handling with react-hook-form
- Date picking with react-day-picker
- Charts and data visualization with Recharts
- MongoDB integration
- Beautiful carousels with embla-carousel

## 📦 Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd project
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
MONGODB_URI=your_mongodb_connection_string
# Add other environment variables as needed
```

4. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code linting

## 🏗️ Project Structure

```
project/
├── components/         # React components
│   └── sections/      # Page sections
├── lib/               # Utility functions and configurations
├── models/            # Data models
├── pages/             # Next.js pages
├── public/            # Static assets
└── styles/            # CSS styles
```

## 🔧 Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **UI Components:** 
  - Radix UI
  - CMDK
  - React Day Picker
  - Recharts
- **Styling:** 
  - Tailwind CSS
  - class-variance-authority
  - clsx
- **Form Handling:** react-hook-form
- **Database:** MongoDB
- **Other Tools:**
  - date-fns
  - embla-carousel-react
  - react-resizable-panels

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
