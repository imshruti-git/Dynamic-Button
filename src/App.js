import './App.css';

import { FaBeer } from 'react-icons/fa';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
    <Button 
      type='button'
      buttonStyle='btn--danger--outline'
      buttonSize='btn--large'
      buttonBackground='transparent'
    >
      <FaBeer /> download
    </Button>
    
      
    </div>
  );
}

export default App;
