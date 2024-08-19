import './Array.css';
import {useState} from "react";

const names = ["Navid", "Marley", "Adrien", "Théo", "Yoan", "Alice", "Bob", "Charlie", "Dave", "Eve"];

export const Array = () => {
    const [grid, setGrid] = useState(
        Array(names.length)
            .fill(null)
            .map(() => Array(names.length).fill(null))
    );

    const handleClick = (rowIndex, colIndex) => {
        setGrid(prevGrid => {
            const newGrid = prevGrid.map(row => row.slice());
            if (newGrid[rowIndex][colIndex] === "✔️") {
                newGrid[rowIndex][colIndex] = "❌";
            } else if (newGrid[rowIndex][colIndex] === "❌") {
                newGrid[rowIndex][colIndex] = null;
            } else {
                newGrid[rowIndex][colIndex] = "✔️";
            }
            return newGrid;
        });
    };

    return (
        <div className="array-container">
            <table>
                <thead>
                <tr>
                    <th></th>
                    {names.map((name, index) => (
                        <th key={index}>{name}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {names.map((rowName, rowIndex) => (
                    <tr key={rowIndex}>
                        <td>{rowName}</td>
                        {names.map((colName, colIndex) => (
                            <td
                                key={colIndex}
                                className="array-cell"
                                onClick={() => handleClick(rowIndex, colIndex)}
                            >
                                {grid[rowIndex][colIndex]}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
