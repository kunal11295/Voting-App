import  express  from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./Routes/UserRoutes.js";
import path from "path";

const app = express();


app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

const __dirname = path.resolve();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1',router);

app



mongoose.connect('mongodb+srv://kunal11295:kunal11295@cluster0.tnxk0aj.mongodb.net/awdizdb?retryWrites=true&w=majority')
.then(() => console.log("Db connected"))
.catch((err) => console.log("db error =>",err))

app.listen(8001,() => console.log("working on port 8001"));