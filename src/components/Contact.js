import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = ({ theme }) => {
  return (
    <section className={`px-5 py-20 md:py-32 ${theme}`} id="contact">
      <div className="container mx-auto pb-6">
        <div className="project-info md:text-left">
          <h2 className="text-4xl font-bold mb-5 border-b-[4px] w-[180px] border-teal-500 pb-2">
            Contact
          </h2>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-2xl font-semibold mb-6">
          Got a <span className="text-teal-500">question</span> or just want to say <span className="text-teal-500">hello</span>?
        </p>
        <p className="text-2xl font-semibold mb-10">
          Feel free to <span className="text-teal-500">email</span> me.
        </p>

        <p className="mb-4 text-lg">
          <FontAwesomeIcon icon={faEnvelope} color="#37e4db" className="pr-3" />
          mallampetapratyusha14@gmail.com
        </p>

        <a
          href="https://drive.google.com/file/d/1uaxdGnv01WqWYlsS_vZijnUuuKVM-cFC/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="font-bold border-2 border-teal-500 px-4 py-2"
        >
          View Resume
        </a>
      </div>
    </section>
  )
}

export default Contact
