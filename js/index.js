var n = Number(prompt('Введіть номер числа Фібоначчі'));

if (Number.isNaN(n)) {
    document.write('Ви помилились! Введіть, будьласка, число.');
} else {
    var k = 0;
    var m = 1;
    for (var i = 0; i < n; i++) {
        var t = k;
        k += m;
        m = t;
    }
    document.write("Значення числа Фібоначчі під номером " + n + " = " + k);
}
