'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  const experience = [
    {
      title: 'Senior Developer/Support - Section Store Shopify App',
      period: '2024 - Present',
      company: 'Section Store',
      achievements: [
        'One of the senior developers/support for Section Store Shopify app with 1,000+ active merchants',
        'Handled support requests and troubleshooting for 1,000+ merchants',
        'Developed and maintained app features for Shopify store customization',
        'Provided technical support and resolved complex merchant issues',
        'Contributed to development team and app updates and improvements',
      ],
    },
    {
      title: 'Frontend / Backend Web Developer',
      period: '2016 - Present',
      company: 'OnlineJobs.ph (Freelance)',
      achievements: [
        'Successfully developed and launched numerous websites for diverse clients',
        'Specialized in WordPress and Shopify custom theme development',
        'Developed custom software solutions using C++, JavaScript, and other languages',
        'Managed multiple freelance projects with tight deadlines',
        'Provided expert guidance and delivered high-quality solutions',
      ],
    },
    {
      title: 'Senior WordPress Developer / Software Developer',
      period: 'June 2023 - January 2024',
      company: 'Stratedia',
      achievements: [
        'Developed and maintained websites using WordPress with full project lifecycles',
        'Specialized in responsive, user-friendly websites with performance optimization',
        'Developed desktop applications using PHP and Laravel 9',
        'Engaged in troubleshooting, debugging, and code optimization',
      ],
    },
    {
      title: 'Shopify Expert',
      period: 'January 2024 - May 2024',
      company: 'Kereni Ventures',
      achievements: [
        'Managed Shopify stores of around 100+',
        'Optimized stores for better User Experience',
        'Created custom themes from scratch',
      ],
    },
    {
      title: 'Shopify Developer',
      period: 'February 2023 - August 2023',
      company: 'Twlv20',
      achievements: [
        'Handled website retainers for daily changes (Shopify, WordPress)',
        'Created duplicate landing pages for A/B testing',
        'Created forms for Clickbank Affiliate Program',
        'Created Metafields to manipulate PDP',
      ],
    },
    {
      title: 'Shopify Expert',
      period: 'July 2022 - February 2023',
      company: 'Worthview Marketing',
      achievements: [
        'Handled website retainers for daily changes (Shopify, Squarespace, WordPress)',
        'Created duplicate themes for events to be published and unpublished',
        'Integrated apps for Quick Order, Local Finder, and Inventory Management',
        'Manipulated shipping rates for specific radius',
      ],
    },
    {
      title: 'Shopify Web Developer',
      period: 'September 2021 - July 2022',
      company: 'wearetraction.io',
      achievements: [
        'Created custom themes and sectioning in Shopify',
        'Built websites from scratch (Front-End, Back-End functionality)',
        'Handled API integration and SEO optimization',
        'Migrated web pages (Click Funnels to WordPress and Shopify 1.0 to 2.0)',
        'Managed DevOps and CPanel troubleshooting',
      ],
    },
    {
      title: 'System Support Engineer',
      period: 'March 2016 - January 2020',
      company: 'Focus Inc Group of Companies',
      achievements: [
        'Workstation and Network Administrator',
        'Server Management and Maintenance',
        'Firewall Maintenance and System Backup',
        'Hardware and Software Installations',
        'Network Troubleshooting and IT Equipment Maintenance',
      ],
    },
  ]

  const education = [
    {
      title: 'Bachelor of Science Major in Information Technology',
      institution: 'University of St. Lasalle',
      year: '2012 - 2014',
    },
    {
      title: 'Bachelor of Science in Nursing',
      institution: 'Riverside College',
      year: '2003 - 2005',
    },
  ]

  const competencies = {
    'Technical Skills': [
      'Shopify Development',
      'Liquid Templating',
      'JavaScript (ES6+)',
      'React & Vue.js',
      'HTML5 & CSS3',
      'SCSS & Sass',
      'Node.js',
      'PHP',
    ],
    'E-commerce Expertise': [
      'Shopify Plus',
      'Multi-store Management',
      'Payment Integration',
      'Inventory Management',
      'Order Processing',
      'Customer Experience',
      'Analytics & Tracking',
      'SEO Optimization',
    ],
    'Business Skills': [
      'Project Management',
      'Client Communication',
      'Technical Consulting',
      'Problem Solving',
      'Team Collaboration',
      'Mentoring',
      'Documentation',
      'Quality Assurance',
    ],
  }

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 dark:text-white">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate Shopify developer dedicated to creating exceptional e-commerce experiences
          </p>
        </motion.div>

        {/* Personal Introduction */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 dark:text-white">My Story</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I&apos;m Denmark L. Dano, a seasoned web developer with 9 years of experience specializing
                  in WordPress and Shopify development. My journey spans 4 years with WordPress and
                  5 years with Shopify, complemented by a strong background as a Desktop and System
                  Support Engineer.
                </p>
                <p>
                  Based in Negros Occidental, Philippines, I&apos;ve dedicated my career to creating
                  exceptional digital solutions that drive business growth. My expertise includes
                  HTML, CSS, C++, JavaScript, JSON, and Liquid templating, with particular strength
                  in network, desktop, and system analysis.
                </p>
                <p>
                  I&apos;m fully committed to meeting project deadlines and can dedicate full-time efforts
                  when needed. My main strengths lie in providing virtual support and delivering
                  high-quality solutions that exceed client expectations.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                <Image
                  src="/images/denmark-dano-headshot.jpg"
                  alt="Denmark L. Dano"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    if (target.nextElementSibling) {
                      ;(target.nextElementSibling as HTMLElement).style.display = 'flex'
                    }
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Professional Journey</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Education & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-lg font-bold dark:text-white mb-2">{edu.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
                <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{edu.year}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Competencies */}
        <section>
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(competencies).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold mb-4 dark:text-white">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

