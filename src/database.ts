import mongoose from "mongoose";

export async function connect(){

    try {
        mongoose.connect('mongodb://localhost/ts-app-tutorial',{
            useNewUrlParser: true
        });
    }
    catch{
        console.log('Error');
    }


}
 export default connect