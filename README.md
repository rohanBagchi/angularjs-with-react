### Description
This is a proof-of-concept for migrating an angularjs application to use webpack + react

It runs two todo apps, one in Angularjs & other in React running completely seperate from each other and in parallel. Idea is not to share state between the two, but to be able to run React as an independent app.

### Pending
Improve webpack config to handle dev & production mode differently.

#### How to run in Development?
`npm run start`

#### How to create a production build?
`npm run build`