import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom"
import { MainLayout } from "./components/layout/MainLayout"
import { DesignPage } from "./pages/design/DesignPage"
import { ComponentsPage } from "./pages/components/ComponentsPage"
import { IconsPage } from "./pages/icons/IconsPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/components" replace />} />
          <Route path="design" element={<DesignPage />} />
          <Route path="components" element={<ComponentsPage />} />
          <Route path="icons" element={<IconsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
