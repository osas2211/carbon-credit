import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { SignUp } from "./pages/SignUp"
import { ConfigProvider } from "antd"
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#105a0e",
        },
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </ConfigProvider>
  )
}

export default App
