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

## Tech debts

There are a few things I would have liked to improve about this app but due to the lack of time and busy schedule, I am making a note of them here:

- Error handling for all kinds of requests are not implemented
- A few typescript types could be moved to its own file for reusability but not enough time to refactor.
- Although not explicitly asked, the designs for the action menu hint at the existence of an edit page for the tickets. This would be nice to have at some point.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.
The page will reload if you make edits.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

**Some additional work might be required to make client side routing to properly work on the files that this command creates. Might need to do make some changes to the server for it so I have left it alone**
