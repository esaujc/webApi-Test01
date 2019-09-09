# Project Name
Nodejs webApi Test01.

## Description

Testing Nodejs Api Rest with mock data using login with cookies and session.

## User Stories

- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login.
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account and access data.
- **User Role** - As a user role I want to see all the Clients(users) information by id and by name.
- **Admin Role** - As a admin user role I want to see all the Clients(users) information by id and by name. Moreover, I want to Get the list of policies linked to a user name and Get the user linked to a policy number.
- **Route protection** - As user I want to access only to the routes I should have permission, and only if I have loggin.

## Backlog
- Improve HTML and CSS style.
- Create a logout access.
- Create a proper error page.

## ROUTES:
- index.js
- GET / 
  - renders the homepage. This is login page.
  - If users is logged, redirects to /private. 
- POST /private
  - redirects to /private if user logged in.
  - body:
    - userId
- GET /private
  - redirects to /private if user logged in.
  - renders the private page with access to data.
  - user and admin shows different information and access.
  - redirects to / if user is anonymous.

- users.js
- GET /users
  - renders user data list.
  - redirects to /private if user logged in.
  - redirects to /login if user is anonymous.
- GET /users/id/:id
  - renders user data with id provided.
  - params:
    - userId/clientId
  - redirects to /private if user logged in.
  - redirects to /login if user is anonymous.
- GET /users/name/:name
  - renders user data with name provided.
  - params:
    - name
  - redirects to /private if user logged in.
  - redirects to /login if user is anonymous.

- policies.js
- GET /policies
  - renders policies data list.
  - redirects to /private if user logged in.
  - redirects to /private if user is not admin.
  - redirects to /login if user is anonymous.
- GET /policies/client/:clientId
  - renders all the policies associated with the clientId provided.
  - params:
    - userId/clientId
  - redirects to /private if user logged in.
  - redirects to /private if user is not admin.
  - redirects to /login if user is anonymous.
- GET /policies/name/:name
  - renders data from a policy ID provided.
  - params:
    - id/policyId
  - redirects to /private if user is not admin.
  - redirects to /login if user is anonymous.

## Mock Data
- Clients/Users: http://www.mocky.io/v2/5808862710000087232b75ac
- Policies:  http://www.mocky.io/v2/580891a4100000e8242b75c5

## Task list
1. Installation and configuration.
2. Create basic files.
3. Create homepage and links.
4. Create routes files. 
5. Create controller files.
6. Create layouts(views). 
7. Connect login.
8. Create private page with control user/admin role.
9. Create middlewares to check login, access routes.
10. Create sessions and check routes when you are login.
11. Create all status messages in controllers.

## Links

### Git

[Repository Link](https://github.com/esaujc/webApi-Test01.git)

