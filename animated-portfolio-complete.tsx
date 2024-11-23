import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, Github, Twitter, Instagram, Facebook } from 'lucide-react';

const Portfolio = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "#", label: "Github" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.div 
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              className="md:w-1/2 mb-8 md:mb-0"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h1 className="text-4xl font-bold mb-4">Hein Lu Lu @ Lucas</h1>
              <p>IT Engineer | Digital Marketing Specialist | E-Commerce Expert</p>
              <motion.div 
                className="flex space-x-4 mt-4"
                whileHover={{ scale: 1.05 }}
              >
                <a 
                  href="mailto:heinlulu96@gmail.com" 
                  className="bg-white text-blue-800 px-6 py-2 rounded-full hover:bg-blue-100 transition"
                >
                  Contact Me
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="md:w-1/3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/api/placeholder/300/300" 
                alt="Lucas Profile" 
                className="rounded-full shadow-lg mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Profile Section */}
      <motion.div 
        className="section py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Profile</h2>
          <p className="text-center">
            As a digital marketer with expertise in engaging audiences online,
            optimizing campaigns using data analytics, and creativity in content
            creation, I am dedicated to achieving business goals while staying
            updated on the latest trends.
          </p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <div className="section py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Digital Marketing",
                skills: ["SEO/SEM Analytics", "Social Media Strategy", "Email Marketing", "WhatsApp Marketing"]
              },
              {
                title: "E-Commerce",
                skills: ["Shopify Expert", "WooCommerce", "Amazon & Noon Specialist", "Inventory Management"]
              },
              {
                title: "Technical",
                skills: ["Web Development (HTML, CSS)", "WordPress, Laravel", "Java, C++", "Graphic Design"]
              }
            ].map((category, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul>
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="mb-2">{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Experience Section */}
      <motion.div 
        className="section py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "Digital Marketing Executive",
                company: "CAVO General Trading LLC, Dubai",
                period: "Nov 2023 - Jul 2024",
                points: [
                  "Managed digital campaigns across SEO, PPC, social media, and email marketing",
                  "Oversaw creation and optimization of PPC campaigns",
                  "Monitored website analytics for optimization"
                ]
              },
              {
                title: "Digital Marketing Specialist",
                company: "One Two One Myanmar Co., Ltd",
                period: "Mar 2018 - Aug 2022",
                points: [
                  "Created digital marketing campaigns for clients across multiple platforms",
                  "Managed social media to boost brand awareness",
                  "Research market trends and consumer behavior"
                ]
              }
            ].map((job, index) => (
              <motion.div 
                key={index}
                className="border-l-4 border-blue-600 pl-4"
                variants={fadeInUp}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p>{job.company}</p>
                <p className="text-gray-600 mb-2">{job.period}</p>
                <ul className="list-disc ml-4 text-gray-700">
                  {job.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Education Section */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-lg font-semibold">Bachelor of Computer Engineering</h4>
                  <p className="text-gray-400">Yangon Technological University</p>
                  <p className="text-gray-400">2012 - 2018 • GPA: 4.2</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="text-lg font-semibold">Project Management Diploma</h4>
                  <p className="text-gray-400">Institute of Commercial Management</p>
                  <p className="text-gray-400">Distinction A</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold mb-6">Contact</h3>
              <div className="space-y-4">
                <motion.a
                  href="tel:+971551725009"
                  className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <Phone size={20} />
                  <span>+971 551725009</span>
                </motion.a>
                <motion.a
                  href="mailto:heinlulu96@gmail.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <Mail size={20} />
                  <span>heinlulu96@gmail.com</span>
                </motion.a>
                <motion.div
                  className="flex items-center space-x-3 text-gray-400"
                  whileHover={{ x: 10 }}
                >
                  <MapPin size={20} />
                  <span>801, Al Rashed Building, Al Rigga, Deira, Dubai</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold mb-6">Connect</h3>
              <div className="grid grid-cols-5 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                    whileHover={{ y: -5 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-8">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            className="border-t border-gray-800 pt-8 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2024 Lucas Portfolio. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
