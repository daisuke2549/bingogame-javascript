'use strict';


{
//  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

/* 関数 */
function createColumn(col){
    const source = [];
    for (let i = 0; i < 15; i++){
      // 1 ... 15
      // source[i] = i + 1 + 15 * 0;
      // 16 ... 30
      // source[i] = i + 1 + 15 * 1;
      // 31 ... 45
      // source[i] = i + 1 + 15 * 2;
    }
    
}





//  Math.floor(Math.random() * (14+1))
//  Math.floor(Math.random() * source.length)

 const b = [];
//  b[0] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
//  b[1] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
//  b[2] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
//  b[3] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
//  b[4] = source.splice(Math.floor(Math.random() * source.length), 1)[0];

for (let i = 0; i < 5; i++){
    b[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
}

 console.log(b);

}

const columns = [];
columns[0] = createColumn(0);
columns[1] = createColumn(0);
columns[2] = createColumn(0);
columns[3] = createColumn(0);
columns[4] = createColumn(0);




