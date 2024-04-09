export default function Log() {
  return <ol id="log">
    
  </ol>
}

const [gameBoard, setGameBoard] = useState(initialGameBoard);

function handleSelectSquare(rowIndex, colIndex) {
  setGameBoard((prevGameBoard) => {
    const updateBoard = [
      ...prevGameBoard.map((innerArray) => [...innerArray]),
    ];
    updateBoard[rowIndex][colIndex] = activePlayerSymbol;
    return updateBoard;
  });