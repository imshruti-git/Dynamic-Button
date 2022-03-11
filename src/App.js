import './App.css';

import { FaBeer } from 'react-icons/fa';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
        <Button type='button'> DEFAULT </Button> <br/>

        <Button 
                type='button'
                buttonPadding='30px 30px'
                fontSize='20px'
        > LARGE 
        </Button> 
        <br/>

        <Button 
                type='button'
                buttonPadding='10px 10px'
                fontSize='10px'
        > SMALL
        </Button> 
        <br/>

        <Button 
                type='button'
                buttonStyle='primary-outline'
                borderRadius='10px'
        >
          Primary outline
        </Button>

        <br/>

        <Button 
                type='button'
                buttonStyle='success-outline'
        >
           Success outline
        </Button>

    <br/>

    <Button 
      type='button'
      buttonStyle='warning-dashed'
      borderRadius='10px'
    >
      warning outline
    </Button>

    <br/>

    <Button 
      type='button'
      buttonStyle='danger-dashed'
      borderRadius='30px'
    >
      Danger outline
    </Button>

    <br/>

    <Button 
      type='button'
      buttonStyle='warning-solid'
      border='none'
      borderRadius='10px'
    >
      Button without border
    </Button>
    <br/>
    <Button 
      type='button'
      buttonStyle='success-solid'
      borderRadius='10px'
    >
      Submit
    </Button>
    <br/>
    <Button 
      type='button'
      buttonStyle='danger-solid'
      buttonBackground='transparent'
      textColor='black'
    >
      Transparent
    </Button>
    <br/>
    
    <Button
          type='button'
          border='none'
    >
      <FaBeer />
    </Button>

    <br/>

    <Button
          type='button'
          border='none'
          borderRadius='50%'
    >
      <FaBeer />
    </Button>
    <br/>
    <Button
          type='button'
          border='none'
          borderRadius='20px'
          buttonPadding='7px 25px'
    >
      <FaBeer />
    </Button>
      <br/>
      <Button
          type='button'
          border='none'
          borderRadius='20px'
          buttonPadding='7px 25px'
          fontSize='15px'
    >
      <FaBeer /> Download
    </Button>
    <br/>
    <Button
          type='button'
          border='none'
          buttonPadding='7px 25px'
          fontSize='15px'
    >
      <FaBeer /> Download
    </Button>
    </div>
  );
}

export default App;
