function solution(a, b, c) {
    if(a === b && b === c && a === c)
        return (a+b+c) * (a*a + b*b + c*c) * (a*a*a + b*b*b + c*c*c);
    else if(a === b || b === c || a === c)
        return (a+b+c) * (a*a + b*b + c*c);
    else
        return a+b+c;
}