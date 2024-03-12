import './index.css'
import './personalizedStyles.css'
import TopMenu from './Components/TopMenu'
import MainContent from './Components/MainContent';
import BottomMenu from './Components/BottomMenu';



function App() {
  return (
    <div className="grid size-max container w-80 h-screen mx-auto bg-green-100 ">
      <TopMenu />
      <MainContent />
      <BottomMenu />
    </div>
  );
}

export default App;
