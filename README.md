🔬 ChemEquip Visualizer

ChemEquip Visualizer is a web dashboard for visualizing, analyzing, and reporting chemical equipment data from CSV files.
It combines interactive charts, AI-powered insights, and PDF reports in a fast, responsive app.

Great for engineers, students, and anyone who wants quick insights from equipment data.

🌟 Features

📈 Interactive Data Visuals
Charts for flowrate, pressure, temperature, and equipment types

🤖 AI-Powered Insights
Uses Google Gemini to generate operational feedback and recommendations

📊 Quick Analytics
Summary stats, trends, and equipment breakdowns

📁 CSV Upload
Upload equipment datasets and parse them instantly

📄 PDF Reports
Export your analysis as a clean PDF

📚 Session History
Save and reload past analysis sessions

🔐 Login System
Simple authentication flow (demo-ready)

📱 Responsive UI
Works smoothly on desktop and mobile

🛠️ Tech Stack

Frontend: React 19, TypeScript, Vite

Styling & UI: Tailwind CSS, Recharts, Lucide React

AI: Google Gemini API

Build Tool: Vite

🚀 Getting Started
What you’ll need

Node.js 18 or newer

A Gemini API key from Google AI Studio

Setup

Clone the repository and install dependencies:

```sh
git clone https://github.com/Krishna02213/ChemEquip.git
cd ChemEquip
npm install
```

Create a `.env.local` file in the project root and add your Gemini API key:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
```

Start the development server and open the local URL shown in the terminal:

```sh
npm run dev
```

📁 Project Structure

components – Dashboard, layout, login, and history views

services – CSV parsing and Gemini AI logic

types – Shared TypeScript definitions

App.tsx – Main application entry

📊 CSV Data Format

Your CSV file should include these columns:

Equipment Name

Type

Flowrate

Pressure

Temperature

Each row represents a single piece of equipment with its operating parameters.

🧪 How to Use

Login using the default demo credentials (Admin / password)

Upload a CSV file or use sample data

Explore the dashboard with charts and AI insights

Export a PDF report if needed

Revisit past sessions from the history view

🤖 AI Insights

Powered by Gemini 1.5 Flash, the app can:

Flag operational risk levels

Highlight performance issues

Suggest maintenance actions

Offer optimization ideas

🐛 Troubleshooting

AI insights not showing?

Make sure your Gemini API key is set correctly

Restart the development server

Check the browser console for errors

CSV upload failing?

Verify column names and formatting

Ensure numeric values are valid

Charts not rendering correctly?

Refresh the page

Clear browser cache

📝 Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally

🔒 Security Notes

Don’t commit your environment files

Session history uses local storage (fine for demos, not production)

Use proper authentication and HTTPS for real deployments

🌐 Browser Support

Chrome

Firefox

Safari

Edge

(Recent versions recommended)

📄 License

MIT License — free to use, modify, and share.

🤝 Contributing

Contributions are welcome:

Fork the repo

Make your changes

Open a pull request

📧 Support

Questions or ideas?
Open an issue on GitHub.

Happy analyzing! 🧪📈
