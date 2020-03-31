/* eslint-disable no-undef */
const app = require('./index.js');

const {
  getUsers, postUsers, putUsers, deleteUsers,
} = require('./controllers/usersController.js');
const {
  getMessages, postMessages, putMessages, deleteMessages,
} = require('./controllers/messagesController.js');
const {
  getSettings, postSettings, putSettings, deleteSettings,
} = require('./controllers/settingsController.js');
const {
  getFriends, postFriends, putFriends, deleteFriends,
} = require('./controllers/friendsController.js');


// USERS
app.route('/api/users')
  .get(getUsers)
  .post(postUsers)
  .put(putUsers)
  .delete(deleteUsers);

// MESSAGES
app.route('/api/messages')
  .get(getMessages)
  .post(postMessages)
  .put(putMessages)
  .delete(deleteMessages);

// ACCOUNT SETTINGS
app.route('/api/settings')
  .get(getSettings)
  .post(postSettings)
  .put(putSettings)
  .delete(deleteSettings);

// FRIEND LIST
app.route('/api/friends')
  .get(getFriends)
  .post(postFriends)
  .put(putFriends)
  .delete(deleteFriends);
