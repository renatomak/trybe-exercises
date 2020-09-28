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

let allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

function totalAlunos(objs){
  let total = 0;
  /* const chaves = Object.keys(objs);
  for(let i = 0; i < Object.keys(objs).length; i += 1){
    total += objs[chaves[i]].numeroEstudantes;
  } */

  for(const key in objs){
    total += objs[key].numeroEstudantes;
  }

  return total;
}

//console.log(lesson2);
//console.log(lesson3.length)
//showKeys(lesson3);
//console.log('Tamanho = ' + sizeObject(lesson1));
//listValuesObject(lesson1);
//console.log(allLessons)

console.log(totalAlunos(allLessons));

