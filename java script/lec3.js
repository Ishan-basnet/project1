function example() {
  //var chai functional block scoped hunxa block bhaneko{} ho ani function paxi ko block lai
  var x = 10; //functional block bhaninxa yo program ma functional block ra if else block garera duita block xa
  console.log(x);
  if (true) {
    // javascript top to down approach le kam garxa yei bhaera var chai functional block scoped bhaera kam
    var x = 20; //garne bhakole tala patti deko value chai print hunxa
    console.log(x);
  }
  console.log(x); // script lai run garna function lai last ma call garnai parxa
}
example();

function examples() {
  //let chai block scoped hunxa matlab if else wala block ma a ko value 20 halda tei block bhitra print
  let a = 10; //garyo bhane matra 20 print hunxa natra functional block ko value print hunxa
  console.log(a);
  if (true) {
    let a = 20;
    console.log(a);
  }
  console.log(a);
}
examples();

function example1() {
  const b = 100; //const chai block scoped hunxa matlab if else wala block ma a ko value 20 halda tei block bhitra print
  console.log(b); //garyo bhane matra 20 print hunxa natra functional block ko value print hunxa
  if (true) {
    const b = 200;
    console.log(b);
  }
  console.log(b);
}
example1();
