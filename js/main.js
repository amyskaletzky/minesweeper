'use strict'
//change name to game later on
//✴


//IVE GIVEN UP


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

var elTimer = document.querySelector('.timer')
var sec = 0
var gInterval



// functions
function initGame() {
    getSelectValue()
    gBoard = buildBoard()
    renderBoard(gBoard)
    // if (cellClicked) gInterval = setInterval(timer, 1000)
}

function buildBoard() {
    var board = []
    var cellCount = 0
    for (var i = 0; i < gLevel.SIZE; i++) {
        board.push([])
        for (var j = 0; j < gLevel.SIZE; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: true,
            } 
            cellCount++

        }
        
    }
    addMine(board, gLevel.MINES, gLevel.SIZE)
    // board[1][3].isMine = board[2][2].isMine = true
    // if (board[1][3].isShown) board[1][3].isMine = true
    // if (board[2][2].isShown) board[2][2].isMine = true
    // if (gBoard[i][j].isShown) {
    //     gBoard[1][3].isMine = true
    //     gBoard[2][2].isMine = true
    // }

    for (var i = 0; i < gLevel.SIZE; i++) {
        for (var j = 0; j < gLevel.SIZE; j++) {
            setMinesNegsCount(board, i, j)

        }
    }

    console.table(board)
    return board
}

function addMine(board, mineNums, size) {

    for (var i = 0; i < mineNums; i++) {
        const i = getRandomInt(0, size)
        const j = getRandomInt(0, size)
        // gBoard[i][j].isMine = true
    
        board[i][j].isMine = true
        console.log(board[i][j])

    }


    return board
	
    // gBoard[cell.i][cell.j] = CHERRY

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


function cellClicked(elCell, i, j) {
    // gInterval = setInterval(timer, 1000)
    console.log(elCell);
    console.log(gBoard[i][j]);
    gBoard[i][j].isShown = true
    renderBoard(gBoard)
    // 


    // var elCell = document.querySelector('.cell');

    // elCell.addEventListener('mouseup', (e) => {
    //     switch (e.button) {
    //         case 0:
    //             console.log('hi');
    //             gBoard[i][j].isShown = true
    //             elCell.innerText = 'hi'
    //             break;

    //         case 2:
    //             console.log('no');
    //             elCell.innerHTML = FLAG
    //             break;
    // }
    // });
    
   


}

function getSelectValue() {
    var selectedValue = document.getElementById('list').value
    if (selectedValue === 'easy') {
        gLevel = {
            SIZE: 4,
            MINES: 2,
        }
    } else if (selectedValue === 'medium') {
        gLevel = {
            SIZE: 8,
            MINES: 14,
        }
    } else if (selectedValue === 'hard') {
        gLevel = {
            SIZE: 12,
            MINES: 32,
        }
    }
    return gLevel
}

function timer() {
    if (sec < 10) {
        elTimer.innerHTML = '00:0' + sec
        sec++
    } else {
        elTimer.innerHTML = '00:' + sec
        sec++
    }
    gInterval = setInterval(timer, 1000)
}

function checkGameOver() {
    console.log('hi');
}

