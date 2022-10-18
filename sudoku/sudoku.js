const BLANK_BOARD = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]

const rowSafe = (puzzle, cell, num) => {
    return puzzle[cell.rowIndex].indexOf(num) == -1
}

const colSafe = (puzzle, cell, num) => {
    return !puzzle.some(row => row[cell.colIndex] == num)
}

const boxSafe = (puzzle, cell, num) => {
    boxStartRow = cell.rowIndex - (cell.rowIndex % 3)
    boxStartCol = cell.colIndex - (cell.colIndex % 3)
    let safe = true

    for(boxRow of [0, 1, 2]){
        for(boxCol of [0, 1, 2]){
            if(puzzle[boxStartRow + boxRow][boxStartCol + boxCol] == num){
                safe = false
            }
        }
    }
    return safe
}

const safeNum = (puzzle, cell, num) => {
    return rowSafe(puzzle, cell, num) && colSafe(puzzle, cell, num) && boxSafe(puzzle, cell, num)
}

const nextCell = puzzle => {
    const cell = {rowIndex: "", colIndex: ""}
    puzzle.forEach( (row, rowIndex) => {
        if(cell.rowIndex !== "") return  

        let zero = row.find(col => col === 0)

        if(zero === undefined) return;

        cell.rowIndex = rowIndex
        cell.colIndex = row.indexOf(zero)
    })
    if(cell.colIndex !== "") return cell

    return false
}

const numArray = [1,2,3,4,5,6,7,8,9]

const shuffle = array => {
    let newArray = [...array]

    for(let i = newArray.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray
}

const fillPuzzle = startingBoard => {
    const cell = nextCell(startingBoard)
    if(!cell) return startingBoard
    
    for(num of shuffle(numArray)) {
        counter++
        if(counter > 20000000) throw new Error ("recursion timeout")
        if (safeNum(startingBoard, cell, num)){
            startingBoard[cell.rowIndex][cell.colIndex] = num
            if (fillPuzzle(startingBoard)) return startingBoard
            startingBoard[cell.rowIndex][cell.colIndex] = 0
        }
    }
    return false
}

const solvedBoard = _ => {
    const newBoard = BLANK_BOARD.map(row => row.slice)
    fillPuzzle(newBoard)
    return newBoard
    for(row of newBoard[[]]){
        for(col of newBoard[row]){
            console.log(newBoard[row][col])
        }
    }
}

