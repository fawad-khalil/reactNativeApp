# sample-cart-system
A ReactJS based starter project of shopping cart system

Please note that this a starter project, not a complete project and may contain some goofs as it is still under development. This project only gives an idea about how shopping cart API may work and does not implements complete functionality. Also this project does not include any sort of user interface. It's just an API.

# Technology Stack:
1. ReactJS

# Setting-up the project:
1. Set Path for android emulation with react-native:

	export ANDROID_HOME=$HOME/Android/Sdk

	export PATH=$PATH:$ANDROID_HOME/tools

	export PATH=$PATH:$ANDROID_HOME/tools/bin

	export PATH=$PATH:$ANDROID_HOME/platform-tools

2. npm install
3. npm start

# Project Structure:
	.
	├── android # android specific project app.
	├── docs # Documentation goes here.
	├── helper # helper JS files that contain helper functions such as wrapper to mongoose and redis etc.
	├── ios # ios specific project app.
	├── config # global resources for the app
		├── config.json # configuration settings existing globally for the app such as address of mongodb server
		├── res.json # constant resources such as string constants, paths etc.
		├── colors.js # colors re-used in the app.

	├── src # source files of the app
		├── components # minimal custom compnents.
		├── modules # contains modules of the screens of mobile app.

	├── tests # Automated tests goes here
	├── index.js # entry point of react native app.

