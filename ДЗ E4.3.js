//Задание 1
const human = {
    city: 'Moscow',
    country: 'China'
  }
  
  const man = Object.create(human);
  man.ownCity = "Piter";
  man.ownCountry = "Russia";
  
  //Функция вывода собственных ключей и значений объекта
  function func(obj){
    for (let key in obj) {
      
      if (man.hasOwnProperty(key)) {
  
          console.log(key);
          console.log(man[key]);
      }   
  }
  }
  
  func(man)

//Задание 2
// сама функция проверял на объектах из задания 1 
function checkproperty(property, obj){
    console.log(property  in obj)
}

checkproperty('wcity', man)

//Задание 3
function emptyObj(){
    return Object.create(null)
  }