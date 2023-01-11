let board, Turn, position;
let turncountWKing = 0;
let turncountBKing = 0;
let turncountTopLeftRook = 0;
let turncountTopRightRook = 0;
let turncountBotLeftRook = 0;
let turncountBotRightRook = 0;
let count = 0;
let RookR = 1;
let WKing = "WKing";
let WPawn = "WPawn";
let WQueen = "WQueen";
let WRook = "WRook";
let WBishop = "WBishop";
let WKnight = "WKnight";
let BKing = "BKing";
let BPawn = "BPawn";
let BQueen = "BQueen";
let BRook = "BRook";
let BBishop = "BBishop";
let BKnight = "BKnight";
let WKingState = "Alive";
let BKingState = "Alive";
for(let i = 0; i<8; i++)
{
    for(let j = 0; j<8; j++)
    {
        document.getElementById(i+"_"+j).style.width = "90px";
        document.getElementById(i+"_"+j).style.height = "90px";
    }
}
function StartGame()
{
    board = 
    [
        ["BRook", "BKnight", "BBishop", "BQueen", "BKing", "BBishop", "BKnight", "BRook"],
        ["BPawn", "BPawn", "BPawn", "BPawn", "BPawn", "BPawn", "BPawn", "BPawn"],
        ["E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E"],
        ["WPawn", "WPawn", "WPawn", "WPawn", "WPawn", "WPawn", "WPawn", "WPawn"],
        ["WRook", "WKnight", "WBishop", "WQueen", "WKing", "WBishop", "WKnight", "WRook"]
    ];
    Turn = "W";
    ResetBoardBackground();
    PrintBoard(board, Turn);
}
function PrintBoard(board)
{
    for (let i = 0; i<8; i++)
    {
        for (let j = 0; j<8; j++)
        {
            if((board[i][j])[0] == "B")
            {
                position = i+"_"+j
                document.getElementById(i+"_"+j).innerHTML = "<img src = 'img/"+board[i][j]+".png' class = 'pos"+position+"' onClick = 'Blackmove"+board[i][j]+"("+i+", "+j+")'>";
            }
            if((board[i][j])[0] == "W")
            {
                position = i+"_"+j
                document.getElementById(i+"_"+j).innerHTML = "<img src = 'img/"+board[i][j]+".png' class = 'pos"+position+"' onClick = 'Whitemove"+board[i][j]+"("+i+", "+j+")'>";
            }
            if((board[i][j])[0] == "E")
            {
                position = i+"_"+j
                document.getElementById(i+"_"+j).innerHTML = "<img src = 'img/"+board[i][j]+".png' class = 'pos"+position+"'>";
            }
        }
    }
}
function WhitemoveWPawn(y, x)
{
    if(Turn == "B")
    {
        return;
    }
    ResetBoardBackground();
    if (y == 6)
    {
        if(board[y-1][x] == "E" && board[y-2][x] == "E")
        {
            document.getElementById((y-1)+"_"+x).style.backgroundColor = "green";
            document.getElementById((y-2)+"_"+x).style.backgroundColor = "green";
        }
        if(board[y-1][x] == "E" && board[y-2][x] != "E")
        {
            document.getElementById((y-1)+"_"+x).style.backgroundColor = "green";
        }
    }
    else
    {
        if(y != 0)
        {
            if(board[y-1][x] == "E")
            {
                document.getElementById((y-1)+"_"+x).style.backgroundColor = "green";
            }
        }
    }
    if(y>0 && x<7)
    {
        if((board[y-1][x+1])[0] == "B")
        {
            document.getElementById((y-1)+"_"+(x+1)).style.backgroundColor = "green";
        }
    }
    if(y>0 && x>0)
    {
        if((board[y-1][x-1])[0] == "B")
        {
            document.getElementById((y-1)+"_"+(x-1)).style.backgroundColor = "green";
        }
    }
    AddFunctionToGreenSquares(y, x, board[y][x]);
}
function ResetBoardBackground()
{
    for(let i = 0; i<8; i++)
    {
        for(let j = 0; j<8; j++)
        {
            if(i%2 != 0 && j%2 == 0)
            {
                document.getElementById(i+"_"+j).style.backgroundColor = "gray";
            }
            if(i%2 == 0 && j%2 != 0)
            {
                document.getElementById(i+"_"+j).style.backgroundColor = "gray";
            }
            if(i%2 == 0 && j%2 == 0)
            {
                document.getElementById(i+"_"+j).style.backgroundColor = "white";
            }
            if(i%2 != 0 && j%2 !=0)
            {
                document.getElementById(i+"_"+j).style.backgroundColor = "white";
            }
        }
    }
}
function WhitemoveWKnight(y, x)
{
    if(Turn == "B")
    {
        return;
    }
    ResetBoardBackground();
    if(y >= 2 && x <= 6)
    {
        if(board[y-2][x+1] == "E" || (board[y-2][x+1])[0] == "B")
        {
            document.getElementById((y-2)+"_"+(x+1)).style.backgroundColor = "green";
        }
    }
    //up left
    if(y >= 2 && x >= 1)
    {
        if(board[y-2][x-1] == "E" || (board[y-2][x-1])[0] == "B")
        {
            document.getElementById((y-2)+"_"+(x-1)).style.backgroundColor = "green";
        }
    }
    //down right
    if(y <= 5 && x <= 6)
    {
        if(board[y+2][x+1] == "E" || (board[y+2][x+1])[0] == "B")
        {
            document.getElementById((y+2)+"_"+(x+1)).style.backgroundColor = "green";
        }
    }
    //down left
    if(y <= 5 && x >= 1)
    {
        if(board[y+2][x-1] == "E" || (board[y+2][x-1])[0] == "B")
        {
            document.getElementById((y+2)+"_"+(x-1)).style.backgroundColor = "green";
        }
    }
    //right down
    if(y <= 6 && x <= 5)
    {
        if(board[y+1][x+2] == "E" || (board[y+1][x+2])[0] == "B")
        {
            document.getElementById((y+1)+"_"+(x+2)).style.backgroundColor = "green";
        }
    }
    //right up
    if(y >= 1 && x <= 5)
    {
        if(board[y-1][x+2] == "E" || (board[y-1][x+2])[0] == "B")
        {
            document.getElementById((y-1)+"_"+(x+2)).style.backgroundColor = "green";
        }
    }
    //left down
    if(y <= 6 && x >= 2)
    {
        if(board[y+1][x-2] == "E" || (board[y+1][x-2])[0] == "B")
        {
            document.getElementById((y+1)+"_"+(x-2)).style.backgroundColor = "green";
        }
    }
    //left up
    if(y >= 1 && x >= 2)
    {
        if(board[y-1][x-2] == "E" || (board[y-1][x-2])[0] == "B")
        {
            document.getElementById((y-1)+"_"+(x-2)).style.backgroundColor = "green";
        }
    }
    AddFunctionToGreenSquares(y, x, board[y][x]);
}
function WhitemoveWRook(y, x)
{
    if(Turn == "B")
    {
        return;
    }
    ResetBoardBackground();
    //Up
    if(y>0)
    {
        if((board[y-1][x])[0] != "W")
        {
            document.getElementById((y-1)+"_"+x).style.backgroundColor = "green";
        }
    }
    for(let i = 1; i<(y+1); i++)
    {
        if(board[y-i][x] == "E")
        {
            document.getElementById((y-i)+"_"+x).style.backgroundColor = "green";
        }
        if((board[y-i][x])[0] == "W")
        {
            break;
        }
        if((board[y-i][x])[0] == "B")
        {
            document.getElementById((y-i)+"_"+x).style.backgroundColor = "green";
            break;
        }
    }
    //Down
    if(y<7)
    {
        if((board[y+1][x])[0] != "W")
        {
            document.getElementById((y+1)+"_"+x).style.backgroundColor = "green";
        }
    }
    for(let i = 1; i<(8-y); i++)
    {
        if(board[y+i][x] == "E")
        {
            document.getElementById((y+i)+"_"+x).style.backgroundColor = "green";
        }
        if((board[y+i][x])[0] == "W")
        {
            break;
        }
        if((board[y+i][x])[0] == "B")
        {
            document.getElementById((y+i)+"_"+x).style.backgroundColor = "green";
            break;
        }
    }
    //Right
    if(x<7)
    {
        if((board[y][x+1])[0] != "W")
        {
            document.getElementById(y+"_"+(x+1)).style.backgroundColor = "green";
        }
    }
    for(let i = 1; i<(8-x); i++)
    {
        if(board[y][x+i] == "E")
        {
            document.getElementById(y+"_"+(x+i)).style.backgroundColor = "green";
        }
        if((board[y][x+i])[0] == "W")
        {
            break;
        }
        if((board[y][x+i])[0] == "B")
        {
            document.getElementById(y+"_"+(x+i)).style.backgroundColor = "green";
            break;
        }
    }
    //Left
    if(x>0)
    {
        if((board[y][x-1])[0] != "W")
        {
            document.getElementById(y+"_"+(x-1)).style.backgroundColor = "green";
        }
    }
    for(let i = 1; i<(x+1); i++)
    {
        if(board[y][x-i] == "E")
        {
            document.getElementById(y+"_"+(x-i)).style.backgroundColor = "green";
        }
        if((board[y][x-i])[0] == "W")
        {
            break;
        }
        if((board[y][x-i])[0] == "B")
        {
            document.getElementById(y+"_"+(x-i)).style.backgroundColor = "green";
            break;
        }
    }
    AddFunctionToGreenSquares(y, x, board[y][x]);
}
function WhitemoveWBishop(y, x)
{
    if(Turn == "B")
    {
        return;
    }
    ResetBoardBackground();
    //Up Right
    for(let i = 1; i<=7-x || i<=x || i<=7-y || i<=y; i++)
    {
        if((x+i) > 7 || (y-i) < 0)
        {
            break;
        }
        if(board[y-i][x+i] == "E")
        {
            document.getElementById((y-i)+"_"+(x+i)).style.backgroundColor = "green";
        }
        if((board[y-i][x+i])[0] == "W")
        {
            break;
        }
        if((board[y-i][x+i])[0] == "B")
        {
            document.getElementById((y-i)+"_"+(x+i)).style.backgroundColor = "green";
            break;
        }
    }
    //Up Left
    for(let i = 1; i<=7-x || i<=x || i<=7-y || i<=y; i++)
    {
        if((x-i) < 0 || (y-i) < 0)
        {
            break;
        }
        if(board[y-i][x-i] == "E")
        {
            document.getElementById((y-i)+"_"+(x-i)).style.backgroundColor = "green";
        }
        if((board[y-i][x-i])[0] == "W")
        {
            break;
        }
        if((board[y-i][x-i])[0] == "B")
        {
            document.getElementById((y-i)+"_"+(x-i)).style.backgroundColor = "green";
            break;
        }
    }
    //Down Left
    for(let i = 1; i<=7-x || i<=x || i<=7-y || i<=y; i++)
    {
        if((x-i) < 0 || (y+i) > 7)
        {
            break;
        }
        if(board[y+i][x-i] == "E")
        {
            document.getElementById((y+i)+"_"+(x-i)).style.backgroundColor = "green";
        }
        if((board[y+i][x-i])[0] == "W")
        {
            break;
        }
        if((board[y+i][x-i])[0] == "B")
        {
            document.getElementById((y+i)+"_"+(x-i)).style.backgroundColor = "green";
            break;
        }
    }
    //Down Right
    for(let i = 1; i<=7-x || i<=x || i<=7-y || i<=y; i++)
    {
        if((x+i) >7 || (y+i) > 7)
        {
            break;
        }
        if(board[y+i][x+i] == "E")
        {
            document.getElementById((y+i)+"_"+(x+i)).style.backgroundColor = "green";
        }
        if((board[y+i][x+i])[0] == "W")
        {
            break;
        }
        if((board[y+i][x+i])[0] == "B")
        {
            document.getElementById((y+i)+"_"+(x+i)).style.backgroundColor = "green";
            break;
        }
    }
    AddFunctionToGreenSquares(y, x, board[y][x]);
}
function WhitemoveWKing(y, x)
{
    if(Turn == "B")
    {
        return;
    }
    ResetBoardBackground();
    if(turncountWKing == 0 && turncountBotRightRook == 0)
    {
        if(board[y][x+1] == "E" && board[y][x+2] == "E")
        {
            document.getElementById(y+"_"+(x+2)).style.backgroundColor = "green";
        }
    }
    if(turncountWKing == 0 && turncountBotLeftRook == 0)
    {
        if(board[y][x-1] == "E" && board[y][x-2] == "E" && board[y][x-3] == "E")
        {
            document.getElementById(y+"_"+(x-3)).style.backgroundColor = "green";
        }
    }
    if(x<7 && y<7)
    {
        if(board[y+1][x+1] == "E" || (board[y+1][x+1])[0] == "B")
        {
            document.getElementById((y+1)+"_"+(x+1)).style.backgroundColor = "green";
        }
    }
    if(x<7)
    {
        if(board[y][x+1] == "E" || (board[y][x+1])[0] == "B")
        {
            document.getElementById((y)+"_"+(x+1)).style.backgroundColor = "green";
        }
    }
    if(y<7)
    {
        if(board[y+1][x] == "E" || (board[y+1][x])[0] == "B")
        {
            document.getElementById((y+1)+"_"+(x)).style.backgroundColor = "green";
        }
    }
    if(y<7 && x>0)
    {
        if(board[y+1][x-1] == "E" || (board[y+1][x-1])[0] == "B")
        {
            document.getElementById((y+1)+"_"+(x-1)).style.backgroundColor = "green";
        }
    }
    if(y>0 && x<7)
    {
        if(board[y-1][x+1] == "E" || (board[y-1][x+1])[0] == "B")
        {
            document.getElementById((y-1)+"_"+(x+1)).style.backgroundColor = "green";
        }
    }
    if(y>0 && x>0)
    {
        if(board[y-1][x-1] == "E" || (board[y-1][x-1])[0] == "B")
        {
            document.getElementById((y-1)+"_"+(x-1)).style.backgroundColor = "green";
        }
    }
    if(y>0)
    {
        if(board[y-1][x] == "E" || (board[y-1][x])[0] == "B")
        {
            document.getElementById((y-1)+"_"+(x)).style.backgroundColor = "green";
        }
    }
    if(x>0)
    {
        if(board[y][x-1] == "E" || (board[y][x-1])[0] == "B")
        {
            document.getElementById((y)+"_"+(x-1)).style.backgroundColor = "green";
        }
    }
    AddFunctionToGreenSquares(y, x, board[y][x]);
}
function WhitemoveWQueen(y, x)
{
    if(Turn == "B")
    {
        return;
    }
    ResetBoardBackground();
    //Up
    if(y>0)
    {
        if((board[y-1][x])[0] != "W")
        {
            document.getElementById((y-1)+"_"+x).style.backgroundColor = "green";
        }
    }
    for(let i = 1; i<(y+1); i++)
    {
        if(board[y-i][x] == "E")
        {
            document.getElementById((y-i)+"_"+x).style.backgroundColor = "green";
        }
        if((board[y-i][x])[0] == "W")
        {
            break;
        }
        if((board[y-i][x])[0] == "B")
        {
            document.getElementById((y-i)+"_"+x).style.backgroundColor = "green";
            break;
        }
    }
    //Down
    if(y<7)
    {
        if((board[y+1][x])[0] != "W")
        {
            document.getElementById((y+1)+"_"+x).style.backgroundColor = "green";
        }
    }
    for(let i = 1; i<(8-y); i++)
    {
        if(board[y+i][x] == "E")
        {
            document.getElementById((y+i)+"_"+x).style.backgroundColor = "green";
        }
        if((board[y+i][x])[0] == "W")
        {
            break;
        }
        if((board[y+i][x])[0] == "B")
        {
            document.getElementById((y+i)+"_"+x).style.backgroundColor = "green";
            break;
        }
    }
    //Right
    if(x<7)
    {
        if((board[y][x+1])[0] != "W")
        {
            document.getElementById(y+"_"+(x+1)).style.backgroundColor = "green";
        }
    }
    for(let i = 1; i<(8-x); i++)
    {
        if(board[y][x+i] == "E")
        {
            document.getElementById(y+"_"+(x+i)).style.backgroundColor = "green";
        }
        if((board[y][x+i])[0] == "W")
        {
            break;
        }
        if((board[y][x+i])[0] == "B")
        {
            document.getElementById(y+"_"+(x+i)).style.backgroundColor = "green";
            break;
        }
    }
    //Left
    if(x>0)
    {
        if((board[y][x-1])[0] != "W")
        {
            document.getElementById(y+"_"+(x-1)).style.backgroundColor = "green";
        }
    }
    for(let i = 1; i<(1+x); i++)
    {
        if(board[y][x-i] == "E")
        {
            document.getElementById(y+"_"+(x-i)).style.backgroundColor = "green";
        }
        if((board[y][x-i])[0] == "W")
        {
            break;
        }
        if((board[y][x-i])[0] == "B")
        {
            document.getElementById(y+"_"+(x-i)).style.backgroundColor = "green";
            break;
        }
    }
    //Up Right
    for(let i = 1; i<=7-x || i<=x || i<=7-y || i<=y; i++)
    {
        if((x+i) > 7 || (y-i) < 0)
        {
            break;
        }
        if(board[y-i][x+i] == "E")
        {
            document.getElementById((y-i)+"_"+(x+i)).style.backgroundColor = "green";
        }
        if((board[y-i][x+i])[0] == "W")
        {
            break;
        }
        if((board[y-i][x+i])[0] == "B")
        {
            document.getElementById((y-i)+"_"+(x+i)).style.backgroundColor = "green";
            break;
        }
    }
    //Up Left
    for(let i = 1; i<=7-x || i<=x || i<=7-y || i<=y; i++)
    {
        if((x-i) < 0 || (y-i) < 0)
        {
            break;
        }
        if(board[y-i][x-i] == "E")
        {
            document.getElementById((y-i)+"_"+(x-i)).style.backgroundColor = "green";
        }
        if((board[y-i][x-i])[0] == "W")
        {
            break;
        }
        if((board[y-i][x-i])[0] == "B")
        {
            document.getElementById((y-i)+"_"+(x-i)).style.backgroundColor = "green";
            break;
        }
    }
    //Down Left
    for(let i = 1; i<=7-x || i<=x || i<=7-y || i<=y; i++)
    {
        if((x-i) < 0 || (y+i) > 7)
        {
            break;
        }
        if(board[y+i][x-i] == "E")
        {
            document.getElementById((y+i)+"_"+(x-i)).style.backgroundColor = "green";
        }
        if((board[y+i][x-i])[0] == "W")
        {
            break;
        }
        if((board[y+i][x-i])[0] == "B")
        {
            document.getElementById((y+i)+"_"+(x-i)).style.backgroundColor = "green";
            break;
        }
    }
    //Down Right
    for(let i = 1; i<=7-x || i<=x || i<=7-y || i<=y; i++)
    {
        if((x+i) >7 || (y+i) > 7)
        {
            break;
        }
        if(board[y+i][x+i] == "E")
        {
            document.getElementById((y+i)+"_"+(x+i)).style.backgroundColor = "green";
        }
        if((board[y+i][x+i])[0] == "W")
        {
            break;
        }
        if((board[y+i][x+i])[0] == "B")
        {
            document.getElementById((y+i)+"_"+(x+i)).style.backgroundColor = "green";
            break;
        }
    }
    AddFunctionToGreenSquares(y, x, board[y][x]);
}
function BlackmoveBKnight(y, x)
{
    if(Turn == "W")
    {
        return;
    }
    ResetBoardBackground();
    if(y >= 2 && x <= 6)
    {
        if(board[y-2][x+1] == "E" || (board[y-2][x+1])[0] == "W")
        {
            document.getElementById((y-2)+"_"+(x+1)).style.backgroundColor = "green";
        }
    }
    //up left
    if(y >= 2 && x >= 1)
    {
        if(board[y-2][x-1] == "E" || (board[y-2][x-1])[0] == "W")
        {
            document.getElementById((y-2)+"_"+(x-1)).style.backgroundColor = "green";
        }
    }
    //down right
    if(y <= 5 && x <= 6)
    {
        if(board[y+2][x+1] == "E" || (board[y+2][x+1])[0] == "W")
        {
            document.getElementById((y+2)+"_"+(x+1)).style.backgroundColor = "green";
        }
    }
    //down left
    if(y <= 5 && x >= 1)
    {
        if(board[y+2][x-1] == "E" || (board[y+2][x-1])[0] == "W")
        {
            document.getElementById((y+2)+"_"+(x-1)).style.backgroundColor = "green";
        }
    }
    //right down
    if(y <= 6 && x <= 5)
    {
        if(board[y+1][x+2] == "E" || (board[y+1][x+2])[0] == "W")
        {
            document.getElementById((y+1)+"_"+(x+2)).style.backgroundColor = "green";
        }
    }
    //right up
    if(y >= 1 && x <= 5)
    {
        if(board[y-1][x+2] == "E" || (board[y-1][x+2])[0] == "W")
        {
            document.getElementById((y-1)+"_"+(x+2)).style.backgroundColor = "green";
        }
    }
    //left down
    if(y <= 6 && x >= 2)
    {
        if(board[y+1][x-2] == "E" || (board[y+1][x-2])[0] == "W")
        {
            document.getElementById((y+1)+"_"+(x-2)).style.backgroundColor = "green";
        }
    }
    //left up
    if(y >= 1 && x >= 2)
    {
        if(board[y-1][x-2] == "E" || (board[y-1][x-2])[0] == "W")
        {
            document.getElementById((y-1)+"_"+(x-2)).style.backgroundColor = "green";
        }
    }
    AddFunctionToGreenSquares(y, x, board[y][x]);
}
function BlackmoveBRook(y, x)
{
    if(Turn == "W")
    {
        return;
    }
    ResetBoardBackground();
    //Up
    if(y>0)
    {
        if((board[y-1][x])[0] != "B")
        {
            document.getElementById((y-1)+"_"+x).style.backgroundColor = "green";
        }
    }
    for(let i = 1; i<(y+1); i++)
    {
        if(board[y-i][x] == "E")
        {
            document.getElementById((y-i)+"_"+x).style.backgroundColor = "green";
        }
        if((board[y-i][x])[0] == "B")
        {
            break;
        }
        if((board[y-i][x])[0] == "W")
        {
            document.getElementById((y-i)+"_"+x).style.backgroundColor = "green";
            break;
        }
    }
    //Down
    if(y<7)
    {
        if((board[y+1][x])[0] != "B")
        {
            document.getElementById((y+1)+"_"+x).style.backgroundColor = "green";
        }
    }
    for(let i = 1; i<(8-y); i++)
    {
        if(board[y+i][x] == "E")
        {
            document.getElementById((y+i)+"_"+x).style.backgroundColor = "green";
        }
        if((board[y+i][x])[0] == "B")
        {
            break;
        }
        if((board[y+i][x])[0] == "W")
        {
            document.getElementById((y+i)+"_"+x).style.backgroundColor = "green";
            break;
        }
    }
    //Right
    if(x<7)
    {
        if((board[y][x+1])[0] != "B")
        {
            document.getElementById(y+"_"+(x+1)).style.backgroundColor = "green";
        }
    }
    for(let i = 1; i<(8-x); i++)
    {
        if(board[y][x+i] == "E")
        {
            document.getElementById(y+"_"+(x+i)).style.backgroundColor = "green";
        }
        if((board[y][x+i])[0] == "B")
        {
            break;
        }
        if((board[y][x+i])[0] == "W")
        {
            document.getElementById(y+"_"+(x+i)).style.backgroundColor = "green";
            break;
        }
    }
    //Left
    if(x>0)
    {
        if((board[y][x-1])[0] != "B")
        {
            document.getElementById(y+"_"+(x-1)).style.backgroundColor = "green";
        }
    }
    for(let i = 1; i<(x+1); i++)
    {
        if(board[y][x-i] == "E")
        {
            document.getElementById(y+"_"+(x-i)).style.backgroundColor = "green";
        }
        if((board[y][x-i])[0] == "B")
        {
            break;
        }
        if((board[y][x-i])[0] == "W")
        {
            document.getElementById(y+"_"+(x-i)).style.backgroundColor = "green";
            break;
        }
    }
    AddFunctionToGreenSquares(y, x, board[y][x]);
}
function BlackmoveBBishop(y, x)
{
    if(Turn == "W")
    {
        return;
    }
    ResetBoardBackground();
    //Up Right
    for(let i = 1; i<=7-x || i<=x || i<=7-y || i<=y; i++)
    {
        if((x+i) > 7 || (y-i) < 0)
        {
            break;
        }
        if(board[y-i][x+i] == "E")
        {
            document.getElementById((y-i)+"_"+(x+i)).style.backgroundColor = "green";
        }
        if((board[y-i][x+i])[0] == "B")
        {
            break;
        }
        if((board[y-i][x+i])[0] == "W")
        {
            document.getElementById((y-i)+"_"+(x+i)).style.backgroundColor = "green";
            break;
        }
    }
    //Up Left
    for(let i = 1; i<=7-x || i<=x || i<=7-y || i<=y; i++)
    {
        if((x-i) < 0 || (y-i) < 0)
        {
            break;
        }
        if(board[y-i][x-i] == "E")
        {
            document.getElementById((y-i)+"_"+(x-i)).style.backgroundColor = "green";
        }
        if((board[y-i][x-i])[0] == "B")
        {
            break;
        }
        if((board[y-i][x-i])[0] == "W")
        {
            document.getElementById((y-i)+"_"+(x-i)).style.backgroundColor = "green";
            break;
        }
    }
    //Down Left
    for(let i = 1; i<=7-x || i<=x || i<=7-y || i<=y; i++)
    {
        if((x-i) < 0 || (y+i) > 7)
        {
            break;
        }
        if(board[y+i][x-i] == "E")
        {
            document.getElementById((y+i)+"_"+(x-i)).style.backgroundColor = "green";
        }
        if((board[y+i][x-i])[0] == "B")
        {
            break;
        }
        if((board[y+i][x-i])[0] == "W")
        {
            document.getElementById((y+i)+"_"+(x-i)).style.backgroundColor = "green";
            break;
        }
    }
    //Down Right
    for(let i = 1; i<=7-x || i<=x || i<=7-y || i<=y; i++)
    {
        if((x+i) >7 || (y+i) > 7)
        {
            break;
        }
        if(board[y+i][x+i] == "E")
        {
            document.getElementById((y+i)+"_"+(x+i)).style.backgroundColor = "green";
        }
        if((board[y+i][x+i])[0] == "B")
        {
            break;
        }
        if((board[y+i][x+i])[0] == "W")
        {
            document.getElementById((y+i)+"_"+(x+i)).style.backgroundColor = "green";
            break;
        }
    }
    AddFunctionToGreenSquares(y, x, board[y][x]);
}
function BlackmoveBQueen(y, x)
{
    if(Turn == "W")
    {
        return;
    }
    ResetBoardBackground();
    //Up
    if(y>0)
    {
        if((board[y-1][x])[0] != "B")
        {
            document.getElementById((y-1)+"_"+x).style.backgroundColor = "green";
        }
    }
    for(let i = 1; i<(y+1); i++)
    {
        if(board[y-i][x] == "E")
        {
            document.getElementById((y-i)+"_"+x).style.backgroundColor = "green";
        }
        if((board[y-i][x])[0] == "B")
        {
            break;
        }
        if((board[y-i][x])[0] == "W")
        {
            document.getElementById((y-i)+"_"+x).style.backgroundColor = "green";
            break;
        }
    }
    //Down
    if(y<7)
    {
        if((board[y+1][x])[0] != "B")
        {
            document.getElementById((y+1)+"_"+x).style.backgroundColor = "green";
        }
    }
    for(let i = 1; i<(8-y); i++)
    {
        if(board[y+i][x] == "E")
        {
            document.getElementById((y+i)+"_"+x).style.backgroundColor = "green";
        }
        if((board[y+i][x])[0] == "B")
        {
            break;
        }
        if((board[y+i][x])[0] == "W")
        {
            document.getElementById((y+i)+"_"+x).style.backgroundColor = "green";
            break;
        }
    }
    //Right
    if(x<7)
    {
        if((board[y][x+1])[0] != "B")
        {
            document.getElementById(y+"_"+(x+1)).style.backgroundColor = "green";
        }
    }
    for(let i = 1; i<(8-x); i++)
    {
        if(board[y][x+i] == "E")
        {
            document.getElementById(y+"_"+(x+i)).style.backgroundColor = "green";
        }
        if((board[y][x+i])[0] == "B")
        {
            break;
        }
        if((board[y][x+i])[0] == "W")
        {
            document.getElementById(y+"_"+(x+i)).style.backgroundColor = "green";
            break;
        }
    }
    //Left
    if(x>0)
    {
        if((board[y][x-1])[0] != "B")
        {
            document.getElementById(y+"_"+(x-1)).style.backgroundColor = "green";
        }
    }
    for(let i = 1; i<(x+1); i++)
    {
        if(board[y][x-i] == "E")
        {
            document.getElementById(y+"_"+(x-i)).style.backgroundColor = "green";
        }
        if((board[y][x-i])[0] == "B")
        {
            break;
        }
        if((board[y][x-i])[0] == "W")
        {
            document.getElementById(y+"_"+(x-i)).style.backgroundColor = "green";
            break;
        }
    }
    //Up Right
    for(let i = 1; i<=7-x || i<=x || i<=7-y || i<=y; i++)
    {
        if((x+i) > 7 || (y-i) < 0)
        {
            break;
        }
        if(board[y-i][x+i] == "E")
        {
            document.getElementById((y-i)+"_"+(x+i)).style.backgroundColor = "green";
        }
        if((board[y-i][x+i])[0] == "B")
        {
            break;
        }
        if((board[y-i][x+i])[0] == "W")
        {
            document.getElementById((y-i)+"_"+(x+i)).style.backgroundColor = "green";
            break;
        }
    }
    //Up Left
    for(let i = 1; i<=7-x || i<=x || i<=7-y || i<=y; i++)
    {
        if((x-i) < 0 || (y-i) < 0)
        {
            break;
        }
        if(board[y-i][x-i] == "E")
        {
            document.getElementById((y-i)+"_"+(x-i)).style.backgroundColor = "green";
        }
        if((board[y-i][x-i])[0] == "B")
        {
            break;
        }
        if((board[y-i][x-i])[0] == "W")
        {
            document.getElementById((y-i)+"_"+(x-i)).style.backgroundColor = "green";
            break;
        }
    }
    //Down Left
    for(let i = 1; i<=7-x || i<=x || i<=7-y || i<=y; i++)
    {
        if((x-i) < 0 || (y+i) > 7)
        {
            break;
        }
        if(board[y+i][x-i] == "E")
        {
            document.getElementById((y+i)+"_"+(x-i)).style.backgroundColor = "green";
        }
        if((board[y+i][x-i])[0] == "B")
        {
            break;
        }
        if((board[y+i][x-i])[0] == "W")
        {
            document.getElementById((y+i)+"_"+(x-i)).style.backgroundColor = "green";
            break;
        }
    }
    //Down Right
    for(let i = 1; i<=7-x || i<=x || i<=7-y || i<=y; i++)
    {
        if((x+i) >7 || (y+i) > 7)
        {
            break;
        }
        if(board[y+i][x+i] == "E")
        {
            document.getElementById((y+i)+"_"+(x+i)).style.backgroundColor = "green";
        }
        if((board[y+i][x+i])[0] == "B")
        {
            break;
        }
        if((board[y+i][x+i])[0] == "W")
        {
            document.getElementById((y+i)+"_"+(x+i)).style.backgroundColor = "green";
            break;
        }
    }
    AddFunctionToGreenSquares(y, x, board[y][x]);
}
function BlackmoveBPawn(y, x)
{
    if(Turn == "W")
    {
        return;
    }
    ResetBoardBackground();
    if (y == 1)
    {
        if(board[y+1][x] == "E" && board[y+2][x] == "E")
        {
            document.getElementById((y+1)+"_"+x).style.backgroundColor = "green";
            document.getElementById((y+2)+"_"+x).style.backgroundColor = "green";
        }
        if(board[y+1][x] == "E" && board[y+2][x] != "E")
        {
            document.getElementById((y+1)+"_"+x).style.backgroundColor = "green";
        }
    }
    else
    {
        if(y != 7)
        {
            if(board[y+1][x] == "E")
            {
                document.getElementById((y+1)+"_"+x).style.backgroundColor = "green";
            }
        }
    }
    if(y<7 && x<7)
    {
        if((board[y+1][x+1])[0] == "W")
        {
            document.getElementById((y+1)+"_"+(x+1)).style.backgroundColor = "green";
        }
    }
    if(y<7 && x>0)
    {
        if((board[y+1][x-1])[0] == "W")
    {
        document.getElementById((y+1)+"_"+(x-1)).style.backgroundColor = "green";
    }
    }
    AddFunctionToGreenSquares(y, x, board[y][x]);
}
function BlackmoveBKing(y, x)
{
    if(Turn == "W")
    {
        return;
    }
    ResetBoardBackground();
    if(turncountBKing == 0 && turncountTopRightRook == 0)
    {
        if(board[y][x+1] == "E" && board[y][x+2] == "E")
        {
            document.getElementById(y+"_"+(x+2)).style.backgroundColor = "green";
        }
    }
    if(turncountBKing == 0 && turncountTopLeftRook == 0)
    {
        if(board[y][x-1] == "E" && board[y][x-2] == "E" && board[y][x-3] == "E")
        {
            document.getElementById(y+"_"+(x-3)).style.backgroundColor = "green";
        }
    }
    if(x<7 && y<7)
    {
        if(board[y+1][x+1] == "E" || (board[y+1][x+1])[0] == "W")
        {
            document.getElementById((y+1)+"_"+(x+1)).style.backgroundColor = "green";
        }
    }
    if(x<7)
    {
        if(board[y][x+1] == "E" || (board[y][x+1])[0] == "W")
        {
            document.getElementById((y)+"_"+(x+1)).style.backgroundColor = "green";
        }
    }
    if(y<7)
    {
        if(board[y+1][x] == "E" || (board[y+1][x])[0] == "W")
        {
            document.getElementById((y+1)+"_"+(x)).style.backgroundColor = "green";
        }
    }
    if(y<7 && x>0)
    {
        if(board[y+1][x-1] == "E" || (board[y+1][x-1])[0] == "W")
        {
            document.getElementById((y+1)+"_"+(x-1)).style.backgroundColor = "green";
        }
    }
    if(y>0 && x<7)
    {
        if(board[y-1][x+1] == "E" || (board[y-1][x+1])[0] == "W")
        {
            document.getElementById((y-1)+"_"+(x+1)).style.backgroundColor = "green";
        }
    }
    if(y>0 && x>0)
    {
        if(board[y-1][x-1] == "E" || (board[y-1][x-1])[0] == "W")
        {
            document.getElementById((y-1)+"_"+(x-1)).style.backgroundColor = "green";
        }
    }
    if(y>0)
    {
        if(board[y-1][x] == "E" || (board[y-1][x])[0] == "W")
        {
            document.getElementById((y-1)+"_"+(x)).style.backgroundColor = "green";
        }
    }
    if(x>0)
    {
        if(board[y][x-1] == "E" || (board[y][x-1])[0] == "W")
        {
            document.getElementById((y)+"_"+(x-1)).style.backgroundColor = "green";
        }
    }
    AddFunctionToGreenSquares(y, x, board[y][x]);
}
function AddFunctionToGreenSquares(OriginalY, OriginalX, Type)
{
    for(let i = 0; i<8; i++)
    {
        for(let j = 0; j<8; j++)
        {
            if(document.getElementById(i+"_"+j).style.backgroundColor == "green")
            {
                document.getElementById(i+"_"+j).innerHTML = "<img src = 'img/"+board[i][j]+".png' onClick = 'ExecuteMovement("+OriginalY+", "+OriginalX+", "+board[OriginalY][OriginalX]+", "+i+", "+j+");'>";
            }
        } 
    }
}
function ExecuteMovement(OriginalY, OriginalX, Type, i, j)
{
    if(OriginalX<=5)
    {
        if(board[OriginalY][OriginalX] == "WKing" && j == (OriginalX+2))
        {
            turncountWKing++;
            board[OriginalY][OriginalX+1] = "WRook";
            board[OriginalY][OriginalX+2] = "WKing";
            board[OriginalY][OriginalX+3] = "E"; 
        }
    }
    if(OriginalX>=3)
    {
        if(board[OriginalY][OriginalX] == "WKing" && j == (OriginalX-3))
        {
            turncountWKing++;
            board[OriginalY][OriginalX-2] = "WRook";
            board[OriginalY][OriginalX-3] = "WKing";
            board[OriginalY][OriginalX-4] = "E"; 
        }
    }
    if(OriginalX<=5)
    {
        if(board[OriginalY][OriginalX] == "BKing" && j == (OriginalX+2))
        {
        turncountWKing++;
        board[OriginalY][OriginalX+1] = "BRook";
        board[OriginalY][OriginalX+2] = "BKing";
        board[OriginalY][OriginalX+3] = "E"; 
        }
    }
    if(OriginalX>=3)
    {
        if(board[OriginalY][OriginalX] == "BKing" && j == (OriginalX-3))
        {
            turncountWKing++;
            board[OriginalY][OriginalX-2] = "BRook";
            board[OriginalY][OriginalX-3] = "BKing";
            board[OriginalY][OriginalX-4] = "E"; 
        }
    }
    if(board[OriginalY][OriginalX] == "BRook" && OriginalY == 0 && OriginalX == 0)
    {
        turncountTopLeftRook++;
    }
    if(board[OriginalY][OriginalX] == "BRook" && OriginalY == 0 && OriginalX == 7)
    {
        turncountTopRightRook++;
    }
    if(board[OriginalY][OriginalX] == "WRook" && OriginalY == 7 && OriginalX == 0)
    {
        turncountBotLeftRook++;
    }
    if(board[OriginalY][OriginalX] == "WRook" && OriginalY == 7 && OriginalX == 7)
    {
        turncountBotRightRook++;
    }
    if(board[OriginalY][OriginalX] == "BKing")
    {
        turncountBKing++;
    }
    board[OriginalY][OriginalX] = "E";
    board[i][j] = Type;
    PrintBoard(board);
    ResetBoardBackground();
    if(Turn == "W")
    {
        Turn = "B";
    }
    else
    {
        Turn = "W";
    }
    CheckVictory();
}
function CheckVictory()
{
    loop:
    for(let i = 0; i<8; i++)
    {
        for(let j = 0; j<8; j++)
        {
            if(board[i][j] == "WKing")
            {
                WKingState = "Alive";
                break loop;
            }
            else
            {
                WKingState = "Dead";
            }
        }   
    }
    if(WKingState == "Dead")
    {
        alert("Black Won! Congratulations!");
        StartGame();
    }
    loop1:
    for(let i = 0; i<8; i++)
    {
        for(let j = 0; j<8; j++)
        {
            if(board[i][j] == "BKing")
            {
                BKingState = "Alive";
                break loop1;
            }
            else
            {
                BKingState = "Dead";
            }
        }   
    }
    if(BKingState == "Dead")
    {
        alert("White Won! Congratulations!");
        StartGame();
    }
}