import React from 'React'
import drawPlayer from '../../views/Game'


let c = document.getElementById('canvas');
let ctx = c.getContext("2d");

function Moves() {


    let player={
        x:0,
        y:0,
        newX:0,
        newY:0,
    }
    function move(x,y) {
        ctx.clearRect(0, 0, 100, 60);
        drawPlayer(x, y);
        player.x = player.newX;
        player.y = player.newY;
    }
    window.onkeydown=function(e){
        if(e.key===37)
        {player.newX=player.x-20;player.newY=player.y;console.log('STANGA');}
        if(e.key===38)
        {player.newX=player.x;player.newY=player.y-20;console.log('SUS');}
        if(e.key===39)
        {  player.newX=player.x+20;player.newY=player.y;console.log('DREAPTA');}
        if(e.key===40)
        {player.newX=player.x;player.newY=player.y+20;console.log('JOS');}
        move(player.newX,player.newY);
    }
}
export default Moves;