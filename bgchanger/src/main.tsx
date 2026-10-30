import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './App.css';
// import InputMain from './currencyConvertor/components/InputMain.tsx';
// import MainPage from './Haon/MainPage.tsx';
// import { BrowserRouter } from 'react-router/internal/react-server-client';
import MiniContext from './miniContext/MiniContext.tsx';
import UserContextProvider from './miniContext/context/UserContextProvider.tsx';

// import ImageBand from './ImageBand/ImageBand.tsx'
// import BgChanger from './BgChanger/BgChanger.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <ImageBand /> */}
    {/* <BgChanger/> */}
    {/* <PasswordGenerator/> */}
    {/* <InputMain /> */}
    {/* <BrowserRouter>
      <MainPage />  
    </BrowserRouter> */}
    <UserContextProvider>
      <MiniContext />
    </UserContextProvider>
  </StrictMode>,
)
