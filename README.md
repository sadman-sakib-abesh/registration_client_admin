<h1>setup</h1>

this form is made with react js and nodejs. The frontend part is made with cdn links so loclly 
react js is not needed to be installed. For backend node js is needed to be installed. 

<h2>installation and running</h2>



run these commands in your terminal
<h3>step-1</h3>
clone this project and inter the api folder
```bash
$git clone https://github.com/abesh1/registration_clent_admin.git && cd api
```
<h3>step-2</h3>
install nodemailer, body-parser, express and cors

```bash
$npm install express
$npm install cors
$npm install nodemailer
$npm install body-parser
```

<h3>step-3</h3>

in your local mysql server login to root and creat a database named project-1 and then creat a table named user and add 5 rows like this:
          data type
id         int (auto_increament)
name      text 
email     text
number    text
batch     date

<h3>step-4</h3>

now edit the file api/index.js on line
