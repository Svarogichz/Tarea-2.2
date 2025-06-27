
    const camposTexto = ["fnom", "lappat", "lapmat"];
    camposTexto.forEach(id => {
      const campo = document.getElementById(id);
      campo.addEventListener("input", function () {
        this.value = this.value.toUpperCase();
      });
    });

    function validarFormulario() {
      const clave = document.getElementById("lclave").value;
      if (clave <= 0) {
        alert("La clave debe ser un número mayor a cero.");
        return false;
      }
      return true;
    }
