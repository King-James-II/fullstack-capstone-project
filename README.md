# Gift-Link Full-Stack Application v.3.3.5

## Tasks Accomplished:

- Set up Continuous Integration and Continuous Delivery with GitHub Actions.
- Added linting service to automatically check for syntax errors and enforce coding guidelines.
- Fixed existing linting errors and pushed code to the repository.


## Previous Tasks Accomplished:

 Used the /api/auth/update endpoint to handle user profile requests to update user profile information.
- Integrated and handled authorization by including a Bearer token in the API request headers, enhancing security during profile updates.
- Handled asynchronous API responses, interpreting and processing the JSON data returned from the profile endpoint.
- Enhanced client-side form handling by using a React state to manage user input for email and password.
- Created an endpoint to update user credentials in the database (/update) in authRoutes.js.
- Configured the api/auth route in the Express application (app.js) to use the routes defined in authRoutes.js.
- Handled errors and structured responses in a server environment.
- Developed and implemented the /api/auth/login endpoint to handle user login requests.
- Integrated and handled authorization by including a bearer token in the API request headers, enhancing security during user login.
- Handled asynchronous API responses, specifically interpreting and processing the JSON data returned from the login endpoint.
- Enhanced client-side form handling using React state to manage user input for the user's email and password.
- Created an endpoint to login a user (/login) in authRoutes.js.
- Configured the api/auth route in the Express application (app.js) to use the routes defined in authRoutes.js.
- Handled errors and structured responses in a server environment.
- Enhanced client-side form handling by using the states to obtain user input for first name, last name, email, and password in the handleRegister function.
- Integrated the call to the backend API in handleRegister.
- Handled asynchronous API responses, specifically interpreting and processing the JSON data returned from the registration endpoint.
- Handled authorization by extracting the Bearer token in the API response and storing it in the session for enhancing security.
- Provided appropriate error messages for registration failure.
- Created an endpoint to register a user in the database (/register) in authRoutes.js.
- Configured the api/auth route in the Express application (app.js) to use the routes defined in authRoutes.js.
- Handled errors and structured responses in a server environment.
- Implemented SearchPage.js component to enable searching for gifts.
- Styled the search page using CSS in SearchPage.css.
- Added /app/search route to App.js.
- Added Search link to the navigation bar in NavBar.js.
- Implemented DetailsPage.js component to fetch and display detailed information about a gift.
- Styled the Details Page using CSS in DetailsPage.css.
- Created RegisterPage and LoginPage components for user registration and login functionalities.
- Managed form input states using the useState hook.
- Implemented handleRegister() and handleLogin() functions for form submission events.
- Utilized react-router-dom for navigation between registration and login pages.
- Fetch and display gifts on the MainPage.js component.
- Provide navigation to Home and Gifts from the Navbar.js.
- Structured landing page content by modifying home.html.
- Applied CSS styles to the landing page by editing home.css.
- Ensured the landing page is responsive and visually appealing on all devices.
- Used the `natural` library to perform sentiment analysis on English sentences.
- Implemented an Express server with a `/sentiment` endpoint.
- Developed a search endpoint in `searchRoutes.js` to filter gifts based on different criteria.
- Integrated the search routes into the Express application (`app.js`).
- Pushed the implemented changes to GitHub and prepared the code for review.
- Established a connection to MongoDB in `db.js`.
- Created an endpoint to retrieve all gifts from the database (`/api/gifts`).
- Developed an endpoint to fetch a specific gift by ID (`/api/gifts/:id`).
- Configured the gift routes in the Express application (`app.js`).
- Established and cloned a new GitHub repository using a provided template.
- Formulated and added user stories as GitHub issues, organizing them for the backlog.
- Initialized and configured MongoDB in the lab environment, applying best practices for secure connections.
- Employed command-line skills for database operations and imported data into MongoDB.