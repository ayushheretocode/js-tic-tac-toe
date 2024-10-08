let gridItems=document.querySelectorAll('.grid-item')
let topText=document.querySelector('#top-text')
let startBtnText=document.querySelector('#start-btn')
let winnerMark
let player
let moves


function renderGame()
{
    gridItems.forEach(item=>{
        item.removeEventListener('click',markOnTheBoard)
        item.classList.remove('disabled')
        item.style.color='white'
        item.innerText=""
    })
}

function startGame()
{
    renderGame()

    startBtnText.innerText="New Game"

    moves=0
    player=1
    topText.innerText="Its Player 1's turn! ❎"
    gridItems.forEach((item)=>{
        item.addEventListener('click',markOnTheBoard)
    })
}

function markOnTheBoard()
{
    if(player===1)
    {
        this.textContent="X"
        this.classList.add('disabled')
        player+=1
        moves+=1
        topText.innerText="Its Player 2's turn! 0️⃣"
    }
    else if(player===2)
    {
        this.textContent="0"
        this.classList.add('disabled')
        player-=1
        moves+=1
        topText.innerText="Its Player 1's turn! ❎"
        
    }
    checkForWin()
}

function checkForWin(){
    
    //horizontal wins
    if(gridItems[0].innerText && gridItems[0].innerText===gridItems[1].innerText && gridItems[1].innerText===gridItems[2].innerText)
    {
        winnerMark=gridItems[0].innerText
        whosTheWinner(0,1,2)
        return
    }
    if(gridItems[3].innerText && gridItems[3].innerText===gridItems[4].innerText && gridItems[4].innerText===gridItems[5].innerText)
    {
        winnerMark=gridItems[3].innerText
        whosTheWinner(3,4,5)
        return
    }
    if(gridItems[6].innerText && gridItems[6].innerText===gridItems[7].innerText && gridItems[7].innerText===gridItems[8].innerText)
    {
        winnerMark=gridItems[6].innerText
        whosTheWinner(6,7,8)
        return
    }

    //vertical wins
    if(gridItems[0].innerText && gridItems[0].innerText===gridItems[3].innerText && gridItems[3].innerText===gridItems[6].innerText)
    {
        winnerMark=gridItems[0].innerText
        whosTheWinner(0,3,6)
        return
    }
    if(gridItems[1].innerText && gridItems[1].innerText===gridItems[4].innerText && gridItems[4].innerText===gridItems[7].innerText)
    {
        winnerMark=gridItems[1].innerText
        whosTheWinner(1,4,7)
        return
    }
    if(gridItems[2].innerText && gridItems[2].innerText===gridItems[5].innerText && gridItems[5].innerText===gridItems[8].innerText)
    {
        winnerMark=gridItems[2].innerText
        whosTheWinner(2,5,8)
        return
    }

    //diagonal wins
    if(gridItems[0].innerText && gridItems[0].innerText===gridItems[4].innerText && gridItems[4].innerText===gridItems[8].innerText)
    {
        winnerMark=gridItems[0].innerText
        whosTheWinner(0,4,8)
        return
    }
    if(gridItems[2].innerText && gridItems[2].innerText===gridItems[4].innerText && gridItems[4].innerText===gridItems[6].innerText)
    {
        winnerMark=gridItems[2].innerText
        whosTheWinner(2,4,6)
        return
    }

    //draw after all 9 moves
    if(moves==9)
    {
        draw()
        return
    }
}

function whosTheWinner(a,b,c)
{
    gridItems[a].style.color='green'
    gridItems[b].style.color='green'
    gridItems[c].style.color='green'
    if(winnerMark==="X")
    {
        topText.innerText="PLAYER 1 WINS!!! ❎"
    }
    else{
        topText.innerText="PLAYER 2 WINS!!! 0️⃣"
    }
    gridItems.forEach(item=>{
        item.classList.add('disabled')
    })
    
}

function draw()
{
    topText.innerText="ITS A DRAW!!! ❎0️⃣"
}
