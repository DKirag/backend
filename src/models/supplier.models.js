import mongoose from 'mongoose';

const supplierSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone:{
        type: Number,

    },
    direction:{
        type: String,
        required: true
    }
    
},{
    timestamps: true
    
});
export default mongoose.model('Supplier' , supplierSchema)