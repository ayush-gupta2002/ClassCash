import { Schema, model } from 'mongoose';

const attendanceSchema = new Schema({
    date: {
        type: date,
        required: true
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    absent: [{
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    }],
    present: [{
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    }]
});

const Attendance = model('Attendance', attendanceSchema);
export default Attendance;