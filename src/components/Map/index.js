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
    function drawPlayer()
    {
        ctx.beginPath();
        ctx.fillStyle="#FF0000";
        ctx.fillRect(0,0,20,20);

    }
    window.onload=function(){
        drawMap(map);
        drawPlayer();
    }
}
export default CreateMap;