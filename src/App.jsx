// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom" 

// Components and Pages
import Home from "./components/Home"

// Modal Management
import ModelProvider from "./context/ModalContext"
import ModalManager from "./components/modals/ModalManager"

// State Management
import { ItemsProvider } from "./context/ItemsContext"

function App() {

    return (
      <ModelProvider>
        <ItemsProvider>
        <ModalManager />
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
          </BrowserRouter>
        </ItemsProvider>
      </ModelProvider>
  )
}

export default App
