import {CheckerBoard} from "./CheckerBoard.jsx";
import './ListPlayer.css';
import {useState} from "react";

function App() {
    const [currentUser, setCurrentUser] = useState("")
    const [bool, setBool] = useState(true)

    function selection(name) {
        setCurrentUser(name);
        event.preventDefault();
        setBool(!bool);
        if (currentUser != "")
            console.log("test")
    }

  return (
      <>
        <CheckerBoard/>
          <div className="m-dropdown">
              <div className="e-button open">
                  {bool ? <p>Tu es...</p> : <p>Tu as battu...</p>}
                  <div className="e-burger">
                      <img src="https://cdn-icons-png.flaticon.com/128/5569/5569495.png" alt="Chess Pawn"
                           className="chess-pawn"/>
                  </div>
              </div>
              <ul className="e-list">
                  {currentUser != "Navid"  && <li><a href="Navid" onClick={() => selection("Navid")}>Navid</a></li>}
                  {currentUser != "Marley"  && <li><a href="Marley" onClick={() => selection("Marley")}>Marley</a></li>}
                  {currentUser != "Adrien"  && <li><a href="Adrien" onClick={() => selection("Adrien")}>Adrien</a></li>}
                  {currentUser != "Théo"  && <li><a href="Théo" onClick={() => selection("Théo")}>Théo</a></li>}
                  {currentUser != "Yoan"  && <li><a href="Yoan" onClick={() => selection("Yoan")}>Yoan</a></li>}
              </ul>
          </div>
      </>
  )
}

export default App
