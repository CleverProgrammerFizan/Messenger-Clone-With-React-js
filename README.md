### First You Want to create an React app

 To do that you need to run the command 
 ### `npx create-react-app YOUR-APP-NAME`
 
After that you need to type 
### `npm start` 
to start your development server(this will open a tab on your browser for devolopment)

THE NEXT INSTRUCTIONS ARE ONLY FOR THE PEOPLE WHO ARE LOOKING TO HOST YOU WEBSITE ON FIREBASE

Getting Your React App Ready for Deployment 
Run the following command to create a build directory with a production build of your app:

### `$ npm run build`

Inside the build/static directory will be your JavaScript and CSS files. To know more about React production builds, refer to the production build section of the create-react-app docs.

### Configuring Firebase
Install Firebase CLI
To host your site with Firebase Hosting, you need the Firebase command-line tool (CLI). Run the following npm command to install the CLI on your system globally:

### `$ npm install -g firebase-tools`

### Login to Firebase
Make sure you're in the root directory of your React app and run the following command to login to firebase in your terminal:

### `$ firebase login`

If you're not logged in, you'll be asked to enter the credentials for your google account.

Initiate your project
Now that you've got the firebase CLI configured, it's time to initialize firebase in your react app. Run the following command:

### `$ firebase init`

You will now enter the firebase tools shell and will be prompted with a sequence of questions and various configuration options. Let's go through these questions together step by step to achieve our desirable configuration.

### Firebase home page - select, hosting: configure and deploy Firebase Hosting sites

### Select - Hosting: Configure and deploy Firebase Hosting sites.

### select: use an existing project

### Select - Use an existing project

### select: fir-tutorial-project-93dac (demo-tutorial-project)Select the firebase project that you created (e.g. demo-tutorial-project in my case)

### specify build and configuration

Specify the build that we created in the previous section, to be used as your project's public directory.
Select whether or not you need your firebase app to be configured as a single-page app. I'm selecting No in my case.
As we've already created a build directory in our previous section, therefore build/index.html already exists. We would want to let it be as is and enter No for this question.
This marks the end of our configuration process and our app is now ready to deploy!

To verify the successful completion of the initialization process, simply check the presence of .firebasercand firebase.json files. These are automatically created by firebase during the initialization process.

Deploy to Firebase
Just run the following command to deploy your app:

### `$ firebase deploy`

Firebase will now run the deploying process and will give you a unique URL where your app is deployed. For e.g. in my case, it was - https://messenger-35adb.web.app/

Voila! Your ReactApp is now deployed with Firebase hosting.
