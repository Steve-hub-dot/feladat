export function assignment(colors) {
    if(colors.length < 2) {
        return 0;
    }
    else if(colors.length == 2) {
        return 1;
    }
    else{
        let answer = 1;
        
        function factorial(n){
            let factorial = 1;
            for(let i = n; i > 0; i--) {
                factorial = factorial*i;
            }
            return factorial;
        }

        function nCr(n, r) {
            return (factorial(n)/(factorial(r)*(factorial(n-r))))
        }

        for(let i = 2; i < colors.length+1; i++) {
            answer = answer + nCr(colors.length, i);
        }
        return answer;


    }
}