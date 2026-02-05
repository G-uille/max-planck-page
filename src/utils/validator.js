export function required(value) {
  return !!value || "Este campo es requerido";
}

export function mail(value) {
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return regex.test(value) || "El correo no es de formato valido ";
}

export function password(value) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()\-+=_{}[\]:;"'<>,.?\\|]{8,}$/;
  return (
    regex.test(value) ||
    "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número"
  );
}

export function repeatPassword(value, password) {
  return value === password || "La contraseña no coinciden";
}

export function phoneNumber(value) {
  const regex = /^((\+595|0)9([6-9][1-9])\d{6})$/;

  return regex.test(value) || "Debe ingresar un número de teléfono válido";
}

export function maxLength(value, size) {
  return value.length <= size || `Máximo ${size} caracteres`;
}

export function isUrl(value) {
  const regex = /^(https?):\/\/([^\s/$.?#].\S*)*$/;

  return regex.test(value) || "Debe ingresar una url válida";
}

export function isNumeric(value) {
  const regex = /^\d+$/;
  return regex.test(value) || "Debe ingresar solo números";
}

export function isRUC(value) {
  const regex = /^\d{6,8}-?\d$/;
  return regex.test(value) || "Debe ingresar un RUC válido de Paraguay";
}

export function isAlphabet(value) {
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return regex.test(value) || "Debe ingresar solo letras";
}

export const minLength = (value, min = 4) => {
  if (!value || value.trim().length < min) {
    return `Debe tener al menos ${min} caracteres`;
  }
  return true;
};

export const formatUSD = (num) => {
  return Number(num)
    .toFixed(0)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const parseUSD = (text) => {
  return Number(text.replace("Gs. ", "").replace(/,/g, ""));
};

export function isDecimal(value) {
  const regex = /^\d+(\.\d+)?$/;
  return regex.test(value) || "Debe ser un número válido (permite decimales)";
}
