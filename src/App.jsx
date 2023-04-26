import './App.css'
import DarkMode from './components/DarkMode'
import { Provider } from 'react-redux'
import { store } from './store'


function App() {


  return (
    <Provider store={store}>
      <DarkMode/>
    </Provider>
  )
}

export default App
