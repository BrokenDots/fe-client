# Running this react app properly (Please read)

- This project depends on the test server created by Kineo team for the backend.
- Kineo's server runs on localhost:3000.
- This client runs on localhost:4000
- To prevent the CORS error from showing up, please add the following to index.js on the server:
  - install cors using npm install cors --save
  - add the following lines of code to index.js on the server  
     const cors = require("cors");
    const corsOptions = {
    origin: "\*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
    };
    app.use(cors(corsOptions)); // Use this after the variable declaration

## Extras

Even though the assignment required me to build two pages list and create. I thought I would go ahead and add a third edit page that allows the user the edit more than just the status. Now you can edit the name, contact and crm of the ticket from this page. Hope you like it ❤️

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.
The page will reload if you make edits.\

### `npm run build`

Not recommended to use this

**Some additional work might be required to make client side routing to properly work on the files that this command creates. Might need to do make some changes to the server for it so I have left it alone**
