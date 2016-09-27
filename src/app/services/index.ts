export { ApiService } from './api';

import * as services from '.'; 

const mapValuesToArray = (obj) => Object.keys(obj).map(key=> obj[key]);

export const serviceProviders = [
    ...mapValuesToArray(services)
]