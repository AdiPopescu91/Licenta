import React from 'react';

function CreateMap() {

    let c = document.getElementById('canvas');
    let ctx = c.getContext("2d");
    let map = [[0, 1, 0, 0, 0],
               [0, 1, 1, 0, 0],
               [0, 0, 0, 0, 0],]

    function drawMap(m){
        for(let i=0;i<m.length;i++)
            for(let j=0;j<m[i].length;j++)
            {
                if(m[i][j]===1)
                {
                    ctx.beginPath();
                    ctx.fillStyle="#000000";
                    ctx.fillRect(j*20,i*20,20,20);
                }
            }
    }
    function drawPlayer(x,y)
    {
        ctx.beginPath();
        ctx.fillStyle="#FF0000";
        ctx.fillRect(x,y,20,20);

    }
    function move(x,y) {
        ctx.clearRect(0, 0, 100, 60);
        drawPlayer(x, y);
        drawMap(map);
        player.x = player.newX;
        player.y = player.newY;
    }
    let player={
        x:0,
        y:0,
        newX:0,
        newY:0,
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
    window.onload=function(){
        drawMap(map);
        drawPlayer();
    }
}
export default CreateMap;