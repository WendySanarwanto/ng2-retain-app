export { ApiService } from './api';
export { NotesService } from './notes';

import * as services from '.'; 

const mapValuesToArray = (obj) => Object.keys(obj).map(key=> obj[key]);

export const serviceProviders = [
    ...mapValuesToArray(services)
]