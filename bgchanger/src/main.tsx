import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './App.css';
import InputMain from './currencyConvertor/components/InputMain.tsx';

// import ImageBand from './ImageBand/ImageBand.tsx'
// import BgChanger from './BgChanger/BgChanger.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <ImageBand /> */}
    {/* <BgChanger/> */}
    {/* <PasswordGenerator/> */}
    <InputMain />
  </StrictMode>,
)
