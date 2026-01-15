# 🌦️ Warp Weather App

A simple weather application built with **Next.js (App Router)** and **React** as part of the Warp Development Frontend Engineer assessment.

The application allows users to search for a city and view its current weather conditions, including temperature, condition, description, and an icon.


---

## 🚀 Features

- City-based weather search

- Displays:

    - City name

    - Temperature (Celsius)

    - Weather condition

    - Description

    - Weather icon

- Loading state while fetching data

- User-friendly error handling

- API key securely handled via Next.js API Route

- Fully typed with TypeScript

- Basic unit tests using Vitest and React Testing Library

---


## 🧰 Tech Stack

- **Next.js 16 (App Router)**

- **React**

- **TypeScript**

- **OpenWeatherMap API**

- **CSS Modules**

- **Vitest + React Testing Library** (unit tests)

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

- **jsdom environment**


Run tests with:
```
npm run test
```

## 🛠️ Running the Project Locally
### 1. Install dependencies
```
npm install
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
└── page.tsx
components/
├── WeatherApp.tsx
├── WeatherForm.tsx
├── WeatherResult.tsx
├── ErrorMessage.tsx
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
```


## 🧠 Design Decisions

Functional-first approach: Phase 1 prioritizes correctness, structure, and clarity over UI polish.

Type safety: All API responses and component props are strongly typed.

Accessibility: Error messages use role="alert" and aria-live="assertive".

Maintainability: Clear separation of concerns between UI, API logic, and types.


## 🔄 Future Improvements (Phase 2)

UI/UX refinement

Introduce TanStack Query for improved data fetching and caching

Enhanced styling and layout

Additional tests (integration level)
