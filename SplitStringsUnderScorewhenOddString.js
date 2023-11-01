function solution(str) {
    const pairs = [];
    
    for (let i = 0; i < str.length; i += 2) {
      const pair = str.slice(i, i + 2);
      
      if (pair.length === 1) {
        pair += '_';
      }
      
      pairs.push(pair);
    }
    
    return pairs;
  }
  
  // Example usage:
  console.log(solution('abc'));      // Output: ['ab', 'c_']
  console.log(solution('abcdef'));   // Output: ['ab', 'cd', 'ef']
  console.log(solution('a'));        // Output: ['a_']
  