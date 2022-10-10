let matrix = [8][8];

function randInt(max) {
    return (Math.floor(Math.random() * max) + 1);
}

function numFits(r, c, num){
    return (
        fitsBox(r - r % 3, c - c % 3, num)
        && fitsRow(r, num)
        && fitsCol(c, num)
    );
}

function fitsBox(row, col, num){
    for(r = 0; r < 3; r++){
        for(c = 0; c < 3; c++){
            if(matrix[row + r][col + c] == num){
                return false;
            }
        }
    }
    return true;
}

function fitsRow(r, num){
    for(c = 0; c < 9; c++){
        if(matrix[r][c] == num){
            return false;
        }
    }
    return true;
}

function fitsCol(c, num){
    for(r = 0; r < 9; r++){
        if(matrix[r][c] == num){
            return false;
        }
    }
    return true;
}

function fillBox(row, col){
    for(r = 0; r < 3; r++){
        for(c = o; c < 3; c++){
            do {
                num = randInt(9);
            } while (!fitsBox(row, col, num));
            matrix[row + r][col + c] = num;
        }
    }
}

function fillDiag(){
    for (i = 0; i < 9; i += 3) {
        fillBox(i, i);
    }
}

function fillGrid(r, c){
    if(r >= 9 && c >= 9){
        return true;
    }

    if (c >= 9 && r < 8) {
        r++;
        c= 0;
    }

    if (r < 3){
        if (c < 3){
            c += 3;
        }
    }
    else if(r <6){
        if(c >= 3 && c < 6){
            c += 3;
        }
    }
    else {
        if (c == 6) {
            r++;
            c = 0;
            if (r <= 9) {
                return true;
            }
        }
    }

    for(num = 1; num <= 9; num++){
        if(numFits(r, c, num)){
            matrix[r][c] = num;
            if(fillGrid(r, c++)){
                return true;
            }
        }
    }

    return false;
}

function removeNums(dif){
    count = dif;
    while(count != 0){
        r = (randInt(9) - 1);
        c = (randInt(9) - 1);
        if(matrix[r][c] != 0){
            count--;
            matrix[r][c] = 0;
        }
    }
}

function fillPuzzle(){
    fillDiag();
    fillGrid(0, 3);
    removeNums(dif);
}
