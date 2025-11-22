import { useState, useRef } from 'react';
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('user_name') as string,
      email: formData.get('user_email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string
    };

    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setStatus('success');
      if (formRef.current) formRef.current.reset()
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact"
      className="max-w-contentContainer mx-auto py-20 px-4"
    >
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
       viewport={{ once: true }}
       className="flex flex-col items-center gap-4"
      >
        <p className="font-titleFont text-lg text-textGreen 
        font-semibold flex items-center tracking-wide">
          What’s Next?
        </p>
        <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
        <p className=" max-w-containerxs text-lg text-center text-gray-400 mb-12">
          I'm currently open to full-time, part-time, contract, or freelance
          opportunities. Whether you have a project in mind or just
          want to say hello, I'll do my best to respond promptly!
        </p>

        <div className=" max-w-containerSmall">  
        <form action="" onSubmit={handleSubmit} ref={formRef}>
          <ul className=" p-0 m-0">

            <li className=" p-0 m-0 lis-none mb-[10px] overflow-hidden block
              relative clear-none w-[49%] ml-0 float-left rounded-md ">
                <input 
                  id="name"
                  name="user_name"
                  type="text"
                  placeholder="Your Name"
                  required 
                  className="w-full bg-gray-800 border border-gray-700
                    rounded-lg px-5 py-3 text-white placeholder-gray-500 
                    focus:border-textGreen focus:ring-2 focus:ring-textGreen/50
                    outline-none transition"
                />
            </li>

            <li className=" p-0 m-0 lis-none mb-[10px] overflow-hidden block
              relative clear-none w-[49%] ml-[2%] float-left rounded-md">
              <input
                id="email"
                name="user_email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full bg-gray-800 border border-gray-700
                rounded-lg px-5 py-3 text-white placeholder-gray-500 
                focus:border-textGreen focus:ring-2 focus:ring-textGreen/50 
                outline-none transition"
              />
            </li>

            <li className=" p-0 m-0 lis-none mb-[10px] overflow-hidden block
              relative clear-both rounded-md">
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg
                px-5 py-3 text-white placeholder-gray-500 focus:border-textGreen
                focus:ring-2 focus:ring-textGreen/50 outline-none transition"
              />
            </li>

            <li className=" p-0 m-0 lis-none mb-[10px] overflow-hidden block
              relative clear-both rounded-md">
              <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full bg-gray-800 border border-gray-700 rounded-lg
              px-5 py-3 text-white placeholder-gray-500 focus:border-textGreen
              focus:ring-2 focus:ring-textGreen/50 outline-none transition
              min-h-[150px]"
              ></textarea>
            </li>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                  {status === 'success' && (
                    <div className="flex items-center text-green-500">
                      <FiCheck className="mr-2" />
                      <span>Message sent successfully!</span>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="flex items-center text-red-500">
                      <FiAlertCircle className="mr-2" />
                      <span>{errorMessage}</span>
                    </div>
                  )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg
                  font-medium transition ${
                  status === 'sending'
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-textGreen text-gray-900 hover:bg-textGreen/90'
                }`}
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </button>

            </div>

          </ul>
        </form>
      </div>


      </motion.div>
          
      

    </section>
  );
};

export default Contact;