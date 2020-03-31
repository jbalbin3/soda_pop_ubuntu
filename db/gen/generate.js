/* eslint-disable no-undef */
const fs = require('fs');
const faker = require('faker');
const { addictions, cities, lookingFor } = require('./resource.js');

const generateUsers = (numOfUsers) => {

  const stream = fs.createWriteStream('../csv/users.csv');
  stream.write('user_name,first_name,email,avatar,bio,reason,city,addiction,clean_time,connection\n');

  const randomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  for (let i = 0; i < numOfUsers; i++) {
    let userName = faker.internet.userName();
    let firstName = faker.name.firstName();
    let email = faker.internet.email();
    let avatar = faker.internet.avatar();
    let bio = faker.lorem.sentences();
    let reason = faker.lorem.sentence();
    let city = cities[randomInt(cities.length)];
    let addiction = addictions[randomInt(addictions.length)];

    let cleanTime = '';

    if (i % 3 === 0) {
      let months = randomInt(24);
      if (months === 1) cleanTime = `${months} month`;
      else cleanTime = `${months} months`;
    } else if (i % 10) {
      let years = randomInt(20);
      if (years === 1) cleanTime = `${years} year`;
      else cleanTime = `${years} years`;
    } else {
      let days = randomInt(101);
      if (days === 1) cleanTime = `${days} day`;
      else cleanTime = `${days} days`;
    }

    let connection = lookingFor[randomInt(lookingFor.length)];

    stream.write(`${userName},${firstName},${email},${avatar},${bio},
                  ${reason},${city},${addiction},${cleanTime},${connection}\n`);
  }

};

generateUsers(1000);

const generateMessages = () => {

};

const generateFriends = () => {

};

const generateSettings = () => {

}

