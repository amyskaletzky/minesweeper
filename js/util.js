'use strict'

function renderBoard(board) {

    var strHTML = ''
    for (var i = 0; i < gLevel.SIZE; i++) {
        strHTML += `<tr>\n`
        for (var j = 0; j < gLevel.SIZE; j++) {
          
            if (board[i][j].isMine && board[i][j].isShown) {
                strHTML += `<td class="cell" onclick="cellClicked(this)">${MINE}</td>\n` // add onclick later
            } else {
                strHTML += `<td class="cell" onclick="cellClicked(this)"></td>\n` // add onclick later  
            }
        }
        strHTML += `<tr>\n`
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML



    console.log(strHTML);
}