import './App.css';

import { FaBeer } from 'react-icons/fa';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
    <Button 
      type='button'
      buttonStyle='danger-dashed'
      buttonPadding='30px 30px'
      fontSize='25px'
      buttonBackground='transparent'
    >
      <FaBeer /> download
    </Button>
    
      
    </div>
  );
}

export default App;
