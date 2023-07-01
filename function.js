export function assignment(colors){
    if(colors.length > 2){
        return (colors.length-1)*2
    }
    else if(colors.length < 2){
        return 0;
    }
    else{
        return 1;
    }
}