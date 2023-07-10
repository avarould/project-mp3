import { Artist, Browse, Browser, Chart1, Header, Home, Layout, LOSidebar } from "./router"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/browser'
          element={
            <Layout>
              <Browser />
            </Layout>
          }
        />
        <Route
          path='/charts'
          element={
            <Layout>
              <Chart1 />
            </Layout>
          }
        />
        <Route
          path='/artists'
          element={
            <Layout>
              <Artist />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}
export default App;
