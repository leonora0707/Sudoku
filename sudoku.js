class Sudoku
{
    constructor()
    {
        this.question = [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
        ];
    }

    FillGrid(row,col) 
    {
        if (col == 9)
        {
            col = 0;
            row++;
            if (row == 9) return true; // 全てのセルが埋まったら終了
        }
            
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.ArrayShuffle(numbers);
        
        for (let i = 0; i < numbers.length;i++)
        {
            if (this.IsSafe(row, col, numbers[i]))
            {
                this.question[row][col] = numbers[i];
                if (this.FillGrid(row, col + 1)) return true;
                this.question[row][col] = 0;
            }
        }
        return false;
    }

    IsSafe(row, col, num)
    {
        // 行と列に同じ数字がないか確認
        for (let x = 0; x < 9; x++) {
            if (this.question[row][x] === num || this.question[x][col] === num) {
                return false;
            }
        }

        // 3x3のサブグリッドに同じ数字がないか確認
        const startRow = row - (row % 3); // サブグリッドの開始行
        const startCol = col - (col % 3); // サブグリッドの開始列
        for (let i = 0; i < 3; i++) 
        {
            for (let j = 0; j < 3; j++) 
            {
                if (this.question[startRow + i][startCol + j] === num) 
                {
                    return false;
                }
            }
        }

        // 全てのチェックを通過すれば安全
        return true;
    }

    ArrayShuffle(array)
    {
        for(var i = array.length - 1; i > 0; i--){
            var r = Math.floor(Math.random() * (i + 1));
            var tmp = array[i];
            array[i] = array[r];
            array[r] = tmp;
        }
    }

    RemoveNumbers(count)
    {
        let removed = 0;
        this.question_display = JSON.parse(JSON.stringify(this.question));
        console.table(this.question_display);
        while (removed < count) {
            // ランダムにセルを選択
            const row = Math.floor(Math.random() * 9);
            const col = Math.floor(Math.random() * 9);
    
            // 既に空白でない場合に削除
            if (this.question_display[row][col] !== 0) {
                this.question_display[row][col] = 0;
                removed++;
            }
        }
    }

    MatchAnswers(grid)
    {
        
    }



}