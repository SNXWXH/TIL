function solution(n, m) {
  let a;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0 && m % i === 0) a = i;
  }
  let b = (n * m) / a;
  return [a, b];
}
