# FLICS 
&nbsp;
 **Flics is an application for users to post their movie/TV show recommendations and reviews in groups that they create with their friends**

##### To help with developing the application please follow the steps below:

1. First `git clone` the repository

2. You will to need to create a directory called ***config*** and inside this directory create a file called ***dev.env*** and fill with the following:
    - PORT: <port_number>
    - MONGODB_URL: <Connection_URL>

    ###### Note: local MONGODB_URL: mongodb://127.0.0.1:27017/<database_name> 
    - Replace **<database_name>** as appropriate

3. As a developer you should run the application using the command `npm run dev`

##### Downloading + starting local MongoDB server
[MongoDB download page](https://www.mongodb.com/try/download/community)

1. Unzip the contents and change folder name to "mongodb" and move to users home directory
2. Create a "mongodb-data" directory to store the database data
3. Run the command: <path_to_mongodb_folder>/bin/mongod --dbpath=<path_to_mongodb-data>
    - Example: /Users/Steve/mongodb/bin/mongod --dbpath=/Users/Steve/mongodb-data

4. Also download either [mongodbCompass](https://www.mongodb.com/try/download/compass) or [Robo3T](https://robomongo.org/)