const num = +prompt('Введіть число яке хочите піднести до ступеню.')
const degree = +prompt('Введіть ступінь в яку треба звести число.')

function pow(num, degree) {
    if (degree != 1) {
        return num * pow(num, degree - 1);
    } else {
        return num;
    }
}

alert(`Число ${num} у ${degree} ступені, дорівнює ${pow(num, degree)}`);