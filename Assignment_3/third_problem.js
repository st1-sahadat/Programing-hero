





// const countHashtags = caption =>
//   typeof caption !== "string"
//     ? "Invalid"
//     : ((tags) => ({
//         hashtagCount: tags.length,
//         longestTag: tags.length > 0 ? [...tags].sort((a, b) => b.length - a.length)[0] : ""
//       }))(caption.split(" ").filter(f => f.startsWith("#")).map(m => m.slice(1)));


const countHashtags = caption => {
    if(typeof caption !== "string"){
        return "Invalid"    
    }else{
   const hashFind = caption.split(" ").filter(f=>f.startsWith("#")).map(m=>m.slice(1));
   const hashtagCount = hashFind.length;
   const longestTag = hashFind.length > 0 
  ? [...hashFind].sort((a, b) => b.length - a.length)[0] 
  : "";
   return {hashtagCount, longestTag} 
    }    
}

console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"));
console.log(countHashtags("No hashtags here"));
console.log(countHashtags("#ai #ml data science"));
console.log(countHashtags(123));
console.log(countHashtags(["#fun"]));


