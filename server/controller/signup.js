const nodeMailer = require('nodemailer')


const signup = async (req,res)=>{

    //
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "maddison53@ethereal.email",
          pass: "jn7jnAPss4f63QBp6D",
        },
      });

      const mailContent = {
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      }
      
      try {
        const info = await transporter.sendMail(mailContent);
        return res.status(200).json({
            msg : "Mail sent successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({err})
      }
      


    //res.status(201).json("Sign up successfully")
}

module.exports = signup