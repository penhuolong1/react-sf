import './App.css';
import Routers from './router/index.jsx'
import { Provider } from 'react-redux'
import store from './store'


function App() {
  return (
    <div>
      <Provider store={store}>
        <Routers></Routers>
      </Provider>
    </div>
  );
}

export default App;
