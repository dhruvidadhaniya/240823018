const fs=require('fs');
fs.writeFile("text.txt","hello mca-Z1 class",function(err){
    if(err)throw err;
    console.log("file saved sucssesfully");
});
fs.readFile("text.txt","utf-8",function(err,data){
    if(err)throw err;
    console.log("file content: ",data);
});