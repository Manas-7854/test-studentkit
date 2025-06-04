import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText,
  Calendar,
  Users,
  MapPin,
  Navigation,
  Camera,
  BookOpen,
  Sun,
  Moon,
  ExternalLink,
  Code,
} from 'lucide-react'
import './Kit.css'

function Kit() {
  const [isDark, setIsDark] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

 {
      id: 'director',
      title: 'Letter from Director',
      icon: FileText,
      color: 'from-indigo-500 to-blue-600',
      description: 'Welcome message from the Institute Director',
      techHint: '$ cat director_letter.txt'
    },
    {
      id: 'student_life',
      title: 'Letter from Student Life Chair',
      icon: Users,
      color: 'from-green-500 to-emerald-600',
      description: 'Message from Student Life Committee',
      techHint: '$ cat student_life_letter.txt'
    },
    {
      id: 'apex',
      title: 'Letter from APEX Body',
      icon: Users,
      color: 'from-orange-500 to-amber-600',
      description: 'Message from student representatives',
      techHint: '$ cat apex_letter.txt'
    },,
      techHint: '$ cat apex_letter.txt'
    },
    {
      id: 'documents',
      title: 'Documents Required',
      color: 'from-blue-500 to-purple-600',
      description: 'Essential documents for admission and hostel allocation',
      techHint: '$ ls Documents'
    },
    {
      id: 'schedule',
      title: 'Induction Schedule',
      icon: Calendar,
      color: 'from-green-500 to-teal-600',
      description: 'Complete timeline of orientation activities',
      techHint: '$ grep "movie_night" schedule.txt'
    },
    {
      id: 'alumni',
      title: 'Echoes from Alumni',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      description: 'Valuable insights and tips from seniors',
      techHint: '$ cat alumni.txt'
    },
    {
      id: 'hotels',
      title: 'Hotels near IIIT-H',
      icon: MapPin,
      color: 'from-pink-500 to-rose-600',
      description: 'Accommodation options for visiting families',
      techHint: '$ curl localhost:3000/hotels',
    },
    {
      id: 'directions',
      title: 'How to reach campus',
      icon: Navigation,
      color: 'from-indigo-500 to-blue-600',
      description: 'Travel guides from major cities and airports',
      techHint: '$ cd /path/to/iiith'
    },
    {
      id: 'places',
      title: 'Places to Visit',
      icon: Camera,
      color: 'from-cyan-500 to-blue-500',
      description: 'Tourist attractions around Hyderabad',
      techHint: '$ ls -l /places/to/visit'
    },
    {
      id: 'brochure',
      title: 'Informal Brochure',
      icon: BookOpen,
      color: 'from-violet-500 to-purple-600',
      description: 'Unofficial guide to campus life and culture',
      techHint: '$ cat README.md'
    }
  ]

  const toggleTheme = () => setIsDark(!isDark)

  const openCategory = (category) => {
    setSelectedCategory(category)
  }

  const closeModal = () => {
    setSelectedCategory(null)
  }

  const scrollToLanding = () => {
    const nextSection = document.querySelector('.landing-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const scrollToStudentKit = () => {
    const kitSection = document.querySelector('.life-at-iiith');
    if (kitSection) {
      kitSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="kit">

      {/* Header */}
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="header-content">
          <motion.h1
            className="student-kit-title"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="code-bracket">{'{'}</span>
            Student Kit<span className="highlight"></span>
            <span className="code-bracket">{'}'}</span>
          </motion.h1>
          <motion.div
            className="terminal-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="terminal-prompt">student@iiith:~$</span>
            <span className="terminal-command">./start_journey.sh</span>
          </motion.div>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.main
        className="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="categories-grid">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.id}
                className="category-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openCategory(category)}
              >
                <div className={`category-gradient bg-gradient-to-br ${category.color}`}>
                  <div className="category-content">
                    <div className="tech-hint">{category.techHint}</div>
                    <h3 className="category-title">{category.title}</h3>
                    <p className="category-description">{category.description}</p>
                    <div className="category-arrow">
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.main>

      {/* Modal for Category Details */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`modal-header  selectedCategory.id === 'director' ? (
                  <div className="code-block">
                    <div className="code-header">
                      <div className="code-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <span className="code-title">director_letter.md</span>
                    </div>
                    <div className="documents-content">
                      <div className="section">
                        <h3 className="section-title">🎓 Welcome to IIIT Hyderabad</h3>
                        <div className="subsection">
                          <p>Dear Students,</p>
                          <p>It gives me immense pleasure to welcome you to IIIT Hyderabad. As you embark on this exciting journey, you are joining an institution known for its academic excellence, innovative research, and vibrant campus life.</p>
                          <p>At IIIT-H, we believe in fostering not just technical expertise, but also critical thinking, creativity, and leadership skills. Our unique curriculum, world-class faculty, and state-of-the-art facilities are designed to help you reach your full potential.</p>
                          <p>The institute's focus on research, innovation, and entrepreneurship provides numerous opportunities for you to explore your interests and make meaningful contributions to society. I encourage you to take full advantage of these resources and create your own path to success.</p>
                          <p>Remember, your journey here is not just about acquiring knowledge; it's about growing as individuals, forming lasting friendships, and preparing for the challenges of tomorrow.</p>
                          <p>I wish you all the best for your academic journey ahead.</p>
                          <p><strong>Prof. P.J. Narayanan</strong><br />Director, IIIT Hyderabad</p>
                        </div>
                      </div>
                    </div>
                  </d: selectedCategory.id === 'student_life' ? (
                  <div className="code-block">
                    <div className="code-header">
                      <div className="code-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <span className="code-title">student_life_letter.md</span>
                    </div>
                    <div className="documents-content">
                      <div className="section">
                        <h3 className="section-title">🌟 Welcome from Student Life Committee</h3>
                        <div className="subsection">
                          <p>Dear Freshers,</p>
                          <p>Welcome to IIIT Hyderabad! As the Student Life Committee, we're here to ensure that your transition into college life is smooth and enjoyable.</p>
                          <p>College life is about finding the perfect balance between academics and extracurricular activities. At IIIT-H, you'll find numerous opportunities to pursue your interests, whether they lie in technology, arts, sports, or community service.</p>
                          <p>Our vibrant campus hosts various clubs, cultural events, and sports activities throughout the year. From Felicity (our annual cultural fest) to technical workshops and hackathons, there's always something exciting happening on campus.</p>
                          <p>We're here to support you in every aspect of your campus life. Don't hesitate to reach out to us or your seniors for guidance or assistance.</p>
                          <p>Looking forward to meeting you all!</p>
                          <p><strong>Student Life Committee</strong><br />IIIT Hyderabad</p>
                        </div>
                      </div>
                    </div>
                  </d: selectedCategory.id === 'apex' ? (
                  <div className="code-block">
                    <div className="code-header">
                      <div className="code-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <span className="code-title">apex_letter.md</span>
                    </div>
                    <div className="documents-content">
                      <div className="section">
                        <h3 className="section-title">👋 Greetings from APEX Body</h3>
                        <div className="subsection">
                          <p>Hey there, future IIITians!</p>
                          <p>On behalf of the APEX Body, the student representatives of IIIT Hyderabad, we're thrilled to welcome you to our campus family!</p>
                          <p>The APEX Body serves as a bridge between students and administration, working to enhance campus life and address student concerns. We organize various events and initiatives throughout the year to foster a sense of community and ensure everyone's voice is heard.</p>
                          <p>As freshers, you'll be part of our mentorship program, where seniors will guide you through academic and campus life. We also coordinate with various clubs and committees to create opportunities for skill development and personal growth.</p>
                          <p>Remember, college life is what you make of it. Participate actively, make friends, pursue your passions, and most importantly, enjoy your time here!</p>
                          <p>See you on campus!</p>
                          <p><strong>APEX Body</strong><br />Student Representatives, IIIT Hyderabad</p>
                        </div>
                      </div>
                    </div>
        /iv>
                ) v>
                ) :iv>
                ) 
               : bg-gra                {div>
                  </div>
                ) 
                re!</p>
                          <p>See you on campus!</p>
                          <p><strong>APEX Body</strong><br />Student Representatives, IIIT Hyderabad</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : selectedCategory.id === 'documents' ? (
                  <div className="documents-content">
                    <div className="code-block">
                      <div className="code-header">
                        <div className="code-dots">
                          <span></span><span></span><span></span>
                        </div>
                        {/* <span className="code-title">documents_required.md</span> */}
                      </div>
                      <div className="code-content">
                        <div className="section">
                          <h3 className="section-title">📋 Documents Required for Registration</h3>
                          <h4 className="section-desc">Submit original documents + one set of Xerox copies:</h4>
                          <ul className="doc-list">
                            <li>📄 10th Marksheet/Certificate/Date of Birth certificate</li>
                            <li>📄 11th and 12th Marksheet/Certificates</li>
                            <li>📄 Transfer Certificate/Migration Certificate</li>
                            <li>📄 JEE (Main) Score Card/NTSE/KVPY/Olympiad/SAT Score card (as applicable)</li>
                            <li>📄 Visa/PIO/Passport etc. (Original returned back) - For DASA Students</li>
                            <li>📄 Residential address proof</li>
                            <li>📄 Four stamp size photographs</li>
                            <li>📄 Allotment letter</li>
                            <li>📄 Undertaking by student and Parent/Guardian</li>
                          </ul>
                        </div>

                        <div className="section">
                          <h3 className="section-title">🎒 Necessary Items for College</h3>
                          <div className="subsection">
                            <h4>Essential Items to Bring:</h4>
                            <ul className="item-list">
                              <li><strong>Sport shoes</strong> (First Years attend Morning PT)</li>
                              <li><strong>Scientific calculator</strong></li>
                              <li>Personal clothes, footwear, etc.</li>
                            </ul>
                          </div>

                          <div className="subsection">
                            <h4>Available on Campus (competitive prices):</h4>
                            <ul className="item-list">
                              <li>Bed Roll (3x6 ft)</li>
                              <li>Pillows</li>
                              <li>Sanitary Items (Buckets, Mugs, Soaps)</li>
                              <li>Dustbins</li>
                              <li>Cloth Hangers</li>
                            </ul>
                          </div>

                          <div className="subsection">
                            <h4>Available Outside Campus:</h4>
                            <ul className="item-list">
                              <li>Curtains</li>
                              <li>Umbrella</li>
                              <li>Cellphone Connections</li>
                            </ul>
                          </div>
                        </div>

                        <div className="section">
                          <h3 clasName="section-title">📱 Servicesities</h3>

                          <div clasName="subsection">
                    <h4>📞 ellphone Connections:</h4>
                    <p>Available at Indira Nagar (1 km from camoviders:Vodafone, Airtel, etc.
                      <br />em>Location for Aitel official stor
                                       href="https://maps.appW3z9m5WzpxxgcVg26"                                    get="_blank" 
                                       rener noreferrer"
                                       s
                                          color: '#f
                                          backgroundCoa73e8', 
                                  padding: '8px 12px', 
                                  borderRadius: '6                                         textDecoration: 'none', 
                                          fontWeight: 'bold',
                                          display: 'inline-block'
                                        }}
                                      >
                                        View on Google Maps
                                      </a></em>
                              <br /><em>💡 Tip: Bring documents from home for easier account setup.</em></p>
                          </div>

                          <div className="subsection">
                            <h4>🏪 Bank Accounts:</h4>
                            <p>SBI branch available on campus. SBI & HDFC ATMs present.
                              <br /><em>💡 Tip: Bring documents and photos from home for quicker processing. Signing in to DigiLocker will also be beneficial for you in the future, as it allows easy access to verified digital documents.</em></p>
                          </div>

                          <div className="subsection">
                            <h4>🏥 Healthcare:</h4>
                            <p>• Apollo Pharmacy within 1 km<br />
                              • Aarogya centre with daytime doctors,features medical professionals from certified hospitals such as Care Hospital<br />
                              • First aid with hostel guards<br />
                              • Ambulance on call<br />
                              • Student discounts at nearby hospitals</p>
                            <p><em>⚠️ Bring necessary personal medicines like for fever,cold,cough etc</em></p>
                          </div>
                        </div>

                        <div className="code-comment">
                          <span className="comment-syntax">//</span> Pro tip: Prepare documents in advance for smooth admission!
                        </div>
                      </div>
                    </div>
                  </div>
                ) : selectedCategory.id === 'schedule' ? (
                  <div className="code-block">
                    <div className="code-header">
                      <div className="code-dots">
                        <span></span><span></span><span></span>
                      </div>
                      {/* <span className="code-title">induction_schedule.md</span> */}
                    </div>
                    <div className="documents-content">
                      <div className="section">
                        <div className="code-comment" style={{ marginBottom: '1rem' }}>
                          <span className="comment-syntax">//</span> Note: The Schedule is tentative in nature and subject to change.
                        </div>


                        <div className="section">
                          <h3 className="section-title">📅 Saturday, 26th July 2025</h3>
                          <div className="subsection">
  🎓 UG Registrations</h4>
                            <p><strong>Time:</strong> 9:00 AM - 2:00 PM<br />
                 :</strong> 105 Himalaya</p>
                          </div>
                          <div className="subsection">
                            <h4>🎉 Welcome Session</h4>
                            <p><strong>Time:</strong> 4:00 PM - 5:30 PM<br />
                              
                              <em>Welcome note by the Faculty and the Students</em></p>
                          </div>
                          
                        </div>

                        <div className="section">
                          <h3 className="section-title">📅 Friday, 28th July 2025</h3>
                          <div className="subsection">
                            <h4>🎓 LE1 and PG h</h4>
                            <p><strong>Time:</strong> 9:00 AM - 1:00 PM<br />
                              <strong>Venue:</strong> 105 Himalaya</p>
                          </div>
                          <div className="subsection">
                            <h4>🎉 Welcome Session for PG students excluding M. Tech</h4>
                            <p><strong>Time:</strong> 2:00 PM - 3:30 PM<br />
                              
                              <em>Welcome note by the Faculty and the Students</em></p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">📅 Friday, 29th July 2025</h3>
                          <div className="subsectio           <h4>🎓 M. Tech Registrations</h4>
                            <p><strong>Time:</strong> 9:00 AM - 1:00 PM<br />
                              <strong>Venue:</strong> 105 Himalaya</p>
                          </div>
                          <div className="subsection">
                            <h4>🎉 Welcome Ses/h4>
                            <p><strong>Time:</strong> 10:00 AM - 11:00 AM<br />
                      
            ome note by the Faculty and the S                    </div>

                          <div className="subsection">
                            <h4>🎉 Welcome Session for M. Tech students</h4>
                            <p><strong>Time:</strong> 3:30 PM - 5:30 PM<br />
                      
                              <em>Welcome note by the Faculty and the Students</em></p>
                          </div>

                          
                        </div>

                        
                      </div>
                    </div>
                  </div>
                ) : == 'alumni' ? (
                <div className="code-block">
                    <div className="code-header">
                      <div className="code-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <span className="code-title">alumni_echoes.md</span>
                    </div>
                    <div className="documents-content">
                      <div className="section">                     
                          <h4 className="section-desc" style={{ textAlign: 'center', fontSize: '1rem', marginBottom: '2rem' }}>
                          {/* <strong>🎓 Hear from our alumni and current students about their journey at IIIT-H</strong> */}
                        </h4>

                        <div className="section">
                          <h3 className="section-title">💼 Mayank Modi</h3>
                          <h4 className="section-desc"><em>B.Tech in Computer Science and M.S. by Research in Computational Natural Sciences, Batch of 2015</em></h4>
                          <div className="subsection">
                            <p>Taking up a dual degree course with an unheard of MS speciality was perhaps the moment where I decided to cut off from the herd. CND at IIIT is a unique attempt to bridge the amalgamation of Applied Sciences and Computer Science. Aimed at making engineers well versed in the field of biomolecules, theoretical physics and various other domains, CND is a great place for a curious mind.</p>
                            <p>IIIT has been a resourceful cradle for development on a lot of fronts. With a small community I have been able to be a part of various clubs apart from having started one of my own. My experience with IIIT has been laced with a lot of opportunities with a great location in the heart of the city. While there have been troughs through this overwhelming journey and the course has demanded some rigorous hours to be put in, I have definitely been blessed with a broader vision for things.</p>
                            <p>At the end of it all, college will be a universe in itself which will be a great chance for you to follow your instincts and shape yourself as the curriculum develops you academically. You will make buddies for life, learn things you'd least expect and fill up the storyboard of your life.</p>
                            <p><strong>P.S. Collect friends as your crowning jewels. Welcome Aboard! 💎</strong></p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">💼 Lalitha Kameswari</h3>
                          <h4 className="section-desc"><em>B.Tech in Computer Science and MS by Research in Computational Linguistics, Batch of 2017</em></h4>
                          <div className="subsection">
                            <p>Hey buddy! Congratulations on getting an admission into this college after all your hardwork and those painful exams. Entering from school to college is one of the biggest transitions we all make. Exactly one year ago, when I was looking at the same website, I was extremely curious and puzzled about what college had in store for me.</p>
                            <p>On the day of registration, I walked in with a myriad of questions in mind. But within a week, I stopped feeling lonely and had made so many friends on campus. This place where you're going to stay for the next couple of years has a charm of its own. So, for those of you who will be staying away from home for the first time, you can trust me when I say you'll find a new home here with a family of amazing peers and seniors.</p>
                            <p>Though academics might look stressful in the beginning, you'll fit in the groove as long as you're enthusiastic to learn. Explore different activities with an open mind. Finally, welcome to this place which will witness you improve and grow as a student and person. 🌟</p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">💼 Pranav Bhasin</h3>
                          <h4 className="section-desc"><em>B. Tech in Computer Science and Engineering, Batch of 2015</em></h4>
                          <div className="subsection">
                            <p>Welcome Comrades :D I understand many of you might be really skeptical about the sudden jump in life from being a school kid to an independent college student. I was at the same place as you a couple of years ago. But trust me when i say, this is the best thing that can happen to you in your life.</p>
                            <p>IIIT-H provides you with a platform to achieve everything that you may have aspired for or looked forward to in a college life. Your life is gonna be a total roller coaster ride with many ups and downs but coming out of it successful with a happy face and writing your own odyssey is what IIIT-H teaches you.</p>
                            <p>The opportunities that IIIT-H provides you are limitless. You are free to pursue any interest of yours here. We have a very active community participating and organising various events related to Coding, Entrepreneurship, Cultural Activities, Research and what not. So gear up, because even if you want to just sit idle and waste time around, Sorry, IIIT won't let you :D</p>
                            <p><strong>I wish all of you wonderful years ahead of you and all the best for all the wonderful opportunities that lie ahead. Welcome to IIIT :D 🎉</strong></p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">💼 Arihant Jain</h3>
                          <h4 className="section-desc"><em>B.Tech and M.S by Research in Electronics and Communications Engineering, Batch of 2014</em></h4>
                          <div className="subsection">
                            <p>Welcome to IIIT-H! Amidst difficult times of counselling, I chose IIIT-H because of its emphasis on research. Not only has IIIT-H offered me opportunities that I had never thought of, but also it has moulded me into a responsible and confident person that I am now.</p>
                            <p>First few months were like an adventure, where you make a ton of friends with your batchmates and seniors, try new and different things you never dreamt of, follow your instincts, find your passions and make your own everlasting memories. From infinite assignments to never ending exams, from sleeping during lectures to working all night for Felicity, IIIT-H has taught me to learn from everything.</p>
                            <p><strong>We all have with us our set of dreams and this is the time to break free your cages and chase your dreams. Welcome to the family. 🚀</strong></p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">💼 Rajas Vanjape</h3>
                          <h4 className="section-desc"><em>B.Tech in Computer Science and MS by Research in Computer Science, Batch of 2014</em></h4>
                          <div className="subsection">
                            <p>I joined IIIT Hyderabad through Olympiad mode. I chose IIIT Hyderabad over an equal, if not better option, as it offered both theoretical and practical Computer Science courses and better placement opportunities. After 4 years, I don't regret my decision.</p>
                            <p>Due to its excellent course structure, students are introduced to different aspects of computer science in first two years and get to work on an interesting research problem of their choice in later years. This enables them to work on challenging engineering problems in their career. The strong foundation provided by the course structure helped me bag an internship at Facebook London.</p>
                            <p><strong>If you want to learn new things and are ready to work hard, you are at the right place! 💪</strong></p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">💼 Riya Pal</h3>
                          <h4 className="section-desc"><em>B.Tech in Computer Science and MS by Research in Computational Linguistics, Batch of 2014</em></h4>
                          <div className="subsection">
                            <p>When I walked into this college, I was a bundle of emotions. Scared, confused and excited, all at the same time. Soon, I met my batchmates, seniors, and it has been a rollercoaster ride ever since.</p>
                            <p>After getting over the initial shock of how different college is from school, it amazed me to see the diverse and awesome set of people I found here. Coders, dancers, developers, musicians, bookworms, athletes, just about everybody has something great to offer.</p>
                            <p><strong>Going to college is as much about finding out who you really are as it is about getting that degree. Explore, learn, work, and most importantly, have fun! Welcome to IIIT! 🎊</strong></p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">💼 Kanay Gupta</h3>
                          <h4 className="section-desc"><em>B.Tech in Computer Science and Engineering, Batch of 2016</em></h4>
                          <div className="subsection">
                            <p>Welcome to IIIT-H! After countless gruesome days of preparing for JEE, SAT etc., you are finally about to enter college. After my 12th class, I had to take a decision between joining the prestigious IIT's and IIIT-H. Many people advised me to choose the former but I chose the latter because of my interest in computer science, and have never regretted the decision.</p>
                            <p>IIIT is one place which provides one with a lot of wonderful opportunities. You can be a great coder, or the artist you always wanted to become, or the dancer whose videos you watched on Youtube. Yes, you can do all of this, but it is you who would have to break out of the shell of shyness and take the step forward.</p>
                            <p><strong>Have fun, work hard, make memories. ✨</strong></p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">💼 Ameya Prabhu</h3>
                          <h4 className="section-desc"><em>BTech and MS by Research in Computer Science and Engineering, Batch of 2014</em></h4>
                          <div className="subsection">
                            <p>Hello folks! You've come to start a new journey! Guess what- You'll probably love IIIT-H! To give you a peek into what waits ahead - You are free from the shackles of Physics, Chemistry and Biology. Dive into Comp. Sci.! Follow your passions!</p>
                            <p>I was really passionate about research when I joined in. In IIIT-H, we get a lot of freedom. Yes! Explore your passions. I used to sit in random interesting lectures whenever I wanted to! I got to learn, I got to explore the R and D Labs! I could do what I've been waiting for, finally!</p>
                            <p><strong>Now is the time, my friends! Shed all the past fears, break from the shackles! 🔓</strong></p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">💼 Arya Mihir Singh</h3>
                          <h4 className="section-desc"><em>B.Tech in Computer Science and Engineering, Batch of 2014</em></h4>
                          <div className="subsection">
                            <p>Congratulations on making it to IIIT! You're entering a brand new phase of life. When I joined IIIT, I was both excited and nervous. Excited since I had heard so much about the amazing academics of IIIT (the so called "coding culture"). Nervous because, I had heard very little about the cultural scene.</p>
                            <p>Sadly, there was no "Music Club" on campus when I joined (2014). In my second year I took the responsibility to bring an active music culture to college. And guess what! When I graduated, music club was one of the most active clubs of IIIT.</p>
                            <p><strong>That is the beauty of IIIT, it gives you a good deal of freedom to create, grow, explore, excel! Have an amazing time at IIIT! :D 🎵</strong></p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">💼 Vaishnavi Pamulapati</h3>
                          <h4 className="section-desc"><em>B.Tech in Computer Science and MS by Research in Computational Linguistics, Batch of 2016</em></h4>
                          <div className="subsection">
                            <p>Passed the meticulous security guards, walked through the intermittently lit hostel corridor, and caught a glimpse of ever so many parents and students on my floor. I remember grudgingly going to the Orientation Day and listening to so many professors speak on the on goings of our college IIIT-H.</p>
                            <p>Now let's go two months down the lane. The guards knew me by name, and hostel felt like home; although I went home almost every weekend( mum missed me xD) I couldn't wait to get back to college. In two months I made the best of friends and college became my second home!</p>
                            <p><strong>So come out of your comfy shells, explore, make friends, learn, leave no stone unturned and have loads of fun, juniors! A hearty welcome to y'all! 🏠</strong></p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">💼 Vivek Kaushal</h3>
                          <h4 className="section-desc"><em>B.Tech and MS by Research in Computer Science and Engineering, Batch of 2016</em></h4>
                          <div className="subsection">
                            <p>Welcome to IIIT! It still feels unreal that an year has passed since my first day here, I remember all of it, the nerves, and the awkward small talk with people who were strangers back then, and are comrades now. The first few days are an adventure, finding new friends in your batchmates, your seniors, this is the time to follow your passion, let go of your fears, come out of your shell, and join clubs that interest you!</p>
                            <p>This is it people, the most creative period of your life has just started. Pursue your talents, go for your dreams, aim for the stars, the world is your oyster today. It's your college life, you'll love it, you'll hate it, but at the end of it, when you exit that campus gate for the very last time, you'll be prepared to take on whatever the world throws at you.</p>
                            <p><strong>Seize the day. Also, ask for a chocolate-coffee at the Juice Canteen. It's awesome. ☕</strong></p>
                          </div>
                        </div>

                        <div className="code-comment">
                          <span className="comment-syntax">//</span> These stories show that IIIT-H is more than academics - it's about growth, friendship, and discovery!
                        </div>
                      </div>
                    </div>
                  </div>
                ) : selectedCategory.id =='hotels' ? (
                  <div className="code-block">
                    <div className="code-header">
                    <div className="code-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <span className="code-title">hotels_near_iiith.md</span>
                    </div>
                    <div className="documents-content">
                      <div className="section">                        <h4 className="section-desc" style={{ textAlign: 'center', fontSize: '1rem', marginBottom: '2rem' }}>
     <strong>🏨 Accommodation options for visitors and families near the campus</strong> */}
                        </h4>

                        <div className="section">
                          <h3 className="section-title">💰 Budget Hotels </h3>

                          <div className="subsection">
                            <h4>🏨 Delight Inn - ₹1700-2000/-</h4>
                            <p><strong>📍 Address:</strong> 1-60-30-5/134, Near Botanical Garden, Gachibowli<br />
                              <strong>📞 Contact:</strong> +91-99483 11666</p>
                          </div>

                         

                          <div className="subsection">
                            <h4🏨 Zen Comforts - ₹1700-1800/-<stron>Enclave<br />
              tails visit :</strong> Make mytrip , Agoda , Goibibo</p>
                          </div>

                          <div className="subsection">
                            <h4>🏨 Hotel Madhura Inn XCLUSIVE - ₹1500/-</h4>
                            <p><strong>📍 Address:</strong> 4-47, MIG 69, Opp. DLF 3rd Gate, APHB Colony<br />
                              <strong> For Further details visit the follo
                                                                    Agoda 
                                                                
                                                                  </p>
                          </div>

                          <div className="subsection">
                            <h4>🏨 OYO 8587 Dwell Suites - ₹2500-2900/-</h4>
                            <p><strong>📍 Address:</strong> Vittal Rao Nagar, Madhapur<br />
                              <strong> For Further details visit the following websites : </strong> OYO , Agoda</p>
                          </div>

                          

                            <div className="subsection">
                            <h4>🏨 Kanha Boutique Hotel - ₹1500-1800/-</h4>
                            <p><strong>📍 Address:</strong> HIG-A-64, Mahati Chambers, APHB Colony<br />
                              <strong>For Further details visit the following websites :</strong> Agoda , Make mytrip , Goibibo  </p>
                          </div>

                          <  div className="subsection">
                            <h4>🏨 Marigold@Nest - ₹1500-2000/-</h4>
                            <p><strong>📍 Address:</strong> Plot No. 69,70,71 beside Dominos, Vinayak Nagar, Gachibowli<br />
                            <strong>For Further details visit the following websites :</strong> Agoda , Make mytrip , Goibibo </p>
                          </div>

                            <div className="subsection">
                            <h4>🏨 Hotel Silicon Ville - ₹2400-3000/-</h4>
                            <p><strong>📍 Address:</strong> Enel  Further details visit the following websites :</strong> Agoda , Make mytrip , Goibibo </p>
                          </div>

                          <div className="subsection">
                            <h4>🏨 The Lime Boutique Suites - ₹3000-3300/-</h4>
                            <p><strong>📍 Address:</strong> Jayabheri Enclave, 4-50/47, Gachibowli - Miyapur Rd<br />
                              <strong>For Further details visit the following websites :</strong> Agoda , Make mytrip , Goibibo </p>
                          </div>
                        </div>

                        

                          

                      
                        

                        <div className="section">
                          <h3 className="section-title">✨ Luxury Hotels </h3>

                            <div className="subsection">
                            <h4>🏨 Red Fox Hotel, Hyderabad - ₹6500--8000/-</h4>
                            <p><strong>📍 Address:</strong> Plot No. 1 & 2, Survey No. 64 (P), Hitech City Road<br />
                            <strong>For Further details visit the following websites :</strong> Agoda , Make mytrip , Goibibo </p>
                          </div>

                            <div className="subsection">
                            <h4>🏨 Lemon Tree Hotel, Gachibowli - ₹6000-9000/-</h4>
                            <p><strong>📍 Address:</strong> Survey No. 115/1, Financial District, Nanakram Guda<br />
                            <strong>For Further details visit the following websites :</strong> Agoda , Make mytrip , Goibibo </p>
                          </div>

                            <div className="subsection">
                            <h4>🏨 Ibis Hyderabad Hitec City - ₹7000-8500/-</h4>
                            <p><strong>📍 Address:</strong> Plot 3/2, Sector II HUDA Techno Enclave Near Cyber Towers<br />
                            <strong>For Further details visit the following websites :</strong> Agoda , Make mytrip , Goibibo </p>
                            </div>

                          <div className="subsection">
                            <h4>🏨 Avasa Hotel - 7000-9000/-</h4>
                            <p><strong>📍 Address:</strong> Plot No. 15, 24, 25 & 26, Survey No.64, Sector-1, Huda Techno Enclave<br />
                            <strong>For Further details visit the following websites :</strong> Agoda , Make mytrip , Goibi  bo </p>
                          </div>

                          <div className="subsection">
                            <h4>🏨 Deccan Serai Hotel - ₹11000-13000/-</h4>
                            <p><strong>📍 Address:</strong> 82 & 84, Hitech City Main Road<br />
                            <strong>For Further details visit the following websites :</strong> Agoda , Make mytrip , Goibibo </p>  
                          </div>

                          <div className="subsection">
                            <h4>🏨 Radisson Hyderabad HITEC City - ₹8000-10000/-</h4>
                            <p><strong>📍 Address:</strong> Miyapur Road, Chhota Anjaiah Nagar, Gachibowli<br />
                            <strong>For Further details visit the following websites :</strong> Agoda , Make mytrip , Goibibo </p>
                            </div>

                          <div className="subsection">
                            <h4>🏨 Trident - ₹19000-24000/-</h4>
                            <p><strong>📍 Address:</strong> Survey No.64, Hitech City Main Road, Near Cyber Towers<br />
                            <strong>For Further details visit the following websites :</strong> Agoda , Make mytrip , Goibibo </p>
                          </div>

                          <div className="subsection">
                            <h4>🏨 The Westin Hyderabad Mindspace - ₹20000-30000/-</h4>
                            <p><strong>📍 Address:</strong> Buildivies St, HUDA Techno Enclave<br />
                            <strong>For Further details visit the following websites :</strong> Agoda , Make mytrip , Goibibo </p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">📝 Important Note</h3>
                          <div className="subsection">
                            <p><em>💡 All rates are approximate and subject to change based on season, availability, and booking platform.</em></p>
                            <p><em>🔍 It's recommended to book in advance and compare prices across different platforms for the best deals.</em></p>
                            
                          </div>
                        </div>

                        <div className="code-comment">
                          <span className="comment-syntax">//</span> Pro tip: Book early during admission season and major events for better rates!
                      </div>
                      </div>
                    </div>
                  </div>
                ) : selectCategory.id === 'directions' ? (
                  <div className="code-block">
                    <div className="code-header">
                      <div className="code-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <span className="code-title">how_to_reach_iiith.md</span>
                    </div>
                    <div className="documents-content">
                      <div className="section">                        <h4 className="section-desc" style={{ textAlign: 'center', fontSize: '1rem', marginBottom: '2rem' }}>
                          {/* <strong>🗺️ Complete travel guide to reach IIIT Hyderabad from anywhere in the city</strong> */}
                        </h4>

                        <div className="section">
                          <h3 className="section-title">🗺️ Key Landmarks Near IIIT-H</h3>
                          <div className="subsection">
                            <p>Use these landmarks for navigation and to guide taxi/auto drivers:</p>
                            <ul className="item-list">
                              <li><strong>🏟️ Gachibowli Stadium</strong> - Major sports complex nearby</li>
                              <li><strong>🎓 HCU (Hyderabad University)</strong> - Well-known university landmark</li>
                              <li><strong>🏢 DLF Cyber City</strong> - Major IT complex in Gachibowli</li>
                              <li><strong>🛒 Indira Nagar Chowk</strong> - Main junction with shops and restaurants</li>
                            </ul>
                            <p><em>💡 Always mention "IIIT Hyderabad, Gachibowli" to drivers for better recognition</em></p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">✈️ From Rajiv Gandhi International Airport</h3>
                          <div className="subsection">
                            <h4>📍 Distance: Approximately 33 km from IIIT-H</h4>

                            <div className="subsection">
                              <h4>🚌 Pushpak Bus service (Recommended for Budget Travel)</h4>
                              <p><strong>🎫 Cost:</strong> ₹250/- per person (inclusive of all taxes)<br />
                                <strong>🛣️ Route:</strong> Airport → Gachibowli (Indira Nagar Chowk)<br />
                                <strong>⏰ Frequency:</strong> Every 30-45 minutes</p>
                              <p><strong>🚗 From Indira Nagar to IIIT-H:</strong><br />
                                • Auto: ₹50-60/-<br />
                                • You can also take bus from there for IIITH</p>
                            </div>

                            <div className="subsection">
                              <h4>🚖 Direct Taxi/Cab Options</h4>
                              <p><strong>💰 Approximate Cost:</strong><br />
                                • Uber/Ola: ₹700-800/- (Recommended)<br />
                                • Pre-paid Taxi/-<br />
                                • Airport Taxi: ₹800-1000/-</p>
                              <p><em>⏱️ Travel Time: 45-60 minutes (depending on traffic)</em></p>
                            </div>

                            <div className="subsection">
                              <h4>📞 For Assistance Contact:</h4>
                              <p><strong>Yahnit Sirineni:</strong> +91-8919159928<br />
                                <strong>Mugdha Abhyankar:</strong> +91-7337466003</p>
                            </div>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">🚂 From Railway Stations</h3>

                          <div className="subsection">
                            <h4>🚉 Secunderabad Railway Station</h4>
                            <p><strong>📍 Distance:</strong> ~25 km to IIIT-H<br />
                              <strong>🚗 Direct Auto:</strong> ₹500-600/-<br />
                              <strong>⏱️ Travel Time:</strong> 45-60 minutes</p>
                            <p><em>💡 Secunderabad is the main junction - most long-distance trains stop here</em></p>
                          </div>

                          <div className="subsection">
                            <h4>🚉 Nampally Railway Station (Hyderabad)</h4>
                            <p><strong>📍 Distance:</strong> ~18 km to IIIT-H<br />
                              <strong>🚗 Direct Auto:</strong> ~₹400-500/-<br />
                              <strong>⏱️ Travel Time:</strong> 35-45 minutes</p>
                            <p><em>💡 Also called Hyderabad station - closer to old city</em></p>
                          </div>

                          <div className="subsection">
                            <h4>🚉 Kacheguda Railway Station</h4>
                            <p><strong>📍 Distance:</strong> ~23 km to IIIT-H<br />
                              <strong>🚗 Direct Auto:</strong> ₹500-600/-<br />
                              <strong>⏱️ Travel Time:</strong> 40-50 minutes</p>
                          </div>

                          <div className="subsection">
                            <h4>🚊 Lingampally Station (MMTS) - Closest Option</h4>
                            <p><strong>📍 Distance:</strong> ~7 km from IIIT-H<br />
                              <strong>🚗 Auto fare:</strong> ~₹50/-<br />
                              <strong>⏱️ Travel Time:</strong> 15-20 minutes</p>
                            <p><strong>🚊 MMTS Connection:</strong> You can reach Lingampally from all major railway stations via MMTS (local train)</p>
                            <p><strong>🌐 MMTS Timetable:</strong> <a href="http://www.mmtstraintimings.in/timetable.aspx" target="_blank">www.mmtstraintimings.in/timetable.aspx</a></p>
                            <p><em>💡 MMTS is economical (₹5-15) but check timing schedules</em></p>
                          </div>

                          <div className="subsection">
                            <h4>📞 For Railway Station Assistance Contact:</h4>
                            <p><strong>Yahnit Sirineni:</strong> +91-8919159928<br />
                              <strong>Mugdha Abhyankar:</strong> +91-7337466003</p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">🚖 Cab & Auto Services</h3>

                          <div className="subsection">
                            <h4>📱 App-Based Services (Most Convenient)</h4>
                            <ul className="item-list">
                              <li><strong>🚗 Uber Cabs [AC]:</strong> ₹8/- per km <em>(Download mobile app)</em></li>
                              <li><strong>🛵 Ola Autos:</strong> ₹11/- per km <em>(Download mobile app)</em></li>
                              <li><strong>🛵 Jugnoo Autos:</strong> ₹6/- per km <em>(Download mobile app)</em></li>
                            </ul>
                            <p><em>💡 App-based services are safer and have fixed rates</em></p>
                          </div>

                          <div className="subsection">
                            <h4>🚕 Traditional Cab Services</h4>
                            <ul className="item-list">
                              <li><strong>AC Cab:</strong> ₹15/- per km</li>
                              <li><strong>Non AC Cab:</strong> ₹12/- per km</li>
                            </ul>
                          </div>

                          <div className="subsection">
                            <h4>📞 Cab Package Providers</h4>
                            <ul className="item-list">
                              <li><strong>Dot Cabs:</strong> 040-24242424 | <a href="http://www.dotcabs.com" target="_blank">www.dotcabs.com</a></li>
                              <li><strong>Easy Cabs:</strong> 040-43434343 | <a href="http://www.easycabs.com" target="_blank">www.easycabs.com</a></li>
                              <li><strong>Orange Cabs:</strong> 040-44454647 | <a href="http://www.orangecabs.com" target="_blank">www.orangecabs.com</a></li>
                            </ul>
                            <p><em>💡 Call ahead for booking and confirm rates</em></p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">🚌 Public Transport (Budget-Friendly)</h3>

                          <div className="subsection">
                            <h4>🚏 TSRTC Buses</h4>
                            <p><strong>💰 Cost:</strong> ₹10-30/- (very economical)<br />
                              <strong>🛣️ Availability:</strong> Buses readily available from all over Hyderabad to IIIT-H<br />
                              <strong>📍 Key Bus Routes:</strong> Check for buses going to Gachibowli/IIIT</p>

                            <div className="subsection">
                              <h4>🔍 Important Bus Numbers</h4>
                              <ul className="item-list">
                                <li><strong>Bus No. 216:</strong> Connects various parts of city to Gachibowli</li>
                                <li><strong>Bus No. 218:</strong> Another route to Gachibowli area</li>
                                <li><strong>Volvo Buses:</strong> AC buses with premium comfort (₹25-50)</li>
                              </ul>
                            </div>

                            <p><strong>⚠️ Important for Newcomers:</strong> Always confirm the route to IIIT with the conductor before boarding. Ask for "IIIT Gachibowli" or "Gachibowli Stadium"</p>
                            <p><em>💡 Download TSRTC app for real-time bus tracking and routes</em></p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">📱 Useful Apps & Resources</h3>

                          <div className="subsection">
                            <h4>📲 Essential Apps to Download</h4>
                            <ul className="item-list">
                              <li><strong>🚗 Uber:</strong> For cabs and autos</li>
                              <li><strong>🚖 Ola:</strong> Local cab and auto service</li>
                              <li><strong>🚌 TSRTC:</strong> Public bus routes and timings</li>
                              <li><strong>🚊 MMTS Train Timings:</strong> Local train schedules</li>
                              <li><strong>🗺️ Google Maps:</strong> Essential for navigation</li>
                            </ul>
                          </div>

                          <div className="subsection">
                            <h4>🌐 Useful Websites</h4>
                            <ul className="item-list">
                              <li><strong>🏫 Institute Location:</strong> <a href="http://www.iiit.ac.in/institute/location" target="_blank">www.iiit.ac.in/institute/location</a></li>
                              <li><strong>🗺️ Hyderabad Travel Guide:</strong> <a href="http://www.wikitravel.org/en/Hyderabad" target="_blank">www.wikitravel.org/en/Hyderabad</a></li>
                              <li><strong>🚊 MMTS Timetable:</strong> <a href="http://www.mmtstraintimings.in/timetable.aspx" target="_blank">www.mmtstraintimings.in/timetable.aspx</a></li>
                            </ul>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">💡 Pro Tips for New Students</h3>

                          <div className="subsection">
                            <h4>🎯 Money-Saving Tips</h4>
                            <ul className="item-list">
                              <li><strong>🚌 Use Public Transport:</strong> TSRTC buses are very economical (₹10-30)</li>
                              <li><strong>📱 Share Rides:</strong> Use Ola Share/Uber Pool for cheaper fares</li>
                              <li><strong>🚊 MMTS for Long Distance:</strong> Most economical for railway station connections</li>
                              <li><strong>👥 Group Travel:</strong> Share autos/cabs with fellow students</li>
                            </ul>
                          </div>

                          <div className="subsection">
                            <h4>🛡️ Safety Tips</h4>
                            <ul className="item-list">
                              <li><strong>📱 App-Based Services:</strong> Safer than street hailing, GPS tracked</li>
                              <li><strong>🆔 Share Trip Details:</strong> Share live location with friends/family</li>
                              <li><strong>💰 Confirm Fare:</strong> Always agree on fare beforehand for autos</li>
                              <li><strong>🌃 Night Travel:</strong> Prefer cabs over autos for late night travel</li>
                            </ul>
                          </div>

                          <div className="subsection">
                            <h4>⏰ Time Planning</h4>
                            <ul className="item-list">
                              <li><strong>🚗 Peak Hours:</strong> 8-10 AM & 6-8 PM (expect longer travel times)</li>
                              <li><strong>🌧️ Monsoon Season:</strong> Add 30-50% extra time during rains</li>
                              <li><strong>📍 First Time:</strong> Start 30 minutes earlier until you're familiar with routes</li>
                              <li><strong>📞 Emergency Contacts:</strong> Save the provided contact numbers</li>
                            </ul>
                          </div>
                        </div>

                      <div className="code-comment">
                          <span className="comment-syntax">//</span> Remember: When in doubt, call the prided contacts or ask fellow students for guidance!
                        </div>
                      </div>
                    </div>
                  </div>
                ) : selectedCategory.id === 'places' ? (
                  <div className="code-block">
                    <div className="code-header">
                     <div className="code-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <span className="code-title">places_to_visit_hyderabad.md</span>
                    </div>
                    <div className="documents-content">
                      <div className="section">                        <h4 className="section-desc" style={{ textAlign: 'center', fontSize: '1rem', marginBottom: '2rem' }}>
                          {/* <strong>🏛️ Discover the vibrant city of Hyderabad - a perfect blend of history, technology, and culture!</strong> */}
                        </h4>

                        <div className="section">
                          <h3 className="section-title">🏰 Historical Landmarks</h3>

                          <div className="subsection">
                            <h4>🕌 Charminar (30 min from campus)</h4>
                            <p><strong>⭐ Rating:</strong> 5/5 | 
                              <strong>⏰ Timings:</strong> 9:30 AM - 5:30 PM </p>
                            <p>Iconic 16th-century monument and symbol of Hyderabad. Famous for its four grand arches and bustling surrounding markets. Perfect for evening visits when it's beautifully lit.</p>
                            <p><em>💡 Pro tip: Combine with Laad Bazaar shopping for pearls and bangles!</em></p>
                          </div>

                          <div className="subsection">
                            <h4>🏰 Golconda Fort (25 min from campus)</h4>
                            <p><strong>⭐ Rating:</strong> 5/5 | 
                              <strong>⏰ Timings:</strong> 9:00 AM - 6:00 PM </p>
                           <p>Magnificent 13th-century fortress known for its acoustic architecture and diamond mines. The climb to the top offers panoramic city views.</p>
                            <p><em>🌅 Best time: Early morning or evening to avoid heat</em></p>
                          </div>

                          <div className="subsection">
                            <h4>🏺 Salar Jung Museum (35 min from campus)</h4>
                            <p><strong>⭐ Rating:</strong> 4.5/5 |
                              <strong>⏰ Timings:</strong> 10:00 AM - 5:00 PM | <strong>🚫 Closed:</strong> Fridays</p>
                            <p>One of India's largest museums with an incredible collection of art, artifacts, and the famous musical clock. Per fect for history enthusiasts.</p>
                          </div>

                          <div className="subsection">
                            <h4>🏛️ Falaknuma Palace (40 min from campus)</h4>
                            <p><strong>⭐ Rating:</strong> 4.5/5 | 
                              <strong>⏰ Timings:</strong> 9:30 AM - 5:00 PM | <strong>📞 Booking:</strong> Required in advance</p>
                            <p>Stunning palace turned luxury hotel with opulent interiors. Guided tours showcase royal lifestyle and architecture.</p>
                          /div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">🌿 Natural Attractions & Parks</h3>

                          <div className="subsection">
                            <h4>🚢 Hussain Sagar Lake (30 min from campus)</h4>
                            <p><strong>⭐ Rating:</strong> 4/5 | <strong>🚤 Boat Ride</strong>
                             | <strong>⏰ Best time:</strong> Evening | <strong>🎆 Special:</strong> Musical fountain show</p>
                            <p>Heart-shaped lake with the iconic Buddhastatue in the center. Enjoy boat rides, street food, and beautiful sunset views.</p>
                            <p><em>🎵 Don't miss the musical fountain show in the evening!</em></p>
                          </div>

                          <div className="subsection">
                            <h4>🌳 KBR National Park (15 min from campus)</h4>
                            <p><strong>⭐ Rating:</strong> 4/5 | 
                              <strong>⏰ Timings:</strong> 6:00 AM - 6:00 PM | <strong>🦌 Wildlfe:</strong> 600+ species</p>
                            <p>Urban national park perfect for morning jogs, nature walks, and bird watching. Home to peacocks, deer, and various bird species.</p>
                            <p><em>🏃‍♂️ Popular jogging spot for techies and students!</em></p>
                          </div>

                          <div className="subsection">
                            <h4>🌺 Botanical Garden (15 min from campus)</h4>
                            <p><strong>⭐ Rating:</strong> 4/5 | 
                              <strong>⏰ Timings:</strong> 8:30 AM - 6:30 PM | <strong>🦋 Special:</strong> Butterfly garden</p>
                            <p>Sprawling gardens with diverse flora, butterfly garden, and serene walking paths. Great for picnics and nature photography.</p>
                          </div>

                          <div className="subsection">
                            <h4>🏞️ Osman Sagar Lake (45 min from campus)</h4>
                            <p><strong>⭐ Rating:</strong> 4/5 | 
                              <strong>⏰ Best time:</strong> Sunrise/Sunset | <strong>🏔️ View:</strong> Scenic hills</p>
                            <p>Peaceful lake surrounded by hills, perfect for weekend getaways and photography. Less crowded than Hussain Sagar.</p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">🛍️ Shopping & Entertainment</h3>

                          <div className="subsection">
                            <h4>🛒 HITEC City & Cyberabad (10 min from campus)</h4>
                            <p><strong>⭐ Rating:</strong> 4.5/5 | <strong>🏢 Malls:</strong> Inorbit, Forum, Mindspace<br />
                              <strong>🍕 Food:</strong> International cuisines | <strong>🎬 Entertainment:</strong> Multiplex cinemas</p>
                            <p>India's largest IT hub with modern malls, restaurants, and entertainment options. Perfect for weekend hangouts.</p>
                            <p><em>💼 Experience the tech capital vibe where you'll likely work after graduation!</em></p>
                          </div>

                          <div className="subsection">
                            <h4>🛍️ Banjara Hills & Jubilee Hills (25 min from campus)</h4>
                            <p><strong>⭐ Rating:</strong> 4.5/5 | <strong>🛒 Shopping:</strong> Road No. 12, GVK One<br />
                              <strong>🍽️ Dining:</strong> Fine restaurants | <strong>☕ Cafes:</strong> Trendy coffee shops</p>
                            <p>Upscale neighborhoods with premium shopping, fine dining, and vibrant nightlife. Popular among young professionals.</p>
                          </div>

                          <div className="subsection">
                            <h4>🏪 Laad Bazaar (Near Charminar)</h4>
                            <p><strong>⭐ Rating:</strong> 4/5 | <strong>💎 Famous for:</strong> Pearls, bangles, jewelry<br />
                              <strong>⏰ Timings:</strong> 11:00 AM - 9:00 PM | <strong>💰 Bargaining:</strong> Essential!</p>
                            <p>Traditional market famous for pearls, bangles, and Hyderabadi artifacts. Perfect for buying souvenirs and gifts.</p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">🍽️ Food Paradise</h3>

                          <div className="subsection">
                            <h4>🍖 Paradise Restaurant (Multiple locations)</h4>
                            <p><strong>⭐ Rating:</strong> 4.5/5 | <strong>🥘 Famous for:</strong> Hyderabadi Biryani<br />
                              <strong>💰 Price:</strong> ₹300-500 per person | <strong>🌟 Must-try:</strong> Mutton Biryani</p>
                            <p>Legendary restaurant chain serving authentic Hyderabadi biryani since 1953. A culinary pilgrimage for every visitor!</p>
                          </div>

                          <div className="subsection">
                            <h4>🧁 Famous Ice Cream (Secunderabad)</h4>
                            <p><strong>⭐ Rating:</strong> 4.5/5 | <strong>🍦 Famous for:</strong> Unique flavors<br />
                              <strong>💰 Price:</strong> ₹50-150 | <strong>🌟 Must-try:</strong> Kesar Kulfi, Dry fruit</p>
                            <p>Iconic ice cream parlor with traditional flavors and generous portions. Perfect summer treat!</p>
                          </div>

                          <div className="subsection">
                            <h4>🥤 Irani Chai (Old City)</h4>
                            <p><strong>⭐ Rating:</strong> 4/5 | <strong>☕ Famous for:</strong> Strong tea + Osmania biscuits<br />
                              <strong>💰 Price:</strong> ₹15-30 | <strong>📍 Best spots:</strong> Nimrah Café, Hotel Shadab</p>
                            <p>Experience the authentic Hyderabadi tea culture at traditional Irani cafés. Perfect for evening conversations!</p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">🎯 Student-Friendly Spots</h3>

                          <div className="subsection">
                            <h4>🎮 Forum Sujana Mall (20 min from campus)</h4>
                            <p><strong>⭐ Rating:</strong> 4.5/5 | <strong>🎪 Entertainment:</strong> Gaming zone, bowling<br />
                              <strong>🍔 Food court:</strong> Budget-friendly | <strong>🎬 Cinema:</strong> Latest movies</p>
                            <p>Popular hangout for students with gaming zones, affordable food, and entertainment options.</p>
                          </div>

                          <div className="subsection">
                            <h4>☕ Coffee Culture (Multiple locations)</h4>
                            <p><strong>⭐ Rating:</strong> 4/5 | <strong>📚 Study-friendly:</strong> Wi-Fi + quiet zones<br />
                              <strong>💰 Budget:</strong> ₹100-200 | <strong>🌟 Popular:</strong> Café Coffee Day, Starbucks</p>
                            <p>Numerous cafés perfect for study sessions, project discussions, and casual meetups with friends.</p>
                          </div>

                          <div className="subsection">
                            <h4>🏸 Sports Complexes</h4>
                            <p><strong>⭐ Rating:</strong> 4/5 | <strong>🏊‍♂️ Activities:</strong> Swimming, badminton, gym<br />
                              <strong>💰 Price:</strong> ₹100-300/hour | <strong>📍 Locations:</strong> Gachibowli, Kondapur</p>
                            <p>Modern sports facilities for fitness enthusiasts and recreational sports activities.</p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">🚗 Day Trip Destinations</h3>

                          <div className="subsection">
                            <h4>🏔️ Ananthagiri Hills (90 min from campus)</h4>
                            <p><strong>⭐ Rating:</strong> 4.5/5 | <strong>🌡️ Climate:</strong> Cool & pleasant<br />
                              <strong>🏕️ Activities:</strong> Trekking, camping | <strong>📷 Best for:</strong> Nature photography</p>
                            <p>Perfect weekend getaway for nature lovers with scenic drives, trekking trails, and coffee plantations.</p>
                          </div>

                          <div className="subsection">
                            <h4>🌊 Nagarjuna Sagar (3 hours from campus)</h4>
                            <p><strong>⭐ Rating:</strong> 4/5 | <strong>🏛️ Attractions:</strong> Dam, Buddhist sites<br />
                              <strong>🚢 Activities:</strong> Boat rides | <strong>🕰️ Best for:</strong> Full day trip</p>
                            <p>Massive dam and reservoir with historical Buddhist sites. Great for weekend trips with friends.</p>
                          </div>

                          <div className="subsection">
                            <h4>🦁 Nehru Zoological Park (40 min from campus)</h4>
                            <p><strong>⭐ Rating:</strong> 4/5 | <strong>🎫 Entry:</strong> ₹50<br />
                              <strong>⏰ Timings:</strong> 8:30 AM - 5:00 PM | <strong>🚫 Closed:</strong> Mondays</p>
                            <p>One of India's largest zoos with diverse wildlife including tigers, lions, and elephants. Perfect family destination.</p>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">📱 Student Tips & Hacks</h3>
                          <div className="subsection">
                            <p><strong>🚌 Transportation:</strong> Use TSRTC buses for budget tr                ) : selectedCategory.id === 'brochure' ? (
                  <div className="code-block">
                    <div className="code-header">
                      <div className="code-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <span className="code-title">informal_iiith_guide.md</span>
                    </div>
                    <div className="documents-content">
                      <div className="section">
                        <div className="section-desc" style={{ textAlign: 'center', fontSize: '1rem', marginBottom: '2rem' }}>
                          {/* <strong>📖 An Informal Introduction to IIIT-H - Everything you need to know about life at IIIT-H</strong> */}
                        </div>

                        <div className="section">
                          <h3 className="section-title">🎓 About IIIT-H</h3>
                          <div className="subsection">
                            <p>IIIT-H is a university that provides the quintessential college life. The curriculum not only provides core technical courses required for career-oriented endeavors but also focuses on molding the student as a whole by providing life-skills as part of their non-technical courses.</p>t labs have extended hours</li>
                              <li><strong>☕ WiFi:</strong> Available everywhere on campus</li>
                            </ul>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">💡 Pro Tips</h3>
                          <div className="subsection">
                            <ul className="item-list">
                              <li>Keep your ID card handy - you'll need it everywhere</li>
                              <li>Join clubs that interest you in the first few weeks</li>
                              <li>Get to know your seniors - they're your best guides</li>
                              <li>Maintain a good sleep schedule (seriously!)</li>
                              <li>BBC (Basketball Canteen) serves the best maggi!</li>
                            </ul>
                          </div>

                          <p><em>Remember: College life is what you make of it. Study hard, but don't forget to have fun and make memories!</em></p>
                        </div>
                      </div>
                    </div>
                  </div>

                            <p>IIIT-H is known for its <strong>groundbreaking research</strong>, with a strong emphasis on research-oriented knowledge building. The research-oriented approach helps solve real-life problems and allows students to work on cutting-edge technology.</p>

                            <div className="subsection">
                              <h4>💼 Director's Vision</h4>
                              <p><em>As the director P.J. Narayan likes to say:</em></p>
                              <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: '#10b981', textAlign: 'center', margin: '1rem 0', padding: '1rem', border: '2px solid #10b981', borderRadius: '8px' }}>
                                "IIIT-H prepares not for your first job, but for your last job."
                              </p>
                            </div>

                            <div className="subsection">
                              <h4>🌟 Unique Programs</h4>
                              <p>The institute's unique <strong>Human Values program</strong> at the undergraduate level has gained attention at national and international levels. The perfect blend of core, science and humanities courses creates a highly balanced program.</p>
                            </div>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">📚 Academics</h3>
                          <div className="subsection">
                            <p>IIIT-H has made a mark in various spheres through groundbreaking research and alumni achievements, all because of its <strong>high academic standards</strong>. The college provides an excellent and balanced academic environment while expecting responsible behavior from students.</p>

                            <div className="subsection">
                              <h4>👨‍🏫 Teaching Assistant System</h4>
                              <p>The Undergraduate TA system includes students who assist lecturers by taking charge of Labs and Tutorials. This system helps students:</p>
                              <ul className="item-list">
                                <li>Interact better with peers and faculty</li>
                                <li>Learn faster through peer teaching</li>
                                <li>Gain valuable tutoring experience as TAs</li>
                                <li>Build leadership and communication skills</li>
                              </ul>
                            </div>

                            <div className="subsection">
                              <h4>🔄 Academic Flexibility</h4>
                              <p>The academic model allows greater freedom in course selection:</p>
                              <ul className="item-list">
                                <li><strong>Electives from 5th semester onward</strong> - Choose your specialization path</li>
                                <li><strong>Humanities courses</strong> - Philosophy, psychology, economics</li>
                                <li><strong>Soft Skills</strong> - Communication, presentation, teamwork</li>
                                <li><strong>Science courses</strong> - Mathematics, physics, chemistry</li>
                              </ul>
                              <p><em>💡 This flexibility helps widen your horizons across various disciplines</em></p>
                            </div>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">🎉 Felicity - Annual Fest</h3>
                          <div className="subsection">
                            <p><strong>Felicity</strong> is the annual techno-cultural fest - a three-day spectacle involving exciting activities, competitions, talks, workshops, and stunning performances by bands from across the country. It begins with Inaugurals performed by our own students.</p>

                            <div className="subsection">
                              <h4>🎪 Event Teams & Activities</h4>
                              <ul className="item-list">
                                <li><strong>🤖 Robotics team for Pulsation</strong> - Build and battle robots</li>
                                <li><strong>🎭 Artists for Kalakshetra</strong> - Dance, drama, music performances</li>
                                <li><strong>📚 Literary enthusiasts for LitCafe</strong> - Poetry, debates, writing competitions</li>
                                <li><strong>🎮 Gamers for Zombie Zone</strong> - Counter-Strike, DotA, FIFA tournaments</li>
                                <li><strong>🎵 Music and band performances</strong> - Professional artists and student bands</li>
                                <li><strong>💻 Tech workshops and talks</strong> - Industry experts and innovations</li>
                              </ul>
                              <p><em>🎊 All teams join hands to create a wonderful 3-day bonanza of learning, fun, and competition!</em></p>
                            </div>
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">🏠 Hostels & Campus Life</h3>

                          <div className="subsection">
                            <h4>🏢 Hostels</h4>
                            <p>We have <strong>5 hostels</strong> with excellent facilities:</p>

                            <div className="subsection">
                              <h4>👦 Boys' Hostels</h4>
                              <ul className="item-list">
                                <li><strong>Palash Nivas (OBH)</strong> - Old Boys Hostel</li>
                                <li><strong>Kadamba Nivas (NBH)</strong> - New Boys Hostel</li>
                                <li><strong>Bakul</strong> - Additional boys accommodation</li>
                              </ul>
                            </div>

  iv className="subsection">
                              <h4>👧 Girls' Hostels</h4>
                              <ul className="item-list">
                                <li><strong>Parijat Nivas (GH)</strong> - Girls Hostel</li>
                                <li><strong>Parul</strong> - Additional girls accommodation</li>
                              </ul>
                            </div>

                            <div className="subsection">
                              <h4>🛠️ Hostel Facilities</h4>
                              <ul className="item-list">
                                <li><strong>Spacious rooms</strong> with comfortable living spaces</li>
                                <li><strong>Washing machines</strong> on each floor</li>
                                <li><strong>TV rooms</strong> for entertainment and relaxation</li>
                                <li><strong>General stores</strong> for daily necessities</li>
                                <li><strong>Barber shop</strong> for grooming needs</li>
                                <li><strong>Gyms</strong> for fitness enthusiasts</li>
                                <li><strong>Indoor sports facilities</strong> - table tennis, chess, carrom</li>
                              </ul>
                            </div>

                            
                          </div>

                          <div className="subsection">
                            <h4>🌳 Campus</h4>
                            <p>Spread over <strong>62 acres</strong> with four buildings housing schools and research centers:</p>
                            <ul className="item-list">
                              <li><strong>🏔️ Buildings named after mountain ranges:</strong> Nilgiri, Vindhya, and Himalaya</li>
                              <li><strong>🌿 Clean, green, and pollution-free environment</strong></li>
                              <li><strong>🛣️ Tree-lined roads</strong> providing natural shade and beauty</li>
                              <li><strong>🔬 State-of-the-art research centers</strong></li>
                              <li><strong>📚 Modern library and study spaces</strong></li>
                            </ul>
                            </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">🍽️ Food                <div className  ="subsection">
                            <h4>🏪 4 Messes with Variety</h4>
                            <ul className="item-list">
                           d Boys Hostel - First Floor):  </strong> North Indian cuisine</li>
                              <li><strong>🥘 OBH-GF (Old Boys Hostel - Ground Floor):</strong> South Indian cuisine</li>
                           </strong> Healthy oil-free co  oking</li>
                              <li><strong>🍚 NBH (New Boys Hostel):</strong> North & South Indian mix</li>
                          arian Mess:</strong> Operates   five days a week</li>
                            </ul>
                            <p><em>📅 Students register for meals 2 days in advance to ensure p                       </div>  

                          <div className="subsection">
                            <h4>☕ Canteens</h4>
                            <p><strong>2 canteensh with their own specialties:  </p>
                            <ul className="item-list">
                            <li><strong>🧃 Famous Juice Canteen:</strong> Popular hangout spot witand seasonal specials like av  ocado honey shake and watermelon juice.</li>
                            
                            <li><strong>🥪 Basketball Canteen (the amphitheatre, serves deli  cious dosas, Maggi, omelettes, and beverages from 10 AM to 7 PM.</li>
                            
                            <li><strong>🍽️ Vindhya Canteen ion near academics, serves br  eakfast and lunch with tea, coffee, sandwiches, and puffs; has a cozy outdoor seating area.</li>
                            
                            <li><strong>🍟 Ministry of Cheese:</strong> A small stall near VC known for cheesy fries, nuggets, and quick bites—perfect for snack lovers.</li>
                            
                            <li><strong>🌮 Chaat Canteen:</strong> Located opposite VC, offers Indian snacks like pav bhaji, pani puri, an cravings.</li>
                            
                            <li><stro  ng>🌙 Devid’s Bakery:</strong> Open from 4 PM to 4 AM, great for late-night snacks like Maggi, dosa, ice cream, and chips near Felicity Ground.</li>
                              <li><st  rong>🍛 Tantra Main Canteen:</strong> Serves complete meals from lunch to midnight with a wide range of options from starters to full course meals.</li>
                            <li><strong>🌯 Frankie Roll Stall:</strong> Famous for its variety of paneer and chicken rolls—quick, filling, and always satisfying.</li>
                            
                            <li><strong>🧃 Teacr a quick cup of chai or coffee after meals or during late-night study sessions.</li>
                            
                            <li><strong>🍫 BBInstant:</strong> 24×7 vendingtocked with chips, drinks, biscuits, and ready-to-eat snacks—perfect for hostel munchies.</li>
                            </ul>
                            <p><em>💡 Pro tip: The Oreo shake at the Juice Canteen is a must-try!</em></p>
                          </div>

                          <div className="subsection">
                            <h5> Groceries and online food Delivery</h5>
                            
                            <ul className="item-list">
                            <li><strong>🛒 Online Grocery Apps:</strong> Zepto, Blinkit, and Swiggy Instamart deliver reliably on campus—perfect for stocking up essentials quickly.</li>
                            
                            <li><strong>🍽️ Food Delivery Services:</strong> Swiggy, Zomato, and Dominos work well in the campus area, offering a wide variety of restaurants and cuisines.</li>
                              
                              <li><strong>🏪 Nearby Grocery Stores:</strong> Supermarkets like Ratnadeep and other local kirana stores are within walking distance for in-person shopping needs.</li>
                            </ul>
                            
                            
                          </div>
                        </div>

                        <div className="section">
                          <h3 className="section-title">🎭 Activities</h3>

                          

                          <div className="subsection">
                            <h4>🏠 House System</h4>
                            <p><strong>4 houses</strong> compete year-round in cultural and sports activities:</p>
                            <ul className="item-list">
                              <li><strong>🌌 Aakash</strong> (Sky) - Blue house</li>
                              <li><strong>🔥 Agni</strong> (Fire) - Red house</li>
                              <li><strong>🌍 Prithvi</strong> (Earth) - Green house</li>
                              <li><strong>💨 Vayu</strong> (Air) - Yellow house</li>
                            </ul>
                            <p>Competition timeline: Starting with <strong>Fresher's Night</strong> and culminating in <strong>Cultural                       </div>

                          <div className="subsection">
                            <h4>⚽ Sports</h4>
                            <p>Year-round sports activities include:</p>

                            <div className="subsection">
                              <h4>🏆 Inter-house Competitions</h4>
                              <ul className="item-list">
                                <li>🏃‍♂️ Track and field events</li>
                                <li>🤾‍♂️ Kho-kho</li>
                                <li>🏀 Basketball</li>
                                <li>🏏 Cricket</li>
                                <li>⚽ Football</li>
                                <li>🏓 Table tennis</li>
                                <li>🏐 Volleyball</li>
                                <li>🤾‍♀️ Throwball</li>
                              </ul>
                            </div>

                            <div className="subsection">
                              <h4>🏊‍♂️ Special Facilities</h4>
                              <p><strong>Olympic-grade swimming facilities</strong> available at adjacent Gachibowli stadium - perfect for fitness and competitive swimming!</p>
                            </div>

                            <p><em>🏅 Inter-batch competitions add another layer of friendly rivalry and team building</em></p>
                          </div>
                        </div>

                        

                        <div className="section">
                          <h3 className="section-title">🌤️ Climate</h3>
                          <div className="subsection">
                            <p>Hyderabad's climate is <strong>pleasant for most of the year</strong>, making it perfect for year-round activities:</p>

                            <div className="subsection">
                              <h4>❄️ Winter (December - February)</h4>
                              <ul className="item-list">
                                <li><strong>🌡️ Temperature:</strong> Cool weather, rarely below 10°C</li>
                                <li><strong>🌟 Perfect for:</strong> Outdoor activities, sports, and exploration</li>
                                <li><strong>👕 Clothing:</strong> Light jackets and sweaters needed</li>
                              </ul>
                            </div>

                            <div className="subsection">
                              <h4>☀️ Summer (March - June)</h4>
                              <ul className="item-list">
                                <li><strong>🌡️ Temperature:</strong> Can reach 35-38°C</li>
                                <li><strong>🏖️ Good news:</strong> Summer vacations begin just as weather gets unbearable</li>
                                <li><strong>💧 Tip:</strong> Stay hydrated and use the swimming facilities!</li>
                              </ul>
                            </div>

                            <div className="subsection">
                              <h4>🌧️ Monsoon (July - September)</h4>
                              <ul className="item-list">
                                <li><strong>🌿 Pleasant rains</strong> bring relief from summer heat</li>
                                <li><strong>🌱 Campus becomes lush green</strong> and beautiful</li>
                                <li><strong>☔ Carry umbrellas</strong> and enjoy the romantic weather</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <divme="code-comment">
                    pan className="comment-syntax">//</span> to IIIT-H - where technology meets humanitreams meet reality! 🚀
                        <             </div>
              div>
                  </div>
        ) : (
                  <div classNamelock">
                    <div classNamheader">
                      <div className="cod
                        <span></span>span><span></span>
                 iv>
                      <span c="code-titletedCategory.title.toLowerCase().replace(/_')}.md</span>
                    </div>
                    <div classNe-content">
                      <p>This section will contain detailed information about {selectedCategory.title.toLowerCase()}.</              <will be added here based specific requirements fortegory.</p>
                      <dName="code-comment">
                    n className="comment-syntax">//</span> TOcomprehensive content for freshers
               /div>
                    </div>
          </div>
                )}
      </div>
              <button clasodal-close" {closeModal}>
                Close       </button>
            </motion.div>
          </motion.div>
          </AnimatePresence>

      {/* Navigate Buttons */}

      <motion.div
                className="explore-kit-section"
        ial={{ opa: 50 }}
              nView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.button
                  className="explore-button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToLanding}
                >
                  <span>Welcome To IIIT-H</span>
                  <svg className="button-arrow" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>    
                  </motion.button>
                <motion.button
                  className="explore-button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToStudentKit}
                >
                  <span>Life @ IIIT-H</span>
                  <svg className="button-arrow" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>    
                  </motion.button>
              </motion.div>

      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="footer-content">
          <div className="footer-code">
            {/* <Code size={16} /> */}
            <span> {'<'} Made with ❤️ for IIIT-H Freshers 2025 {'>'}</span>
          </div>
          <div className="footer-tech">
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

export default Kit     </motion.footer>
    </div>
  )
}

export default Kit
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>    
                  </motion.button>
                <motion.button
                  className="explore-button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToStudentKit}
                >
                  <span>Life @ IIIT-H</span>
                  <svg className="button-arrow" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>    
                  </motion.button>
              </motion.div>

      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="footer-content">
          <div className="footer-code">
            <Code size={16} />
            <span>Made with ❤️ and lots of ☕ for IIIT-H Freshers 2025</span>
          </div>
          <div className="footer-tech">
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

export default Kit