import {Reference} from '../models/reference';

export class AddReference {
    static readonly type = "[Reference] Add";
    constructor (public payload : Reference) {};
}

export class DelReference {
    static readonly type = "[Reference] Del";
    constructor (public payload : Reference) {};
}