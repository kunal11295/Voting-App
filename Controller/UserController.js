import encrypt from "encryptjs"
import voters from "../Model/usermodal.js"
import path from "path"

const __dirname = path.resolve();

export const voterpage_html = async (req,res) =>
{
    try{
        res.sendfile(__dirname + '/public/Voterpage.html')
    }
    catch(err)
    {
        return res.send(err)
    }
}

export const register_html= async(req,res) =>
{
    try{
        res.sendfile(__dirname + '/public/register.html')
    }
    catch(err)
    {
        return res.send(err)
    }
}

export const login_html = async(req,res)=>
{
    try{
        res.sendfile(__dirname +'/public/login.html')
    }
    catch(err)
    {
        return res.send(err)
    }
}

export const register = async(req,res) =>
{
    const{name,email,password,confirmpassword,phoneno}= req.body
    if(!name) return res.send("name is required")
    if(!email) return res.send("email is required")
    if(!password) return res.send("password is required")
    if(!confirmpassword) return res.send("confrirmpassword is required")
    if(!phoneno) return res.send("phoneno is required") 

    var secrectkey='apple'
    var plaintext = password
    var plaintextforcp = confirmpassword
    var cipher = encrypt.encrypt(plaintext,secrectkey,256);
    var cipherforcp = encrypt.encrypt(plaintextforcp,secrectkey,256);


    const voter = new voters
        ({
            name:name,
            email:email,
            password:cipher,
            confirmpassword:cipherforcp,
            phoneno:phoneno
        })
    await voter.save();
    return res.send("Registeration Sucessfull")
}


export const Login = async (req,res) =>
{
    try{
        const{name,password} = req.body;

        if(!name) return res.send("name is required")
        if(!password) return res.send("password is required")

        let secrectkey = "apple";
        // let plaintext = "password";

        const user = await voters.find({name}).exec();

        let decipher = encrypt.decrypt(user[0].password,secrectkey,256)
        console.log(decipher)

        if(decipher == password)
        {
        return res.send("Login sucessfull");
        }
        else
        {
            return res.send("Login Unsucessfull");
        }
    }
    catch(error)
    {
        return res.send(error);
    }
}