import globalConstants from '../../../config/settings.json';

let constants = {
    appName: 'SampleCart',
    welcomeMessage: 'Welcome to',

    verifySessionUrl: globalConstants.samplecart_backend + '/user/session',

    getProductsUrl: globalConstants.samplecart_backend + '/product/'
}

export default constants
