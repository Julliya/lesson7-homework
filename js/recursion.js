var n = Number(prompt('Введіть номер числа Фібоначчі'));

if (Number.isNaN(n)) {
    document.write('Ви помилились! Введіть, будьласка, число.');
} else {
    var result = fib(n);
     document.write("Значення числа Фібоначчі під номером " + n + " = " + result);
}
    function fib(n){
        if(n<3 && n>0){
        return 1;
    }else{
        return fib(n-1)+fib(n-2);
    }
}