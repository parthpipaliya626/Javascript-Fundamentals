// # 2114
// Maximum NUmber of words found in sentences


let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];


var mostWordsFound = function(sentences) {
    let maxLen = 0;
    for(let i = 0; i < sentences.length; i++) {
       maxLen = Math.max(maxLen, sentences[i].split(" ").length );  
  }
  return maxLen;
};

console.log(mostWordsFound(sentences));















