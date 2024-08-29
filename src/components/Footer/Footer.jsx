import React from 'react';
import facebookIcon from "../../assets/icons/facebook.png";
import twitterIcon from "../../assets/icons/twitter.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import emailIcon from "../../assets/icons/email.png";
import githubIcon from "../../assets/icons/github.png";
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
  const linkSections = [
    {
      title: "Company",
      links: [
        { href: "/about", label: "About us" },
        { href: "/contact", label: "Contact us" },
        { href: "/contact", label: "Newsroom" },
        { href: "/contact", label: "Investors" },
        { href: "/contact", label: "Blog" },
        { href: "/contact", label: "Careers" }
      ]
    },
    {
      title: "Services",
      links: [
        { href: "/", label: "Our Services" },
        { href: "/", label: "Pricing" }
      ]
    },
    {
      title: "Support",
      links: [
        { href: "/", label: "FAQ" },
        { href: "/", label: "Support" }
      ]
    },
    {
      title:"Travel",
      links:[
        { href:'/', label:"Reserve"},
        { href:"/", label:"Cities"}
      ]
    }
    ];

  const socialLinks = [
    { href: "https://www.facebook.com/Girma880731631", icon: facebookIcon, alt: "Follow us on Facebook" },
    { href: "https://twitter.com/Girma880731631", icon: twitterIcon, alt: "Follow us on Twitter" },
    { href: "https://www.linkedin.com/in/girma-w-a16429263", icon: linkedinIcon, alt: "Connect with us on LinkedIn" },
    { href: "mailto:Girmawakeyo4@gmail.com", icon: emailIcon, alt: "Email us" },
    { href: "https://github.com/Girma35", icon: githubIcon, alt: "Check our GitHub" }
  ];

  return (
    <footer className="footer">
      <h1 className=" font-bold text-3xl px-9 py-5">
        <Link href="/">Ride <span className="text-primary">Ethiopia</span></Link>
      </h1>
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          {linkSections.map((section, index) => (
            <div key={index} className="sb_footer-links-div">
              <h4 className="font-bold text-xl">{section.title}</h4>
              {section.links.map((link, idx) => (
                <Link key={idx} className="link" href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="social-media">
          {socialLinks.map((social, idx) => (
            <Link key={idx} href={social.href}>
              <Image src={social.icon} alt={social.alt} width={24} height={24} />
            </Link>
          ))}
        </div>
        <div className="sb_footer-below">
          <div className="sb_footer-below-links">
            <Link className="link" href="/privacy-policy">Privacy Policy</Link>
            <Link className="link" href="/accessibility">Accessibility</Link>
            <Link className="link" href="/terms-of-service">Terms of Service</Link>
          </div>
          <div className="sb_footer-copyright">
            <p>&copy; {new Date().getFullYear()} RideEthiopia Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
