function attack (damage) {
  // Code disini
  return damage - 2
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  var result = 0;
  var currentDamage = damagePerAttack;

  for(i=numberOfAttacks; i > 0; i--){
    result = numberOfAttacks * attack(damagePerAttack)
  }
  return result
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90