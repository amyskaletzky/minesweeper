'use strict'
//change name to game later on
//✴

// all consts
const MINE = '💣'
const FLAG = '🚩'
const EMPTY = ''


// global variables
var gBoard

var gLevel = {
    SIZE: 4,
    MINES: 2,
}
var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0,
}

//delete later
var gMinePos1
var gMinePos2



// functions
function initGame() {
    gBoard = buildBoard()
    gMinePos1 = { i: 1, j: 3 }
    gMinePos2 = { i: 2, j: 2 }
    renderBoard(gBoard)
}

function buildBoard() {
    var board = []
    var cellCount = 0
    for (var i = 0; i < gLevel.SIZE; i++) {
        board.push([])
        for (var j = 0; j < gLevel.SIZE; j++) {
            board[i][j] = {
                minesAroundCount: 4,
                isShown: false,             
                isMine: false,
                isMarked: true,
            }
            cellCount++
            
            
        }
    }
    
    
    if (board[1][3].isShown) board[1][3].isMine = true
    if (board[2][2].isShown) board[2][2].isMine = true
    
    
    for (var i = 0; i < gLevel.SIZE; i++) {
        for (var j = 0; j < gLevel.SIZE; j++) {
            console.log('ji');
            setMinesNegsCount(board, i, j)
        
        }
    }

    console.table(board)
    return board
}

function setMinesNegsCount(board, x, y) {
    // console.log(board[x][y].isMine)
    var count = 0

    if (!board[x][y].isMine) {
        for (var i = x - 1; i <= x + 1; i++) {
            if (i < 0 || i >= gLevel.SIZE) continue
            for (var j = y - 1; j <= y + 1; j++) {
                if (j < 0 || j >= gLevel.SIZE) continue

                var currCell = board[i][j]
                if (currCell.isMine) count++

            }
            
        }
        board[x][y].minesAroundCount = count
    }

}


function cellClicked(elCell, x, y) {
    // elCell.
    // console.log(elCell.classList);

        gBoard[x][y].isShown = true
        buildBoard()
        renderBoard()
           console.log(gBoard[i][j])
    //    }
    //     } else if (e.button === 2) {
    //         console.log('right click');
    // }
    
    // if (elCell.)
    // setMinesNegsCount(gBoard, i, j)
    console.log(elCell)
    

    
    // elCell
}

