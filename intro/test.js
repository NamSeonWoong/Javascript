function solution(s) {
    var answer = '';
    var res = s.length % 2
    console.log(res)
    if (res === 1) {
        answer = s.indexOf(s.length / 2)
    } else {
        answer = s.slice(s.length / 2 - 1, s.length / 2 + 1)
    }

    return answer;
}
console.log(solution('abc'))