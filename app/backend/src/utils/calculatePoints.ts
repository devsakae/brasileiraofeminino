export default function calculatePoints(hg: number, ag: number) {
  let p = 0;
  let v = 0;
  let d = 0;
  let l = 0;
  if (hg > ag) {
    p += 3;
    v += 1;
  } if (hg === ag) {
    p += 1;
    d += 1;
  } else {
    l += 1;
  }
  return ({ points: p, v, d, l });
}
