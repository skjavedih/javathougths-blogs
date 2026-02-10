'use client'

import React, { useRef, useState } from 'react'

export interface ContactFormProps {
  title?: string
}

const ContactForm = ({ title = 'Send us a message will back you soon.' }: ContactFormProps) => {
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const nameEl = useRef<HTMLInputElement>(null)
  const phoneEl = useRef<HTMLInputElement>(null)
  const emailEl = useRef<HTMLInputElement>(null)

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Simulate form submission
    console.log({
      name: nameEl.current?.value,
      phone: phoneEl.current?.value,
      email: emailEl.current?.value,
    })

    setSubmitted(true)
    setError(false)
  }

  return (
    // <div>
    //     <div className="pb-4 text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</div>
    //     <form className="flex flex-col gap-4" onSubmit={submitForm}>
    //         <div>
    //             <label htmlFor="name-input" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
    //                 Name
    //             </label>
    //             <input
    //                 autoComplete="name"
    //                 className="mt-1 w-full rounded-md px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500 focus:ring-1 focus:outline-none"
    //                 id="name-input"
    //                 name="name"
    //                 placeholder="Your Name"
    //                 ref={nameEl}
    //                 required
    //                 type="text"
    //                 disabled={submitted}
    //             />
    //         </div>

    //         <div>
    //             <label htmlFor="phone-input" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
    //                 Phone Number
    //             </label>
    //             <div className="relative mt-1">
    //                 <input
    //                     autoComplete="tel"
    //                     className="w-full rounded-md px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500 focus:ring-1 focus:outline-none"
    //                     id="phone-input"
    //                     name="phone"
    //                     placeholder="+1 (555) 000-0000"
    //                     ref={phoneEl}
    //                     required
    //                     type="tel"
    //                     disabled={submitted}
    //                 />
    //             </div>
    //             <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Please include country code.</p>
    //         </div>

    //         <div>
    //             <label htmlFor="email-input" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
    //                 Email Address
    //             </label>
    //             <input
    //                 autoComplete="email"
    //                 className="mt-1 w-full rounded-md px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-primary-500 focus:ring-primary-500 focus:ring-1 focus:outline-none"
    //                 id="email-input"
    //                 name="email"
    //                 placeholder="you@example.com"
    //                 ref={emailEl}
    //                 required
    //                 type="email"
    //                 disabled={submitted}
    //             />
    //         </div>

    //         <div className="mt-4">
    //             <button
    //                 className={`w-full rounded-md bg-primary-500 px-4 py-2 font-medium text-white transition-colors
    //       ${submitted
    //                         ? 'cursor-default opacity-80'
    //                         : 'hover:bg-primary-700 dark:hover:bg-primary-400'
    //                     }
    //       focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`}
    //                 type="submit"
    //                 disabled={submitted}
    //             >
    //                 {submitted ? 'Message Sent!' : 'Send Message'}
    //             </button>
    //         </div>
    //     </form>
    //     {submitted && (
    //         <div className="mt-4 p-4 rounded-md bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300">
    //             Thank you for contacting us! We'll get back to you shortly.
    //         </div>
    //     )}
    // </div>

    <iframe
      title="Contact Form"
      src="https://n8n.skjavedb.com/form/0add8958-8990-4845-823d-5ebd3f5edab3"
      width="100%"
      height="680"
      style={{ border: 'none' }}
    ></iframe>
  )
}

export default ContactForm
