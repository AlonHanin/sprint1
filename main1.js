'use strict'


const MINE = '&#128163;'
const FLSG = '&#128681'
const EMPTY = ''
const HEART = ' &#128147'

var gCountClick = 0
var gStartTime
var gInterval
var gsec

var gBoard = {
    // minesAroundCount: 4,
    isShown: true,
    isMine: false,
    isMarked: false
}

var gLevel = {
    SIZE: 4,
    MINES: 2
}

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

var cBoard

function init () {
    console.log('hii');
    cBoard = createBoard()
    mineCount()
    renderBoard(cBoard)
       
}



function createBoard () {
    var board = []

    for (var i = 0; i < gLevel.SIZE; i++){
        board[i] = []
        for (var j = 0; j < gLevel.SIZE; j++){
            board[i][j] = {gBoard}

        }

    }

    for (var i = 0; i < gLevel.MINES; i++){
        var randMineI = getRandomInt(0, gLevel.SIZE - 1)
        var randMineJ = getRandomInt(0, gLevel.SIZE - 1)
        board[randMineI][randMineJ].isMine = true 

       
    }
    // console.log(board);
    return board
    
}



function mineCount() {
    for (var i = 0; i < cBoard.length; i++) {
        for (var j =0; j < cBoard[i].length; j++){
            cBoard[i][j].minesAroundCount = setMinesNegsCount(i, j)
        }
    }
}

// neighbors loops
function setMinesNegsCount(cellI, cellJ){
    var minesAroundCount = 0

    for(var i = cellI - 1; i <= cellI + 1; i++){
        if (i < 0 || i >= cBoard.length) continue

        for(var j = cellJ - 1; j <= cellJ + 1; j++){
            if (i === cellI && j === cellJ) continue
            if (j < 0 || j >= cBoard[i].length) continue
            if (cBoard[i][j].isMine === true) minesAroundCount++
        }
    }
    return minesAroundCount
}


function cellClicked (elCell, i, j) {
    console.log(elCell);

    if(cBoard[i][j].isMine === true) {
       var cellMine = document.querySelector('.cell')
       cellMine.innerHTML = MINE
    }

    if(cBoard[i][j].isMine === false) {
       var cellMine = document.querySelector('.cell')
       cellMine.innerHTML = cBoard[i][j].minesAroundCount
    }




    // var elCell = cBoard[i][j].isMine ? MINE : cBoard[i][j].minesAroundCount
    // elCell = cBoard[i][j].isShown ? cell : EMPTY
    // var cells= document.querySelector('.cell')
    // cells.style.display='none'
    
    
    // gCountClick++
    // if (gCountClick === 1) {
    //     startTimer()
    //     gStartTime = Date.now();
    // } 
    
    // var elCell = cBoard[i][j].isMine
    // var cell = document.querySelector('.cell')
    // if(elCell === true) {
    //     checkGameOver()
    // }
    //  if(elCell.isMine === false){
    //     elCell.innerText = cBoard[i][j].minesAroundCount
    // }
    

    // var currCell = cBoard[i][j]
    // currCell.isShown = true
    // if(currCell.isMine === false){
    //     elCell.innerText = cBoard[i][j].minesAroundCount
    // }else{
    //     elCell.innerHTML = MINE
    // }

}

function checkGameOver () {
    alert('GAME OVER')
}


function startTimer() {
    var strHTML = ''
    gInterval = setInterval(function () {
        var currTime = Date.now() - gStartTime
        var sec = currTime / 1000
        var elTimer = document.querySelector('.timer')
        strHTML = sec
        elTimer.innerHTML = `Timer: ${strHTML}`
        gsec = sec
    }, 1000)
}