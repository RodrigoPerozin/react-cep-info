import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputCEP from './components/InputCep.js';
import SubmitBtn from './components/SubmitBtn.js';
import ResponseView from './components/ResponseView';
import './assets/js/main.js';

function App() {
  return (
    <div className="App">
      <div className="main-box">
        <InputCEP/>
        <SubmitBtn/>
      </div>
      <ResponseView/>
    </div>
  );
}

export default App;
