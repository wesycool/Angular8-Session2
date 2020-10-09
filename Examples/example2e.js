function letDemo(a) {
    var a = 10; //Compiler Error: TS2300: Duplicate identifier 'a'
    var b = 20;
    return a + b;
}
