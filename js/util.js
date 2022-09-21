'use strict'

function renderBoard(board) {

    var strHTML = ''
    for (var i = 0; i < gLevel.SIZE; i++) {
        strHTML += `<tr>\n`
        for (var j = 0; j < gLevel.SIZE; j++) {
            // var dataAttribStr = `data-i="${i}" data-j="${j}"`
            if (board[i][j].isShown) {
                if (board[i][j].isMine) {
                    strHTML += `<td class="cell" onclick="cellClicked(this, ${i}, ${j})">${MINE}</td>\n`
                } else {
                    strHTML += `<td class="cell number" onclick="cellClicked(this, ${i}, ${j})">${board[i][j].minesAroundCount}</td>\n`
                }
            } else {
                strHTML += `<td class="cell" onclick="cellClicked(this, ${i}, ${j})"></td>\n` 
            }
        }
        strHTML += `<tr>\n`
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML



    console.log(strHTML);
}