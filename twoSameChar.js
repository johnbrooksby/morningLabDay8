// function uniqueChar (str){
//     for(let i = 0; i < str.length; i++){
//         for(let j = i + 1; j < str.length; j++){
//             if(str[i] === str[j]){
//                 return false;
//             } 
                
//         }
            
//     }
//     return true;
// }
    


// const uniqueChar = (str) => {
//     let visited = [];
    
//     for(let i=0; i<str.length; i++){
//       if(visited.includes(str[i])){
//         return false;
//       }else{
//         visited.push(str[i]);
//       }
//     }
    
//     return true;
//   }

  const uniqueChar = (str) => new Set(str).size === str.length

  console.log(uniqueChar("coding"));