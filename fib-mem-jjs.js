var memo = [];

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  if (memo[n] === undefined) {
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }
  return memo[n];
}

var n = arguments[0];
var f = fibonacci(n);
print(f);