export default function calculateScore(teamOneGoals: number, teamTwoGoals: number) {
  let point = 0;
  let victory = 0;
  let draw = 0;
  let loss = 0;
  if (+teamOneGoals > +teamTwoGoals) {
    point += 3;
    victory += 1;
  } if (+teamOneGoals === +teamTwoGoals) {
    point += 1;
    draw += 1;
  } if (+teamOneGoals < +teamTwoGoals) {
    loss += 1;
  }
  return ({ point, victory, draw, loss });
}
