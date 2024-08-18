import './ListPlayer.css';

export const ListPlayer = () => {


    return (
        <div className="m-dropdown">
            <div className="e-button open">
                Tu as battu...
                <div className="e-burger">
                    <img src="https://cdn-icons-png.flaticon.com/128/5569/5569495.png" alt="Chess Pawn" className="chess-pawn"/>
                </div>
            </div>
            <ul className="e-list">
                <li><a href="1">Item 1</a></li>
                <li><a href="2">Item 2</a></li>
                <li><a href="3">Item 3</a></li>
                <li><a href="4">Item 4</a></li>
                <li><a href="5">Item 5</a></li>
            </ul>
        </div>
    )
}