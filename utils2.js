'use strict'


function renderBoard (board) {
    console.table(board);
    var strHTML = ''
    for(var i = 0; i < board.length; i++){

        strHTML += '<tr class="tr">\n'
        
        for(var j = 0; j < board[0].length; j++){

            // var cell = cBoard[i][j].isMine ? MINE : cBoard[i][j].minesAroundCount
            const className = `cell cell-${i}-${j}`
            strHTML += `\t<td class="${className}" onclick="cellClicked(this,${i}, ${j})">${EMPTY}</td>\n`
        }
        strHTML += '</tr>\n'
    }
    var elTable = document.querySelector('.board')
    elTable.innerHTML = strHTML
    
    
}


//getRandomInt
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}




