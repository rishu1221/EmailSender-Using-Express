const nodeMailer = require('nodemailer')
const fs = require('fs')

const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);


const getBill = async (req,res)=>{
    console.log(process.env.EMAIL)
    console.log(process.env.PASS)
    //Create a transport for using nodemailer
    const transport = nodeMailer.createTransport({
        service : "gmail",
        auth : {
            user : process.env.EMAIL,
            pass : process.env.PASS
        }
    })



    const htmlTemplate = await readFileAsync('../server/templates/thankyou.html', 'utf-8');

    let mailDetails = {
        from: 'reeshavsharma007@gmail.com',
        to: 'projectsDevelopment3@gmail.com',
        subject: 'This mail is sent using NodeMailer',
        html: htmlTemplate,
    };

    try {
        transport.sendMail(mailDetails)
        return res.status(200).json({"msg" : "Mail has been successfully sent."})
    } catch (error) {
        console.log(error)
        return res.status(400).json(error);
    }
}

module.exports = getBill