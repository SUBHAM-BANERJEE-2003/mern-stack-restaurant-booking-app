# mern-stack-restaurant-booking-app

CHECK OUT MY PROJECT THAT I DEPLOYED IN VERCEL - https://dailycious-app.vercel.app/

to run this file:

go to frontend and backend folders and just type in npm install to install node_modules folder.

for frontend and backend , we are using vite and nodemon to run the frontend and backend servers
for both, we type the below to run both the servers. make sure you run both the servers in seperate terminals.

for frontend

proj-directory/frontend> npm run dev

vite runs the frontend server in react's default port http://localhost:5173

for backend

proj-directory/backend> npm run dev  

nodemon run the backend server in https://dailycious-mernstack-api.vercel.app


note: we can change the port in backend server by changing express's port argument

make sure you include your own .env file in the backend server to keep the secrets like your MONGODB_URI and SESSION_PASS. i have not included it because of security purpose.