---
title: Node.js Daraja wrapper
description: A node.js wrapper for seamless integration with Mpesa's Daraja API
layout: ../../../layouts/MainLayout.astro
---

Documentation for the node.js wrapper implementation of the `Daraja-sdks`.

## Installation
```bash
# with npm
npm install daraja.js

# with yarn
yarn add daraja.js
```

## Usage
To enhance the ease of use, this library provides a builder-style interface to "build" your requests, and send them once built. This way, the library is able to asbtract away the quirks of working directly with the Daraja API and you can focus on building your app quicker.

To get started, create an instance of the `Mpesa` class:
```js
// with es-modules syntax
import {Mpesa} from "daraja.js"

// with common-modules syntax
const Mpesa = require("daraja.js").Mpesa

// create an app instance
const app = new Mpesa({
    consumerKey: process.env.APP_KEY, // required
    consumerSecret: process.env.APP_SECRET, // required
    initiatorPassword: "Safaricom999!*!", // required only in production
    organizationShortCode: 174379, // optional
    certificatePath: "some/path" // optional 
    securityCredential: "someSecureCredential" // optional 
})
```
Let's discuss the fields that can be passed to the `Mpesa` class:
- `consumerKey`: This is a unique key provided to you by Safaricom once you create an app. It is obtained from the [developer portal](https://developer.safaricom.co.ke).

- `consumerSecret`: Like the consumerKey, this is also provided to you and is available from the developer portal.
  
- `initiatorPassword`: This is a value that is used to sign requests made in APIs such as [B2C](/api/b2c) and [stkPush](/api/stk-push). When testing on sandbox, you don't have to provide this field, the library takes care of this for you, however, when in production, you will have to provide your own initiator password: It is provided to you by safaricom once you "Go Live".
  
- `organizationShortCode`: This is a field that can be used for convenience. Instead of providing the shortcode every time you make a request, you can define it here once and for all.
  
- `certificatePath`: This is an optional value that you can pass if you intend to provided your own certificates. These certificates are used to sign requests made in certain APIs. However, the library has built-in certificates and you don't have to provide your own.
  
- `securityCredential`: The security credential is a value obtained from encrypting the initiatorPassword and the certificate and is also used to securely sign more advanced API requests. You don't have to deal with this at all, the library handles it for you out of the box.


## STK Push / Lipa na Mpesa Online / Mpesa Express
This section will only demonstrate the usage of the API with respect to the node.js library. You can find in-depth documentation about the STK Push API [here](/api/stk-push).

### Simulating an stkPush request :
```js
import {Mpesa} from "daraja.js"

const app = new Mpesa({
    // credentials here...
})

try {
// newer versions of node support top-level await. If not, you may have to wrap this in a function call
const res = await app
    .stkPush()
    .amount(1)
    .callbackURL("https://example.com/callback")
    .phoneNumber(254708374149)
    .lipaNaMpesaPassKey(process.env.LNM_PASSKEY)
    .send(); // This method builds and asynchronously sends the request
} catch (e) {
    console.log(e)
}
```
The `LipaNaMpesaPassKey` can be obtained from the developer portal while testing in sandbox, and while in production, it will be provided to by safaricom once you "Go Live". If you are unsure about where to find these credentials, check out [this section](/creds)

Once you have provided all the fields via the respective builder methods, you can then proceed to send the request via the `send()` method. Before any request is made, the library checks to see if you have provided all the required fields, if not, an error will be thrown and a message logged on the console. This process is an async one and you will therefore have to await it. Alternatively, you can chain a `.then()` method.

After the request has been made, if an error is received from the API, the promise will reject with the said error message. To catch this, use a `try catch` block, or if you are using the `.then()` syntax, attach a `.catch()` method. If the response received is error free, the library wraps the response in a class before sending it back to you.