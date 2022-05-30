const { Post } = require('../models');

const postdata = [
  {
    title: 'Why North Carolina is the Best Carolina',
    content: "If you want to live in one of the most beautiful places on Earth, the Tar Heel State doesn't disappoint. The Appalachian, Blue Ridge and Great Smoky Mountains all thread their way through the western part of the state, and it's where you'll find some of the highest peaks east of the Mississippi. If you've got a daredevil spirit, a walk along the Mile High Swinging Bridge at Grandfather Mountain is sure to get your pulse racing.",
    user_id: 10
  },
  {
    title: 'Live Music in NC This Summer',
    content: "here’s nothing better on a warm evening than listening to music outdoors. Here’s a list of free summer concert series for 2022 in the Triangle. You’ll find live music in Raleigh, Durham, Cary, Chapel Hill, Pittsboro, Carrboro, Hillsborough, Smithfield, and more. Maybe 'summer' stretches a little bit into spring and autumn too. Most of these concert series are family friendly. At many you can purchase food from food trucks. Most of these concerts are free, but we’ve also included some that are low-cost. Read about some of our favorite outdoor concert series, and then scroll down for a day by day list of every outdoor concert on Triangle on the Cheap’s calendar for the next 90 days. This list includes outdoor concerts at festivals and market as well. Make sure to follow each link for details.",
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    content: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content: 'https://stanford.edu/consequat.png',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    content: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    content: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    content: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    content: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    content: 'https://gmpg.org/lorem.jpg',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    content: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'http://wikia.com/turpis/eget.jpg',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    content: 'https://shareasale.com/quis.json',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    content: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    content: 'https://java.com/at/nibh/in.png',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;