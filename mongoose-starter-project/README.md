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
- [Web scraping with NodeJS](https://www.udemy.com/web-scraping-nodejs/?couponCode=SCRAPE000&pmtag=25APRIL&siteID=lzAk459zR_w-_CB0x7lSFw4YsRDyhvnRug&LSNPUBID=lzAk459zR/w)
- [hackathon-starter](https://github.com/sahat/hackathon-starter)


atom sync-setting gist ID:
https://gist.github.com/jkulcsar/1f455cd7cf932359fe982c49c358a233
