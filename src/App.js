import './App.css';
import Profil from './Profil/Profil';
import Myimg from './assets/profil.jpg';
import HandleName from './Profil/HandleName';

function App() {
  const HandleNam = props=>alert('My name is Sawssen');
  return (
    <div className="App">
      <Profil name=" Jandoubi Sawssen"bio="Mern Stack Developer" profession="Developer">
        <img src={Myimg} alt='pic'/>
        </Profil>
<HandleName  HandleNam={HandleNam} />
    </div>
  );
}

export default App;
