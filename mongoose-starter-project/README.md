# Mongoose starter project
Based on this material: [MongooseJS Essentials](https://www.udemy.com/mongoosejs-essentials/)
Database:
- create / start the db with this command:
mongod --dbpath ./data/db --smallfiles &

mongo
show databases
use example
show collections
-- to insert, use the books.json example file or similar to the following:
db.books.insert({ title: 'Learn Colloquial Speech', author: 'Susan Brown', category:'Humanities'});
db.books.insert({ title: 'Behavioral Analytics', author: 'Matt DeWitt', category:'Health'});

-- just show what's in the current collection:
db.books.find().pretty()


Also great to follow:
- [Web scraping with NodeJS](https://www.udemy.com/web-scraping-nodejs/)
- [hackathon-starter](https://github.com/sahat/hackathon-starter)
