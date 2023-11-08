import db from 'mongoose';

const Schema = db.Schema;

export const WriterSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    famousBook: {
        type: String,
        required: true
    },
    // isClassic: {
    //     type: Boolean,
    //     default: false,
    //     required: false
    // }, 
    literatureGenre: {
        type: String,
        required: true
    },
    skillLevel: {
        type: Number,
        required: false,
    },
    creativeLevel: {
        type: Number,
        required: false
    }
    // bornDate: {
    //     type: Date,
    //     required: false
    // }
});