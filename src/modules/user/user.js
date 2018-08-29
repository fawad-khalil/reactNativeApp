import { AsyncStorage } from 'react-native'

export default class User {
	static user;
	static token;

	static storeSession = async (sessionUser, sessionToken) => {
		user = sessionUser;
		token =  sessionToken;

		await AsyncStorage.setItem(token, user);
	}

	static removeSession = () => {
		// TODO:
	}

	static updateSession = () => {
		// TODO:
	}
}