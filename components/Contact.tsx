import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef(null) 

  const sendEmail = (e:any) => {
    e.preventDefault()

    emailjs
      .sendForm('service_same3fd', 'template_g9bg4iq', form.current!, 'B1B1OadTWJmi_FziM')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload()
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-22 flex 
      flex-col gap-4 items-center justify-center"
    >
      <div className="flex flex-col justify-center items-center">
        <p className="font-titleFont text-lg text-textGreen 
        font-semibold flex items-center tracking-wide">
          What’s Next?
        </p>
        <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
        <p className="max-w-[600px] text-center text-textDark">
            I'm interested in working as a full time, part time, 
            contract or freelance developer. However, if 
            you have other request or questions, don't hesitate to contact me.
        </p>
      </div>
          
      <div className=" max-w-containerSmall mt-10">  
        <form action="" onSubmit={sendEmail} ref={form}>
          <ul className=" p-0 m-0">
            <li className=" p-0 m-0 lis-none mb-[10px] overflow-hidden block
              relative clear-none w-[49%] ml-0 float-left ">
                <input 
                className=" w-full border-[0] bg-[#115173] h-[50px] text-base
                text-white px-5 box-border"
                placeholder="Name" 
                type="text" 
                name="user_name" 
                required />
            </li>

            <li className=" p-0 m-0 lis-none mb-[10px] overflow-hidden block
              relative clear-none w-[49%] ml-[2%] float-left ">
              <input
                className=" w-full border-[0] bg-[#115173] h-[50px] text-base
              text-white px-5 box-border"
                placeholder="Email"
                type="email"
                name="email_id"
                required
              />
            </li>

            <li className=" p-0 m-0 lis-none mb-[10px] overflow-hidden block
              relative clear-both">
              <input
                className=" w-full border-[0] bg-[#115173] h-[50px] text-base
                text-white px-5 box-border"
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
            </li>

            <li className=" p-0 m-0 lis-none mb-[10px] overflow-hidden block
              relative clear-both">
              <textarea
              className="w-full border-[0] bg-[#115173] h-[50px] min-h-[150px]
              text-base text-white px-5 box-border outline-none"
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </li>

            <li className="p-0 m-0 lis-none mb-[10px] overflow-hidden block
              relative clear-both">
              <input 
                type="submit" 
                className="text-textGreen text-xs no-underline py-[8px] 
                px-[10px] border border-[1px_solid_#ffd700] rounded
                uppercase text-center mr-2 cursor-pointer" 
                value="SEND" 
              />
            </li>
          </ul>
        </form>
      </div>

    </section>
  );
};

export default Contact;