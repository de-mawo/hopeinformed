import React from 'react'

const ContactForm = () => {
  return (
   
      
     
      <form action="#" className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="block p-3 w-full rounded border border-gray-300 px-5 py-2 focus:outline-none focus:ring-1  focus:ring-teal-600 focus:border-transparent"
            placeholder="name@gmail.com"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full  rounded border border-gray-300 px-5 py-2 focus:outline-none focus:ring-1  focus:ring-teal-600 focus:border-transparent "
            placeholder="Let us know how we can help you"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={6}
            className="block p-2.5 w-full rounded border border-gray-300 px-5 py-2 focus:outline-none focus:ring-1  focus:ring-teal-600 focus:border-transparent "
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-500 sm:w-fit hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 "
        >
          Send message
        </button>
      </form>
  
 
  )
}

export default ContactForm