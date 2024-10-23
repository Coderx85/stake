import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

interface SocialLinksProps {
    name: string,
    url: string,
    icon: React.ReactNode
}

const socialLinks: SocialLinksProps[] = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/priyanshu085/",
        icon: <FaLinkedin className="w-12 h-12" />,
    },
    {
        name: "Github",
        url: "https://github.com/Priyanshu085",
        icon: <FaGithub className="w-12 h-12"/>,
    }
  ]

const Contact = () => {
  return (
    <div className='container'>
        <h5 className="text-4xl text-center font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        
        <div className="socials flex flex-col gap-5 px-10">
            {socialLinks.map((link) => (
                <Link href={link.url} key={link.name}>
                    <div className="group gap-7 relative flex flex-row w-fit p-5 hover:bg-white">
                        <span className="flex items-center justify-center w-16 h-16 border-2 border-white bg-black text-white rounded-sm 
                        group-hover:rounded-full group-hover:bg-white group-hover:border-black group-hover:text-black transition-all duration-500 ease-in-out">
                            {link.icon}
                        </span>
                        <span className='content-center group-hover:text-black'>
                            {link.name}
                        </span>
                    </div>
                </Link>
                ))  
            }
        </div>
    </div>
  )
}

export default Contact