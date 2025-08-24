import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import CounterPage from "./pages/CounterPage.tsx";
import Layout from "./components/Layout.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";
import NotePad from "./pages/NotePad.tsx";
import OnlineStatus from "./pages/OnlineStatus.tsx";
import CountDownTimerPage from "./pages/CountDownTimerPage.tsx";
import TimerPage from "./pages/TimerPage.tsx";
import AppsPage from "./pages/AppsPage.tsx";
import GamesPage from "./pages/GamesPage.tsx";
import GuessNumberPage from "./pages/GuessNumberPage.tsx";
import TicTacToePage from "./pages/TicTacToePage.tsx";
import DoubleTimer from "./pages/DoubleTimer.tsx";

function App() {


  return (
      <>
          <BrowserRouter>
              <Layout>
                  <Routes>
                      <Route index element={<HomePage/>}/>
                      <Route path="/Counter" element={<CounterPage/>}/>
                      <Route path="/NameChanger" element={<NameChangerPage/>}/>
                      <Route path="/NotePad" element={<NotePad/>}/>
                      <Route path="/OnlineStatus" element={<OnlineStatus/>}/>
                      <Route path="/CountDownTimer" element={<CountDownTimerPage/>}/>
                      <Route path="/Timer" element={<TimerPage/>}/>
                      <Route path="/AppsPage" element={<AppsPage/>}/>
                      <Route path="/GamesPage" element={<GamesPage/>}/>
                      <Route path="/GuessNumberPage" element={<GuessNumberPage/>}/>
                      <Route path="/TicTacToePage" element={<TicTacToePage/>}/>
                      <Route path="/DoubleTimer" element={<DoubleTimer/>}/>

                  </Routes>
              </Layout>
          </BrowserRouter>

    </>
  )
}

export default App
