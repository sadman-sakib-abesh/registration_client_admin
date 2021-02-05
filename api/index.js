const express=require("express");
const mysql=require("mysql");
const app=express();
const cors=require("cors")
const nodemailer=require("nodemailer")

const bodyparser=require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());



//mysql connection
//make a database named project-1
//then a table user
//then make 5 rows=>id(A_I),name,email,batch



const conn=mysql.createConnection({
host: "localhost",
  user: "root",
  password: "",
  database:"project-1"
  
 } );
conn.connect((err,result)=>{
  if(err){
    console.log(err);
  }
  else{
  console.log("connected");
    
  }
  
  
});


//getting data from client site and adding to database

app.post('/api/client',(req, res)=> {



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yourmail@gmail.com',
    pass: 'password'
  }
});




   //mailing user interface
var mailOptions = {
  from: 'thirdeyephotography2020@gmail.com',//
  to:req.body.email,                
  subject: 'Registration confirmed',//
  text: 'This is a dummy mail sent from server'//
};



    //sending mail on confirmation of registration 
    
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    
    
    
    console.log("mail sent ");
const sql="INSERT INTO user(name,email,number,batch) VALUES('"+req.body.name+"','"+req.body.email+"','"+req.body.number+"','"+req.body.batch+"')";

let query=conn.query(sql,(err,done)=>{
  
  if(err){
    console.log(err);
  }
  else{

}


});
  }

});
});


app.get("/api/admin",(req,res)=>{
  
  var sql="SELECT * FROM user ORDER BY desc";
  let query=conn.query(sql,(error,info)=>{
    if(error){
      console.log(error);
      
    }
    else{
      
      res.send(info);
    }
    
  });
  
});




app.listen(1616,()=>{
  console.log("successful");
});
