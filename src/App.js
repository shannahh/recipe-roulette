import './App.css';
import NavBar from "./Components/Navigation Bar/NavBar";
import Food from "./pages/search/Food";
import  {Routes, Route} from 'react-router-dom';
import Homepage from "./pages/home/Homepage"



function App() {
  return (
      <>

         <div className={"NavBarItems"}>
             <NavBar/>
<Routes>
    <Route path="/Home" element={<Homepage/>} />
         <Route path={"/search"} element={<Food/>} />



</Routes>

         </div>


        <main >

<h1> Hello</h1>
        </main>

      </>

  );
}

export default App;
/* <header className="App-header">

        <h1> Recipe Roulette</h1>

              <h2> When choosing a recipe costs too much energy</h2>


      </header> */