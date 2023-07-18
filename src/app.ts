import express, { application } from 'express';

class Application {

        app: express.Application;

        constructor(){
            this.app = express();
        }
        start(){
            this.app.listen(3000, ()=>{
                console.log('Server running'); 
            });
        }

}

export default Application;