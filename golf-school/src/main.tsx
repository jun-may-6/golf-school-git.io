import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './store/index.ts'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/golf-school/service-worker.js") // 빌드 결과물 경로
      .then((reg) => {
        console.log("Service Worker registered: ", reg);
      })
      .catch((err) => {
        console.log("Service Worker registration failed: ", err);
      });
  });
}
