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
                isShown: true,              // later change to false
                isMine: false,
                isMarked: true,
            }
            cellCount++
            setMinesNegsCount(board, i, j)
        }

    }

    for (var i = 0; i < gLevel.SIZE; i++) {
        for (var j = 0; j < gLevel.SIZE; j++) {
            if (board[i][j].isShown) {
                board[1][3].isMine = true
                board[2][2].isMine = true
            }

        }
    }

    console.table(board)
    return board
}

function setMinesNegsCount(board, i, j) {
    console.log(board)
    // var count = 0
    if (!board[i][j].isMine) {
        console.log('not a mine');
    } else {
        console.log('!!!mine');

    }
    // if (!board[i][j].isMine) {
    //     for (var i = i - 1; i <= i + 1; i++) {
    //         if (i < 0 || i >= board.length) continue
    
    //         for (var j = j - 1; j <= j + 1; j++) {
    //             if (j < 0 || j >= board[i].length) continue
    //             var currCell = board[i][j]
    //             if (currCell.isMine) count++
    //             // console.log(board[i][j]);
                
    //         }
    //     }
    //     boardcurrCell.minesAroundCount = count
    // } else {
    //     return
    // }
    
}

function cellClicked(elCell, i, j) {
    console.log('hi')
    console.log(elCell);
}







    // function checkifShown(board) {
    //     for (var i = 0; i < gLevel.SIZE; i++) {
    //         for (var j = 0; j < gLevel.SIZE; j++) {
    //             console.log(board)
    //             if (board[i][j].isShown) {
    //                 board[1][3].isMine = true
    //                 board[2][2].isMine = true
    //             }
    //             // {
    //             //         board[1][3].isMine = true
    //             //         board[2][2].isMine = true
    //             // }
    //         }
    //     }
    // }
