const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addProperty(obj, key, valor) {
  return obj[key] = valor;
}

addProperty(lesson2, 'turno', 'manhã')

function showKeys(obj) {
  console.log(Object.keys(obj));
}

function sizeObject(obj) {
  return Object.keys(obj).length;
}

function listValuesObject(obj) {
  console.log(Object.values(obj))
}

//console.log(lesson2);
//console.log(lesson3.length)
//showKeys(lesson3);
//console.log('Tamanho = ' + sizeObject(lesson1));
listValuesObject(lesson1);