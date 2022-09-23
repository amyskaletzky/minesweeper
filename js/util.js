'use strict'

function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < gLevel.SIZE; i++) {
        strHTML += `<tr>\n`
        for (var j = 0; j < gLevel.SIZE; j++) {
            if (board[i][j].isShown) {
                if (board[i][j].isMine) {
                    strHTML += `<td class="cell" onclick="cellClicked(this, ${i}, ${j})" oncontextmenu="cellMarked(this, ${i}, ${j}), event.preventDefault()" contextmenu="mymenu">${MINE}</td>\n` 
                } else {
                    strHTML += `<td class="cell number" onclick="cellClicked(this, ${i}, ${j})" oncontextmenu="cellMarked(this, ${i}, ${j}), event.preventDefault()" contextmenu="mymenu">${board[i][j].minesAroundCount}</td>\n`
                }
            } else {
               if (board[i][j].isMarked) {
                   strHTML += `<td class="cell" onclick="cellClicked(this, ${i}, ${j})" oncontextmenu="cellMarked(this, ${i}, ${j}), event.preventDefault()" contextmenu="mymenu">${FLAG}</td>\n` 
               } else {
                   strHTML += `<td class="cell" onclick="cellClicked(this, ${i}, ${j})" oncontextmenu="cellMarked(this, ${i}, ${j}), event.preventDefault()" contextmenu="mymenu"></td>\n` 
               }
            }
        }
        strHTML += `<tr>\n`
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
    
    
    
    // console.log(strHTML);
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

// var dataAttribStr = `data-i="${i}" data-j="${j}"`