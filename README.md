# Ask Monzo (Peronal Alexa Skill) 💬

This is very much a rough WIP. I'm sharing this, following a discussion on the [Monzo Community Forum](https://community.monzo.com/t/alexa-skill-account-linking-anyone-got-it-working-with-monzo/60242).

**Note:** I only have the balance query working at the minute, although [./src/managers/monzo.js](src/managers/monzo.js) has some other functions for getting account(s) and transactions too.

## Getting started 💻

1. Clone the repository.
2. Install Node using Node Version Manager (NVM) if you don't have it already.

        $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
        $ nvm install 8.10

    A `.nvmrc` file is also included in the project for reference.

3. Install project dependencies

        $ npm i

## Debugging & running locally 🏃

You can easily run the project locally for debugging - it uses [`virtual-alexa`](https://github.com/bespoken/virtual-alexa) to do this.

As mentioned above, I only have balance working right now and you can debug that intent locally with `npm run debug:balance`.

### .env File

You need to have a `.env` file in the project root when running the project locally. See [example](./.env.example)

This should contains your `ACCESS_TOKEN` and `ACCOUNT_ID`.

An example `.env` file looks like this:

```text
ACCESS_TOKEN=123abc456def_access_token
ACCOUNT_ID=123abc456def_account_id
```

## Deploying 🚀

The project is setup to be deployed to AWS Lambda.

You'll also need to create a skill in the [Alexa Developer Console](https://developer.amazon.com/alexa) and add the [voice interaction model](./models/en-GB.json), along with your Lambda endpoints (once deployed).

_[I might add more details on this later, if I work on the project some more.]_
