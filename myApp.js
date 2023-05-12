require('dotenv').config()
let mongoose = require('mongoose');

let db = "mongodb+srv://hardik:Kartik12@cluster0.vyrfcyn.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to the MongoDB Atlas')
  })
  .catch(err => {
    console.log('Err connecting to the MongoDB Atlas', err)
  })

const personSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
  favoriteFoods: {
    required: false,
    type: [String]
  }
})

let Person = mongoose.model('Person', personSchema);


// console.log(Person)
const createAndSavePerson = function(done) {
  const somendra = new Person({
    name: "Somendra Singh",
    age: 58, 
    favoriteFoods: ['Biryani', 'Daal Chawal']
  })

  somendra.save()
    .then(() => {
      console.log(`user added successfully: ${somendra}`)
    })
    .catch(err => {
      console.error(`error occured at adding new user: ${err}`)
    })
};
console.log(createAndSavePerson());

const records = [
  {
    name: 'Kartik Singh',
    age: 17,
    favoriteFoods: ['Raajma', 'Keema']
  },
  {
    name: 'Asmita Raghunathan',
    age: 19,
    favoriteFoods: ['Hardik', 'Shwarma']
  }
]

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople)
    .then(rec => {
      console.log(`record created successfully: ${rec}`)
    })
    .catch(err => {
      console.error(`error creating the record: ${err}`)
    })
};

console.log(createManyPeople(records))

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName })
    .then(person => {
      console.log(`person found`, person)
    })
    .catch(err => {
      console.error('error finding the person', err)
    })
};

console.log(findPeopleByName('Asmita Raghunathan'));

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
