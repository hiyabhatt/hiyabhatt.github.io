import React from 'react';
import './App.css';

const navItems = ['about', 'education', 'publications', 'projects', 'awards', 'CV', 'news'];

function App() {
  return (
    <div className="App">
      {/* ───────────────── Sidebar ───────────────── */}
      <aside className="sidebar" aria-label="Profile and navigation">
        <div className="profile">
          <img src="/profile.jpg" alt="Portrait of Hiya Bhatt" className="profile-img" />
          <h1 className="profile-name">Hiya Bhatt</h1>
          <p className="profile-role">Researcher in Sustainable MLOps & Self-Adaptive Systems</p>
          <p className="profile-affiliation">MS by Research, IIIT-Hyderabad</p>

          <div className="social-icons">
            <a href="mailto:hiyabhatt2002@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/HiyaBhatt" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0zM7.05 20.45H3.5V9h3.55v11.45zM5.27 7.78A2.48 2.48 0 1 1 7.75 5.3 2.48 2.48 0 0 1 5.27 7.78zM20.45 20.45h-3.49v-5.59c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.69H9.47V9h3.35v1.54h.05c.46-.87 1.6-1.78 3.3-1.78 3.54 0 4.2 2.33 4.2 5.35v6.34z" />
              </svg>
            </a>
            <a href="https://github.com/HiyaBhatt" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.87 3.16 9 7.55 10.45.55.11.75-.24.75-.54 0-.27-.01-.99-.02-1.95-3.07.67-3.72-1.48-3.72-1.48-.5-1.27-1.22-1.6-1.22-1.6-1-.69.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13 1 .1 2.58.07 3.28-.14.1-.73.4-1.23.73-1.52-2.75-.31-5.64-1.37-5.64-6.1 0-1.35.48-2.45 1.28-3.31-.13-.31-.55-1.56.12-3.26 0 0 1.03-.33 3.39 1.25.98-.27 2.02-.4 3.06-.41 1.04.01 2.07.14 3.06.41 2.35-1.58 3.38-1.25 3.38-1.25.68 1.7.25 2.95.12 3.26.8.86 1.27 1.96 1.27 3.31 0 4.74-2.9 5.78-5.66 6.09.41.35.79 1.05.79 2.13 0 1.53-.02 2.76-.02 3.14 0 .31.2.66.76.54 4.38-1.46 7.53-5.58 7.53-10.44C23.1 5.33 18.27.5 12 .5z" />
              </svg>
            </a>
            <a href="https://scholar.google.com/citations?user=GjfTAwoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
              <img src="/Google_Scholar_logo.svg" alt="Google Scholar" className="social-icon-img" />
            </a>
          </div>
        </div>

        <nav className="navbar" aria-label="Section navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item}><a href={`#${item.toLowerCase()}`} className="nav-link">{item.charAt(0).toUpperCase() + item.slice(1)}</a></li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* <!-- ───────────────── Main content ───────────────── --> */}
      <main className="main-content">
        {/* <!-- About --> */}
        <section id="about" className="section-card">
        <h2>About Me</h2>
        <p>
          Hi! I am <strong>Hiya Bhatt</strong>, a Master's by Research student at the <a href="https://www.iiit.ac.in/" target="_blank" rel="noopener noreferrer">International Institute of Information Technology, Hyderabad (IIIT Hyderabad)</a>. My work is conducted at the <a href="https://serc.iiit.ac.in/" target="_blank" rel="noopener noreferrer">Software Engineering Research Center (SERC)</a> under the mentorship of <a href="https://karthikvaidhyanathan.com/" target="_blank" rel="noopener noreferrer">Dr. Karthik Vaidhyanathan</a>.
        </p>
        <p>
        My current research focuses on building <strong>sustainable self-adaptive machine learning-enabled systems</strong> that can efficiently manage changing environments and resource constraints. This includes exploring <strong>energy-aware MLOps frameworks</strong> and integrating these systems with <strong>digital twins</strong> to enhance real-time monitoring, analysis, and decision-making in dynamic scenarios.
        </p>
        <p>
          This specialization is a direct continuation of the work I began as a research intern at SERC during my undergraduate studies. That foundational experience inspired me to pursue a Master's degree to deepen my expertise in building robust and intelligent software.
        </p>
        <p>
          Outside of my academic work, I enjoy singing.
        </p>
      </section>


        

        {/* Education – clean timeline */}
        <section id="education" className="section-card">
          <h2>Education</h2>
          <ul className="timeline">
            <li className="timeline-item">
              <span className="timeline-year">2024 – present<br />(expected 2026)</span>
              <div className="timeline-body">
                <div className="timeline-title">MS by Research, <strong>International Institute of Information Technology – Hyderabad</strong></div>
                <div className="timeline-meta">(CGPA: 9)</div>
              </div>
            </li>
            <li className="timeline-item">
              <span className="timeline-year">2020 – 2024</span>
              <div className="timeline-body">
                <div className="timeline-title">BTech (CSE), <strong>Manipal University Jaipur</strong></div>
                <div className="timeline-meta">(CGPA: 9.34)</div>
              </div>
            </li>
            <li className="timeline-item">
              <span className="timeline-year">2020</span>
              <div className="timeline-body">
                <div className="timeline-title">Class 12th (CBSE), <strong>Bhartiya Vidya Bhavans, Vadodara</strong></div>
                <div className="timeline-meta">(90.2%)</div>
              </div>
            </li>
            {/* <li className="timeline-item">
              <span className="timeline-year">2018</span>
              <div className="timeline-body">
                <div className="timeline-title">Class 10th (ICSE), <strong>Carmel School, Jorhat</strong></div>
                <div className="timeline-meta">(83%)</div>
              </div>
            </li> */}
          </ul>
        </section>

        {/* Publications */}
        <section id="publications" className="section-card">
          <h2>Publications</h2>
          <ul>
            <li>
              <a href="https://scholar.google.com/scholar?oi=bibs&cluster=14666453886330260413&btnI=1&hl=en" target="_blank" rel="noopener noreferrer">
                <strong>Hiya Bhatt</strong>, Shaunak Biswas, Srinivasan Rakhunathan, Karthik Vaidhyanathan.
                “HarmonE: A Self-Adaptive Approach to Architecting Sustainable MLOps.”
                <em> To appear in ECSA 2025.</em>
              </a>
            </li>
            <li>
              <a href="https://scholar.google.com/scholar?oi=bibs&cluster=168146282669498968&btnI=1&hl=en" target="_blank" rel="noopener noreferrer">
                <strong>Hiya Bhatt</strong>, Karthik Vaidhyanathan, Rahul Biju, Deepak Gangadharan, Ramona Trestian, Purav Shah.
                “Architecting Digital Twins for Intelligent Transportation Systems.”
                <em> ICSA Workshops, 2025.</em>
              </a>
            </li>
            <li>
              <a href="https://scholar.google.com/scholar?oi=bibs&cluster=15389033656183515278&btnI=1&hl=en" target="_blank" rel="noopener noreferrer">
                <strong>Hiya Bhatt</strong>, Shrikara Arun, Adyansh Kakran, Karthik Vaidhyanathan.
                “Towards Architecting Sustainable MLOps: A Self-Adaptation Approach.”
                <em> ICSA Companion (ICSA-C), 2024.</em>
              </a>
            </li>
          </ul>
        </section>

        {/* Projects – editorial feature cards */}
        <section id="projects" className="section-card">
          <h2>Research Projects</h2>

          <article className="feature">
            <div className="feature_bar" aria-hidden="true"></div>
            <div className="feature_body">
              <header className="feature_head">
                <h3 className="feature_title">HarmonE: An Energy-Aware MLOps Framework</h3>
                <div className="feature_tags">
                  <span className="tag">MLOps</span>
                  <span className="tag">Self-Adaptation</span>
                  <span className="tag">Green AI</span>
                </div>
              </header>

              <p>
                HarmonE is a self-adaptive MLOps framework addressing multi-dimensional sustainability in MLS via a MAPE-K loop.
                Architects specify design-time sustainability goals (Decision Map); at runtime HarmonE switches models, retrains,
                or reuses versioned models based on energy/performance context and drift.
              </p>
              <p>
                Validated with a DT for ITS, HarmonE managed a traffic-flow prediction pipeline on live sensor data—achieving a
                <strong> 54.5% energy reduction</strong> vs. periodic retraining while preserving ~95% accuracy (long-run evaluation).
              </p>

              <ul className="feature_meta">
                {/* <li><strong>Tech:</strong> Python, PyTorch, scikit-learn, pyRAPL</li> */}
                <li><strong>Highlights:</strong> energy-aware adaptation, model version reuse, drift-aware retraining</li>
              </ul>

              <div className="feature_actions">
                <a className="btn" href="https://github.com/sa4s-serc/HarmonE" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                <a className="btn ghost" href="https://sa4s-serc.github.io/HarmonE/" target="_blank" rel="noopener noreferrer">Paper Website</a>
              </div>
            </div>
          </article>

          <article className="feature">
            <div className="feature_bar" aria-hidden="true"></div>
            <div className="feature_body">
              <header className="feature_head">
                <h3 className="feature_title">DigIT: Architectural Framework for Intelligent Transportation Digital Twins</h3>
                <div className="feature_tags">
                  <span className="tag">Digital Twin</span>
                  <span className="tag">ITS</span>
                  <span className="tag">Simulation</span>
                </div>
              </header>

              <p>
                In collaboration with Middlesex University, I co-authored <em>DigIT</em>, a modular and scalable DT platform for ITS.
              </p>

              <blockquote className="quote">
                “This paper proposes an architecture for DigIT, a Digital Twin (DT) platform for Intelligent Transportation Systems (ITS),
                designed to overcome the limitations of existing frameworks by offering a modular and scalable solution for traffic management.”
                {' '}
                <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11014922" target="_blank" rel="noopener noreferrer">[PDF]</a>
              </blockquote>

              <p>
                Built on a Domain Concept Model (DCM) that formalizes ITS entities/relations, DigIT integrates predictive modelling and simulation
                using historical + real-time data to support ML-based forecasting and data-driven control.
              </p>

              <ul className="feature_list">
                <li>DCM-grounded modelling of ITS components and interactions</li>
                <li>Predictive models + simulation for scenario analysis</li>
                <li>Historical + live data streams for real-time decisions</li>
              </ul>

              <ul className="feature_meta">
                {/* <li><strong>Tech:</strong> Python, Apache Kafka, SUMO, REST/JSON, containerized services</li> */}
              </ul>
              <a className="btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11014922" target="_blank" rel="noopener noreferrer">Paper Link</a>
            </div>
          </article>
        </section>

        {/* Awards */}
        <section id="awards" className="section-card">
          <h2>Awards & Recognition</h2>
          <ul>
            {/* <li>Paper acceptance at ECSA 2025 (Core A)</li> */}
            {/* <li>Paper acceptance at ICSA 2024 (Core A)</li> */}
            <li>Best Poster Award: ICSA 2024</li>
          </ul>
        </section>

        {/* CV */}
<section id="cv" className="section-card">
  <h2>Curriculum Vitae</h2>
  <p>For a detailed overview of my work, please feel free to download my CV.</p>
  <div className="cv-download-action">
    <a 
      href="/Bhatt_CV.pdf" 
      className="btn" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Download CV (PDF)
    </a>
  </div>
</section>

{/* News & Updates */}
<section id="news" className="section-card">
    <h2>News & Updates</h2>
    <div className="news-scroll-container">
      <ul className="news-list">
        <li className="news-item">
          <span className="news-date">April 2026</span>
          <div className="news-content">
            <p className="news-title">Started my PhD journey at VU Amsterdam!</p>
          </div>
        </li> 
        <li className="news-item">
          <span className="news-date">March 2026</span>
          <div className="news-content">
            <p className="news-title">🎓 Defended my Thesis - Architecting Sustainable MLOps using Self-Adaptation 🎓</p>
             <a href="https://www.linkedin.com/feed/update/urn:li:activity:7440908871101042688/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAhpZYB7-Nw-iB1p52YLh32eF4BwSx5Ccw" className="news-link" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </li> 
        <li className="news-item">
          <span className="news-date">Jan 2026</span>
          <div className="news-content">
            <p className="news-title">🎉 Our paper got accepted in SEAMS 2026!</p>
             <a href="https://www.linkedin.com/posts/karthikv1392_sustaind-greenai-seams2026-ugcPost-7426256098195828738-gKz2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADAhpZYB7-Nw-iB1p52YLh32eF4BwSx5Ccw" className="news-link" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </li> 
        <li className="news-item">
          <span className="news-date">Jan 2026</span>
          <div className="news-content">
            <p className="news-title">🎉 Our paper got accepted in CAIN 2026!</p>
             <a href="https://www.linkedin.com/posts/karthikv1392_cain2026-sa4s-serc-ugcPost-7417749499089059840-ULP9?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADAhpZYB7-Nw-iB1p52YLh32eF4BwSx5Ccw" className="news-link" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </li> 
        <li className="news-item">
          <span className="news-date">Sep 2025</span>
          <div className="news-content">
            <p className="news-title">Heading to Cyprus to present "HarmonE" at ECSA 2025! 🇨🇾</p>
            <a href="https://www.linkedin.com/posts/hiya-bhatt-a465251a6_ecsa2025-mlops-selfadaptation-activity-7375097457699037184-fQyr?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADAhpZYB7-Nw-iB1p52YLh32eF4BwSx5Ccw" className="news-link" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </li>
         <li className="news-item">
          <span className="news-date">Jul 2025</span>
          <div className="news-content">
            <p className="news-title">Presented our research at NIT Warangal.</p>
            <a href="https://www.linkedin.com/posts/shaunak-biswas-aa189a264_seri2025-greenai-sustainablemlops-activity-7351197943158276096-9uDi?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAhpZYB7-Nw-iB1p52YLh32eF4BwSx5Ccw" className="news-link" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </li>
        <li className="news-item">
          <span className="news-date">May 2025</span>
          <div className="news-content">
            <p className="news-title">🎉 Our paper, "HarmonE," was accepted into the main research track at ECSA 2025 (Core A)!</p>
            <a href="https://www.linkedin.com/posts/hiya-bhatt-a465251a6_ecsa2025-mlops-sustainability-activity-7332057523069341696-KyUM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAhpZYB7-Nw-iB1p52YLh32eF4BwSx5Ccw" className="news-link" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </li>
        <li className="news-item">
          <span className="news-date">Jan 2025</span>
          <div className="news-content">
            <p className="news-title">Our paper on Digital Twins was accepted to the AEDT workshop at ICSA 2025.</p>
            <a href="https://www.linkedin.com/posts/hiya-bhatt-a465251a6_digitaltwins-its-smartcities-activity-7302010328848945152-pBYQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAhpZYB7-Nw-iB1p52YLh32eF4BwSx5Ccw" className="news-link" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </li>
        <li className="news-item">
          <span className="news-date">Dec 2024</span>
          <div className="news-content">
            <p className="news-title">Visited Middlesex University, UK for a research collaboration on the DigIT project.</p>
            <a href="https://www.linkedin.com/posts/hiya-bhatt-a465251a6_digitaltwins-intelligenttransportationsystems-activity-7283077497137602560-pnQ3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAhpZYB7-Nw-iB1p52YLh32eF4BwSx5Ccw" className="news-link" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </li>
        <li className="news-item">
          <span className="news-date">Aug 2024</span>
           <div className="news-content">
            <p className="news-title">Began my Master's by Research at IIIT Hyderabad.</p>
            <a href="https://www.linkedin.com/posts/hiya-bhatt-a465251a6_iiith-serc-msbyresearch-activity-7222553089210294272-Dqd7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAhpZYB7-Nw-iB1p52YLh32eF4BwSx5Ccw" className="news-link" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </li>
        <li className="news-item">
          <span className="news-date">Jun 2024</span>
           <div className="news-content">
            <p className="news-title">🏆 Honored to receive the Best Poster Award at ICSA 2024 for our work on sustainable MLOps!</p>
            <a href="https://www.linkedin.com/posts/hiya-bhatt-a465251a6_icsa2024-softwarearchitecture-mlops-activity-7207389294099918848-wEzd?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAhpZYB7-Nw-iB1p52YLh32eF4BwSx5Ccw" className="news-link" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </li>
        <li className="news-item">
          <span className="news-date">Feb 2024</span>
           <div className="news-content">
            <p className="news-title">Attended the ISEC conference at IIIT Bangalore.</p>
            <a href="https://www.linkedin.com/posts/karthikv1392_softwareengineering-research-india-ugcPost-7166461570682748928-HiKF?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAhpZYB7-Nw-iB1p52YLh32eF4BwSx5Ccw" className="news-link" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </li>
        <li className="news-item">
          <span className="news-date">Feb 2024</span>
           <div className="news-content">
            <p className="news-title">Our poster on sustainable MLOps was accepted at ICSA 2024.</p>
            <a href="https://www.linkedin.com/posts/karthikv1392_holi-sa4s-ushashri-ugcPost-7178060301160837122-K2Md?utm_source=share&utm_medium=member_desktop&rcm=ACoAADAhpZYB7-Nw-iB1p52YLh32eF4BwSx5Ccw" className="news-link" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </li>
      </ul>
    </div>
  </section>


        <footer>
          <p>© {new Date().getFullYear()} Hiya Bhatt · Last updated: July 2025</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
