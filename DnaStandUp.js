// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


function DNAStrand(dna) {
    const complementMap = {
      'A': 'T',
      'T': 'A',
      'C': 'G',
      'G': 'C'
    };
  
    // Convert the DNA string into an array of characters,
    // map each character to its complement, and join them back together.
    const complementaryStrand = dna.split('').map(char => complementMap[char]).join('');
  
    return complementaryStrand;
  }
  
  function parts() {
    const dna1 = "ATTGC";
    const dna2 = "GTAT";
    
    const result1 = DNAStrand(dna1);
    const result2 = DNAStrand(dna2);
  
    return [result1, result2];
  }
  
  console.log(parts()); // Example usage
  