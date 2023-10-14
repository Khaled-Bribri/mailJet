const mailer = require('./mailer');
require('dotenv').config();

mailer.sendMail(
  {
    from: process.env.EMAIL_EXPEDITEUR,
    to: process.env.EMAIL_DESTINATAIRE,
    subject: 'This is a test email',
    text: 'Hello world',
    html: '<p>Hello <em>world</em></p>',
  },
  (err, info) => {
    if (err) console.error(err);
    else console.log(info);
  }
);