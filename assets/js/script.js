// TODO: Declare any global variables we need
let numberOfHeadFlips = 0
let numberOfTailFlips = 0
let percentHeads = 0
let percentTails = 0
let flipBtn = document.querySelector('#flip')
const clearBtn = document.querySelector('#clear')
const pennyImage = document.querySelector("#coinImage")
const message = document.querySelector('#message')
const heads = document.querySelector('#heads')
const tails = document.querySelector('#tails')
const headsPercent = document.querySelector('#heads-percent')
const tailsPercent = document.querySelector('#tails-percent')

document.addEventListener('DOMContentLoaded', function () {


    // TODO: Add event listener and handler for flip and clear buttons
    flipBtn.addEventListener('click', function(){
        let flippedHeads = Math.random() < 0.5 //boolean value

        if (flippedHeads){
            pennyImage.setAttribute('src', 'assets/images/penny-heads.jpg')
            message.textContent = 'you flipped heads!'
            numberOfHeadFlips++
        }else{
            pennyImage.setAttribute('src', 'assets/images/penny-tails.jpg')
            message.textContent = 'you flipped tails!'
            numberOfTailFlips++
        }

       let total = numberOfHeadFlips + numberOfTailFlips

        if(total > 0){
            percentHeads = Math.round((numberOfHeadFlips/total) * 100)
            percentTails = Math.round((numberOfTailFlips/total) * 100)
        }

        updateScoreBoards()


        //console.log(flippedHeads)
    })

    clearBtn.addEventListener('click', function(){
         numberOfHeadFlips = 0
         numberOfTailFlips = 0
         percentHeads = 0
         percentTails = 0
         updateScoreBoards()
         message.textContent = 'Let\'s Get Rolling'
    })

    function updateScoreBoards(){
        heads.textContent = numberOfHeadFlips
        tails.textContent = numberOfTailFlips
        headsPercent.textContent = `${percentHeads} %` 
        tailsPercent.textContent =`${percentTails} %`
    }
})