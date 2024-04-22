function isPrime(num) {
    // Handle non-positive numbers and 1
    if (num <= 1) return false;
  
    // Handle even numbers (except 2)
    if (num % 2 === 0 && num !== 2) return false;
  
    // Loop up to the square root of the number (optimized)
    const sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i += 2) {
      if (num % i === 0) return false;
    }
  
    // If no divisors found, it's prime
    return true;
  }
  