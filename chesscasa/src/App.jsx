import {CheckerBoard} from "./CheckerBoard.jsx";
import './ListPlayer.css';
import {useState} from "react";
import {getUid, database} from "./firebase.js";
import {getDatabase, ref, update} from "firebase/database"
import {data} from "jquery";


function App() {
    const [currentUser, setCurrentUser] = useState('')
    const [bool, setBool] = useState(true)

    function selection(name) {
        event.preventDefault();
        if (bool) {
            setCurrentUser(name);
            setBool(!bool);
        } else {
            const updates = {};
            updates[`/${currentUser}/${name}`] = 1;
            update(ref(database), updates);

            const updates2 = {};
            updates2[`/${name}/${currentUser}`] = -1;
            update(ref(database), updates2);
        }
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
                  {currentUser != "Navid"  && <li><a href="" onClick={() => selection("Navid")}>Navid</a></li>}
                  {currentUser != "Marley"  && <li><a href="" onClick={() => selection("Marley")}>Marley</a></li>}
                  {currentUser != "Adrien"  && <li><a href="" onClick={() => selection("Adrien")}>Adrien</a></li>}
                  {currentUser != "Théo"  && <li><a href="" onClick={() => selection("Théo")}>Théo</a></li>}
                  {currentUser != "Yoan"  && <li><a href="" onClick={() => selection("Yoan")}>Yoan</a></li>}
              </ul>
          </div>
      </>
  )
}

export default App
