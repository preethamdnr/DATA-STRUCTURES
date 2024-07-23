<<<<<<< HEAD
function rps(p1, p2) {
  
    const winningConditions = {
        "Rock": "Scissors",
        "Scissors": "Paper",
        "Paper": "Rock"
    };
    
  
    if (p1 === p2) {
        return "It's a draw";
    }
    
    
    if (winningConditions[p1] === p2) {
        return "The winner is p1";
    } else {
        return "The winner is p2";
    }
}


console.log(rps("Rock", "Paper"));       
console.log(rps("Scissors", "Paper"));  
console.log(rps("Paper", "Paper"));      
=======
function rps(p1, p2) {
  
    const winningConditions = {
        "Rock": "Scissors",
        "Scissors": "Paper",
        "Paper": "Rock"
    };
    
  
    if (p1 === p2) {
        return "It's a draw";
    }
    
    
    if (winningConditions[p1] === p2) {
        return "The winner is p1";
    } else {
        return "The winner is p2";
    }
}


console.log(rps("Rock", "Paper"));       
console.log(rps("Scissors", "Paper"));  
console.log(rps("Paper", "Paper"));      
>>>>>>> bcba8adcc1334ca6612791ec69261e590221e233
