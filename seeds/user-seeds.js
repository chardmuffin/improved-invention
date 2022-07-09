const sequelize = require('../config/config');
const { User, Post } = require('../models');

const userData = [
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123',
    firstName: 'Natalia',
    lastName: 'Petrov'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123',
    firstName: 'James',
    lastName: 'Willoughway'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123',
    firstName: 'Chris',
    lastName: 'Cuomo'
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123',
    firstName: 'Jeffery',
    lastName: 'Dahmer'
  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'password123',
    firstName: 'George',
    lastName: 'Midgley'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123',
    firstName: 'Larry',
    lastName: 'Arnout'
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password123',
    firstName: 'Hector',
    lastName: 'Napleton'
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password123',
    firstName: 'Kurtis',
    lastName: 'Perigo'
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password123',
    firstName: 'Melissa',
    lastName: 'Mongain'
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password123',
    firstName: 'Beatrice',
    lastName: 'Steen'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;