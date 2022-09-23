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


var gInterval
var gCount = 0
var elTimer = document.querySelector('.timer')


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
                isMarked: false,
            }
            cellCount++

        }

    }
    addMine(board, gLevel.MINES, gLevel.SIZE)
   
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
    gBoard[i][j].isShown = true
    renderBoard(gBoard)
    gCount++
    if (gCount === 1) showTimer()

}

function cellMarked(elCell, i, j) {
    gBoard[i][j].isMarked = true
    renderBoard(gBoard)
}

function getSelectValue() {
    var selectedValue = document.getElementById('list').value
    if (selectedValue === 'easy') {
        gLevel = {
            SIZE: 4,
            MINES: 2,
        }
        elTimer.innerText = '0:00'
        clearInterval(gInterval)
        gCount = 0
    } else if (selectedValue === 'medium') {
        gLevel = {
            SIZE: 8,
            MINES: 14,
        }
        elTimer.innerText = '0:00'
        clearInterval(gInterval)
        gCount = 0
    } else if (selectedValue === 'hard') {
        gLevel = {
            SIZE: 12,
            MINES: 32,
        }
        elTimer.innerText = '0:00'
        clearInterval(gInterval)
        gCount = 0
    }
    return gLevel
}

function showTimer() {
    var initialTime = Date.now()

    gInterval = setInterval(function () {
        var differenceInTime = Date.now() - initialTime
        var correctFormat = convertTime(differenceInTime)
        elTimer.innerText = correctFormat
    }, 1000)


}

function convertTime(miliseconds) {
    var totalSeconds = Math.floor(miliseconds / 1000)
    var minutes = Math.floor(totalSeconds / 60)
    var seconds = totalSeconds - minutes * 60
    if (seconds < 10) {
        return minutes + ':0' + seconds
    } else {
        return minutes + ':' + seconds
    }
}

function checkGameOver() {
    console.log('hi')
}

