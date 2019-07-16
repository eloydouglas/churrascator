# churrascator
A coding challenge/event handler app.

## Setup

- Clone the repository and run ```yarn setup``` at the root folder
- Set up a MongoDb server (I use [Atlas](https://www.mongodb.com/cloud/atlas))

- Set up your env variables creating a .env file in the backend folder with the following content:

NODE_ENV=development<br />
PORT=4242<br />
DB_URI=**Place here your database link**<br />

We'ŕe set! Now you can run ```yarn start``` in the root folder and try the app!
You'll face a fake login screen (there's no auth yet :( ) so just hit login.


Ps. The current version works better in a mobile size screen.
