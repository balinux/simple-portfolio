import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import { LiaAnkhSolid, LiaLinkedin } from "react-icons/lia"
import { BsGithub } from "react-icons/bs"
import { BiLink } from "react-icons/bi"

export default function Footer() {
  return (
    <footer className="mt-20 text-white">
      <div className="w-full py-8">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Rio Juniyantara Putra</h3>
            <p className="text-gray-400 text-sm">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 items-center">
           
           
            <Link
              href="https://linkedin.com"
              className=" transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LiaLinkedin className="w-8 h-8" />
            </Link>
            <Link
              href="https://github.com/balinux"
              className=" transition-colors duration-200"
              aria-label="GitHub"
            >
              <BsGithub className="w-6 h-6" />
            </Link>
            <Link
              href="https://yhotie.com"
              className=" transition-colors duration-200"
              aria-label="Twitter"
            >
              <BiLink className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Rio Juniyantara Putra. All rights reserved.</p>

            {/* Links */}
            <div className="flex space-x-6">
              {/* <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Contact
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
