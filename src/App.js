
import './App.css';
import Button from './component/Button';
import { FaBeer } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
    
      {Button('large', '200px', '80px', "blue", "blue", "50px")}<br/>
      {Button('default')} <br/>
      {Button("small", "50px", "30px", "blue", "Blue", "10px")} <br/>
      {Button("rounded-corner button","200px" , "", "white", "", "", "15px", "red")} <br/>
      {Button("border without border","200px", "", "white", "", "15px", "5px", "orange", "none")} <br/>
      {Button("transparent", "200px","", "", "", "", "", "transparent" )}<br/>
      {Button("dashed",'','', '', '', '', '','','dashed')}<br/>
      {Button(<FaBeer/>, '0', '0', '', '', '', '', 'transparent', 'none')}<br/><br/>
      {Button(<FaBeer/>, "", "", "white", "", "", "20px", "blue", "none")} <br />
      {Button(<FaBeer/>, "50px", "", "white", "", "", "", "blue", "none")} <br/>
      {Button(<FaBeer/>, '50px', '', 'white', '', '', '50px', 'blue', 'none')}<br/><br/>
      
    </div>
  );
}

export default App;
