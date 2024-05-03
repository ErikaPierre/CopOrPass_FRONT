# CopOrPass

## Title and Description:

Sneaker Aggregator is an online platform that allows users to search, discover, and track the latest sneaker releases.

## Deployment Procedure:

The back-end of the app is written in React.

Make sure to add your own `.env` file. All the environment variables you will need are listed in the file `env.sample`.

To run the project locally, install the dependencies:

To properly start the project, begin by running `npm install`, then install all the following dependencies with the following command: `npm i + dependency_name`:

- bulma
- jwt-decode
- notistack
- react-dom
- react-icons
- react-router-dom

To deploy the project:
To deploy the app, we are going to use Vercel hosting service.

- Commit your react app to a repository on github.com
- Create an account on Vercel.com
- Create a new project called chocolate-manager-front
- In the secrets section, add the environment variable called VITE_API_URL=https://your-backend-url.domain
- Link the project to your github repository corresponding to chocolate-manager-front
- Whenever you push to your github repository, your app will be automatically deployed on vercel.

## Usage:

1. Run the FRONT and the BACK with "npm run dev"

2. Objectives:

- Provide a smooth and responsive user experience on both web and mobile.
- Provide users with an intuitive interface to explore new sneaker releases.
- Allow users to follow their favorite brands and models.

3. Feature List:
   1 - Authentication and User Management:

- User registration with field verification and server-side validation.
- User login with credential validation.

2 - Search and Filtering:

- Search bar allowing users to search for sneakers by brand, model, color, etc.

3 - Sneaker Display:

- Display sneakers in list or grid format.

4 - User Interface:

- Ergonomic and intuitive design for smooth navigation.
- Responsive design for optimal user experience on all devices.

5 - Site Administration:

- Role-based permissions to restrict access to administrative features.

## Bugs:

- Use debugging console
