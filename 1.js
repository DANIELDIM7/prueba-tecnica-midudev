//

const listOfMovements = ["R", "R", "U", "U"];

export function maxInstructions(movements) {
  let x = 0,
    y = 0,
    max = 0;

  movements.forEach((mov) => {
    if (mov === "L") x--;
    if (mov === "R") x++;
    if (mov === "U") y++;
    if (mov === "D") y--;

    const current = Math.abs(x) + Math.abs(y);
    if(current> max) max = current //Si el número máximo es mayor que max entonces es igual a current
  });

  return max;
}
 