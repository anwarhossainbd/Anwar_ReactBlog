
import {BrowserRouter} from 'react-router-dom';
import Myroutes from "./Router/Myroutes";


function App() {
  return (
    <div>

        <BrowserRouter>

            <Myroutes />
        </BrowserRouter>

    </div>
  );
}

export default App;
