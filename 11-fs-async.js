const {readFile, writeFile}=require('fs');  //Async

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    readFile('./content/sec.txt','utf8',(err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;

        writeFile("./content/result-async.txt",
        `the results is: ${first}, ${second}`,
        (err, result)=>{
            if (err){
                console.log(err);
                return;
            }
            console.log(result);
        });
    });
});