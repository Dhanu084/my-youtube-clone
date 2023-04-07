import Body from "./Components/Body";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='flex'>
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
