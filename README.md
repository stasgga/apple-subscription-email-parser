# Apple Subscription Email Parser

Processes subscription confirmation emails from iTunes in order to a renewal date reminder in case you wish to cancel before being charged.

## How to use

1. Just for now you need to download an email and save it as `original_msg.txt`, e.g.

![email preview](https://i.imgur.com/QqVGIPE.png)

2. `yarn`

3. Then when you run `node index.js` you should get something like

```javascript
{
  subscription: 'VIP All Access Pass',
  app: 'The Piano Keyboard',
  img: 'https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/a1/1c/8f/a11c8f02-bea9-881a-8642-547957853f19/AppIcon-0-1x_U007emarketing-0-0-85-220-6.png/280x280bb-80.jpg',
  dop: '2018-12-28T00:00:00.000Z',
  price: '£7.49/week',
  paymentMethod: 'MasterCard .... 1234',
  cancelBy: '2019-01-03T00:00:00.000Z'
}
```

## Next steps

- Connect to GMail via OAuth in order to retreive a list of relevant emails
- Either create Calendar reminders, or send an email to you the day before the subscription is due to be renewed/paid
