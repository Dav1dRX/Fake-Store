var arr = [[8,2,3],
           [4,6,6],
           [7,8,9]];

var a = arr[0][0] 
var b = arr[0][1]
var c = arr[0][1]
var d = arr[1][0]

console.log(a,b,c,d)

function DiagonalPrincipal(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      console.log(arr[i][i]);
    }
  }
//////////////////////////////////

  function imprimirPares(matrim) {
    // Recorrer la matriz fila por fila
    for (let i = 0; i < matrim.length; i++) {
      const fila = matrim[i]; // Obtener la fila actual
  
      // Recorrer la fila elemento por elemento
      for (let j = 0; j < fila.length; j++) {
        const elemento = fila[j]; // Obtener el elemento actual
  
        // Verificar si el elemento es par
        if (elemento % 2 == 0) {
          console.log(elemento);
        }
      }
    }
  }
  
  // Ejemplo de uso
  const matrim = [[1, 9, 3], [4, 5, 9], [7, 8, 9]];
  imprimirPares(matrim); 
/////////////////////////////////////

function sumarMatrices(matriz1, matriz2) {
    // Verificar que las matrices tienen el mismo tamaño
    if (matriz1.length !== matriz2.length ||
        matriz1[0].length !== matriz2[0].length) {
      throw new Error("Las matrices deben tener el mismo tamaño");
    }
  
    // Sumar las matrices elemento a elemento
    const matrizSuma = matriz1.map((fila, i) =>
      fila.map((elemento, j) => elemento + matriz2[i][j])
    );
  
    return matrizSuma;
  }
  
  // Ejemplo de uso
  const matriz1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const matriz2 = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
  
  const matrizSuma = sumarMatrices(matriz1, matriz2);
  console.log(matrizSuma);
  
  
  //////////////////////////////////////////

function mulMatrices(matriz11, matriz22) {
    // Verificar que las matrices tienen el mismo tamaño
    if (matriz11[0].length !== matriz22.length) {
      throw new Error("Las matrices deben ser compatibles");
    }
  
    // Sumar las matrices elemento a elemento
    const matrizmul = matriz11.map((fila, i) =>
      fila.map((elemento, j) => elemento * matriz22[i][j])
    );
  
    return matrizmul;
  }
  
  // Ejemplo de uso
  const matriz11 = [[1,2, 3], [4, 5, 6], [7, 8, 9]];
  const matriz22 = [[ 2, 2, 7], [6, 5, 4], [3, 2, 1]];
  const matrizmul = mulMatrices(matriz11, matriz22);
  console.log(matrizmul);