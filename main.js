const nombreDelGasto = document.getElementById("gasto");
const valorGasto = document.getElementById("valor");
const btnAgregar = document.getElementById("agregar-gasto");
const gastos = document.getElementById("gastos");
const gastoTotal = document.getElementById("gasto-mensual");

let total = 0;

btnAgregar.addEventListener("click", () => {
  if (nombreDelGasto.value == "" || valorGasto.value == "") {
    alert("Ingresa un nombre y precio.");
  } else {
    let gasto = document.createElement("div");
    gasto.classList.add("gastos__fila");

    let nombreGasto = document.createElement("div");
    nombreGasto.classList.add("nombre");
    nombreGasto.textContent = nombreDelGasto.value;

    let precioGasto = document.createElement("div");
    precioGasto.classList.add("precio");
    precioGasto.textContent = `${valorGasto.value} $`;

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "ELIMINAR";
    btnEliminar.classList.add("btn");

    btnEliminar.addEventListener("click", () => {
      gastos.removeChild(gasto);
      total -= precio;
      gastoTotal.textContent = `${total} $`;
    });

    gasto.appendChild(nombreGasto);
    gasto.appendChild(precioGasto);
    gasto.appendChild(btnEliminar);

    gastos.append(gasto);

    let precio = parseFloat(valorGasto.value);

    total += precio;
    gastoTotal.textContent = `${total} $`;

    nombreDelGasto.value = "";
    valorGasto.value = "";
  }
});
