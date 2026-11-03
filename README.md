# Matta Sujith Singh — Software Developer Portfolio

A bespoke, production-grade developer portfolio for **Matta Sujith Singh** (B.Tech Computer Science & Engineering @ BVRIT, 8.6 CGPA, Class of 2027, SIH 2024 Level 2 Qualifier).

Designed around an original **Architectural Matte Graphite & Warm Ochre** visual language—prioritizing content hierarchy, editorial typography, natural portrait proportions, silky-smooth document scrolling, and verified engineering case studies over derivative template trends.

---

## 🎨 Visual System & Design Architecture

* **Canvas / Foundation**: Matte Deep Obsidian (`#0C0E12`)
* **Component Surface**: Structural Graphite (`#13161F`)
* **Hairline Borders**: Architectural Slate (`#202534`), hover `#384055`
* **Primary Accent**: Warm Industrial Ochre / Amber (`#F59E0B`)
* **Telemetry & Signal Accent**: Emerald Green (`#10B981`)
* **Typography Scale**: High-luminance white (`#F3F4F6`, `#FFFFFF`) for headlines; muted slate (`#949EAE`) for editorial copy; JetBrains Mono for metrics and schemas.
* **Layout Grid**: Strict 12-column grid bound to `max-w-6xl` with consistent vertical flow (`space-y-24 sm:space-y-32`).

---

## 🛠️ Technology Stack

* **UI Framework**: React 18
* **Build Tool**: Vite 8 (`@vitejs/plugin-react`)
* **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
* **Transitions**: Snappy Framer Motion springs and CSS transitions
* **Icons**: Lucide React + custom SVGs
* **Fonts**: Plus Jakarta Sans, Inter, JetBrains Mono

---

## 📂 Key Sections & Implementations

1. **Editorial Hero & Portrait Showcase**:
   - Concise, authentic identity as a Computer Science undergraduate at BVRIT.
   - Natural 3:4 aspect ratio portrait (`sujith_avatar.jpg`) with zero face-cropping and zero dark overlays.
   - Includes interactive **[Formal / Casual]** photo switcher allowing recruiters to view the crisp formal white shirt portrait (default) or the relaxed brown casual portrait (`sujith_avatar_casual.jpg`).
   - Quick action triggers: Direct PDF resume download, projects jump anchor, verified GitHub, LinkedIn, LeetCode links.

2. **Verified Academic & Hackathon Metrics**:
   - **8.6 / 10 CGPA** (B.Tech CSE @ BVRIT Autonomous)
   - **SIH Level 2** (Smart India Hackathon 2024 National Qualifier)
   - **6 Live APIs** (Orchestrated in WanderAI)
   - **Agentforce Specialist** (Salesforce Certified #7198308)

3. **Engineering Foundations (Profile)**:
   - Detailed academic narrative (98.0% Intermediate, TS EAMCET Rank 13,182).
   - 3 Architectural pillars: Full-Stack System Architecture, Real-Time Computer Vision, Disciplined API Orchestration.

4. **Featured Engineering Projects & Case Studies**:
   - **WanderAI / Smart Tourist Guide & Budget Planner**: Multi-service MERN application orchestrating Amadeus, OpenWeather, Foursquare, Visual Crossing, Wikipedia, and Gemini AI with schema normalization and JWT security.
   - **Smart Traffic Signal Optimization using Computer Vision**: SIH 2024 Level 2 project with OpenCV MOG2 background subtractors and proportional density allocation.
   - **Urban Mobility Optimization Through Deep Learning**: AlexNet CNN research on traffic flow constraints.
   - **MazeTilt VR Simulation**: Unity / C# spatial physics balance simulation.
   - Deep-dive specs modal with keyboard Escape support and scroll restoration.

5. **Live Traffic Signal Optimization Simulator**:
   - Interactive client-side implementation of Sujith's proportional allocation formula.
   - 4-lane sliders, active green duration in seconds, rush surge / balanced / bottleneck / zero traffic presets.
   - Real-time Flask API payload schema preview.

6. **Verified Competencies (Skills)**:
   - Categorized 6-card matrix: Languages, Frontend, Backend, Databases & Cloud, Computer Vision & AI, Tools & Practices.
   - Hover tooltips detailing practical implementation context.

7. **Education & Industry Credentials**:
   - BVRIT, Narayana Junior College, TS EAMCET 2023.
   - Salesforce Agentforce (#7198308), EF SET English C1 Advanced (67/100, Listening 71 C2), Reliance Foundation AI-DevOps (#RFSA000629837), Simplilearn GenAI (#9075690).

8. **Contact & Footer**:
   - One-click copy for institutional email (`23211a05j3@bvrit.ac.in`) and phone (`+91 7032678348`).
   - Functional direct inquiry form and live Hyderabad IST clock.

---

## 💻 Local Running & Development

```bash
# 1. Navigate to the project directory
cd "C:\Users\sujit\.gemini\antigravity\scratch\sujith-portfolio"

# 2. Install dependencies (if not already installed)
npm install

# 3. Start the Vite development server
npm run dev
# Server runs at: http://localhost:5173/

# 4. Create an optimized production build
npm run build
```

---

## 🌐 Deploy to Vercel

### Option 1: Via Vercel CLI (Recommended)
```bash
# In the project directory:
npm i -g vercel
vercel
```
Follow the interactive prompts:
* Link to existing project? **No**
* What's your project's name? **sujith-portfolio**
* In which directory is your code located? **./**
* Want to modify these settings? **No** (Vercel automatically detects Vite).

### Option 2: Via GitHub + Vercel Dashboard
1. Push this local directory to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "feat: complete original architectural developer portfolio"
   git remote add origin https://github.com/sujithsinghh/portfolio.git
   git push -u origin master
   ```
2. Log in to [vercel.com](https://vercel.com).
3. Click **Add New** → **Project** → select your `portfolio` repository.
4. Framework Preset will auto-detect as **Vite**. Click **Deploy**.
