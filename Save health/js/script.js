console.log('Scrip connected!');

const arrayOfLoveWishes = [
    'Кохайте один одного! Це найважливіше',
    'Будьте щасливі!',
    'Кохання це важливо!',
    'Нехай кохання зігріває твоє серце щомиті!',
    'Хай любов завжди буде твоєю силою і натхненням!',
    'Бажаю тобі романтики, ніжності та тепла!',
    'Нехай твоя любов буде такою ж красивою, як ти!',
    'Бажаю тобі справжнього, щирого та вірного кохання!',
    "Нехай твоя любов буде такою ж яскравою, як сонце в небі!",
  "Бажаю тобі безмежного щастя поруч із найдорожчою людиною!",
  "Нехай кожен день дарує тобі ніжність і тепло коханих обіймів!",
  "Хай серце завжди співає від радості та кохання!",
  "Бажаю, щоб твоя любов була вічною та щирою!",
  "Нехай твоє серце завжди знаходить відгук у серці коханої людини!",
  "Хай кожен момент, проведений разом, буде сповнений гармонії та радості!",
  "Бажаю, щоб твоє кохання долало всі перешкоди та труднощі!",
  "Нехай ніжність і турбота завжди будуть частиною твоїх стосунків!",
  "Хай ваше кохання буде таким же безмежним, як небо над нами!",
  "Бажаю, щоб ваша історія кохання була найкращою казкою у світі!",
  "Нехай у твоєму житті завжди буде хтось, хто даруватиме тобі усмішку і тепло!",
  "Бажаю, щоб кожен день приносив тобі нові приводи для радості та любові!"
]

document.getElementById('Wishes_btn').addEventListener('click' , () => {
    //alert('Button clicked!')
    let index=Math.floor(Math.random()*arrayOfLoveWishes.length)
    document.getElementById('p_Wishes').innerText = arrayOfLoveWishes[index];
    console.log('Button clicked');
    console.log('Номер елементу масиву - ', index);

});
const arrayOfVitaminobjects=[
  {
    "id":1,
    "title":"Вітамін С",
     " photo":"",
     "description":"",
     "rating":"",
     "useful":"",
  },
  {
    "id":2,
    "title":"Вітамін С",
     " photo":"",
     "description":"",
     "rating":"",
     "useful":"",
  },
  {
    "id":3,
    "title":"Вітамін С",
     " photo":"",
     "description":"",
     "rating":"",
     "useful":"",
  }
]
arrayOfVitaminobjects.forEach((item) => {
  console.log(item)

  let divVitamin = document.createElement('div')
  divVitamin.classList.add('vitamin')
  divVitamin.innerText = item.title
})
