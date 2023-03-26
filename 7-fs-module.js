const fs = require('fs');

// const firstTxt = fs.readFileSync('first.txt' ,'utf8');
// console.log(firstTxt);

// fs.writeFileSync('./text/second.txt' , `hello this is second & ${firstTxt}` ,{flag :'a'});

fs.readFile('first.txt','utf8',(err , result)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    const firstTxt = result;
    console.log(firstTxt);

fs.writeFile('./text/s.txt',`thisbis alse second content ${firstTxt}` ,(err , result)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    const sTxt = result;
    console.log(sTxt);
})
}
)

// fs.writeFile('./text/s.txt',`thisbis alse second content ${firstTxt}` ,(err , result)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     const sTxt = result;
//     console.log(sTxt);
// });