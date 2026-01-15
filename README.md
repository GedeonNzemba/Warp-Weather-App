# 🌦️ Warp Weather App

A simple weather application built with **Next.js (App Router)** and **React** as part of the Warp Development Frontend Engineer assessment.

The application allows users to search for a city and view its current weather conditions, including temperature, condition, description, and an icon.


🔗 **Live Demo (Vercel):**  
https://warp-weather-app-lemon.vercel.app/

---

## 🚀 Features

- City-based weather search
- Displays:
  - City name
  - Temperature (**Celsius**)
  - Weather condition
  - Description
  - Weather icon
- **Full-screen loading overlay** while fetching data
- User-friendly error handling for invalid cities and API issues
- Secure API key handling via Next.js API Routes
- Fully typed with TypeScript
- Unit tests for core components
- Clean, responsive UI with modern styling
- Background video with accessible foreground content

---


## 🧰 Tech Stack

- **Next.js 16 (App Router)**
- **React**
- **TypeScript**
- **OpenWeatherMap API**
- **TanStack Query (React Query)** – data fetching & caching
- **CSS Modules**
- **Vitest + React Testing Library**
- **Vercel** (deployment)

---

## 🌡️ Temperature Unit

- **Celsius (°C)**

---

## 🔐 API Key Handling (Best Practice)

The OpenWeatherMap API key is **not exposed to the client**.


Instead:

- A Next.js API route (/api/weather) proxies requests to OpenWeatherMap

- The API key is stored securely in an environment variable (.env.local)

This follows recommended best practices for security and separation of concerns.

---

## 🧪 Testing

Basic unit tests are included for key components:

- `WeatherForm`

- `WeatherResult`

- `ErrorMessage`


Tests are written using:

- **Vitest**

- **@testing-library/react**

- **jsdom**


Run tests with:
```
npm run test
```

## 🛠️ Running the Project Locally
### 1. Install dependencies
```
bun install
```

2. Create environment variables

Create a .env.local file in the project root:
```
OPENWEATHER_API_KEY=your_api_key_here
```

3. Start the development server
```
npm run dev
```


The app will be available at:

http://localhost:3000

---

## 📁 Project Structure (Phase 1)

```
app/
├── api/
│   └── weather/
│       └── route.ts
├── layout.tsx
├── page.tsx
├── providers.tsx
├── globals.css
components/
├── WeatherApp.tsx
├── WeatherForm.tsx
├── WeatherResult.tsx
├── ErrorMessage.tsx
├── LoadingIndicator.tsx
└── __tests__/
    ├── WeatherForm.test.tsx
    ├── WeatherResult.test.tsx
    └── ErrorMessage.test.tsx
utils/
├── openWeatherApiResponse.ts
└── metaData.ts
styles/
├── page.module.css
└── Weather.module.css
public/
├── warp-logo.svg
├── 222841_medium.mp4
```

---


## 🧠 Design Decisions

- Functional-first approach: Core functionality and correctness were prioritized before UI polish.
- Type safety: All API responses and component props are strongly typed.
- Accessibility:
    - Error messages use role="alert" and aria-live="assertive".
    - Form inputs are properly labeled.
- Separation of concerns:
    - API logic isolated in route handlers
    - UI components kept small and focused
- TanStack Query:
    - Handles loading, error, and caching states cleanly
    - Improves scalability and maintainability


---


## 🔄 Phase 2 Enhancements
- Improved UI and layout
- Modern form and card styling
- Full-screen loading overlay with spinner
- Introduced TanStack Query
- Background video integration
- Deployed to Vercel


---

## 👤 Author

**Gedeon Christ Nzemba**
Frontend Engineer

📧 Email: gedeon.christ2@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/nzemba/