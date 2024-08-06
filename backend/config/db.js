import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vyfoody:vyfoody@cluster0.tbxa1ba.mongodb.net/FoodPanda')
        .then(() => console.log("DB Connected"))
}