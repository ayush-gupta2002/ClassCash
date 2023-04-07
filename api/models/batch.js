import { Schema, model } from 'mongoose';

const batchSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student',
    }],
    teachers: {
        type: [{
            subject: String,
            teacher: {
                type: Schema.Types.ObjectId,
                ref: 'Teacher'
            }
        }],
        required: true
    }
})

batchSchema.virtual('strength').get(function () {
    return this.students.length;
})

batchSchema.virtual('branch').get(function () {
    return this.students[0].branch;
})

const Batch = model('Batch', batchSchema);
export default Batch;