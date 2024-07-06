import './App.css'
import Game from './components/Game';
import { GameProvider } from './components/Context/GameContext';




function App() {
  return (
    <>
    <GameProvider>
    <Game />
  </GameProvider>
   
    </>
  )
}
export default App
