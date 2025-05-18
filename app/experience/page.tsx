"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Script from "next/script"
import ParticlesBackground from "@/components/particles-background"

export default function Experience() {
  return (
    <>
      <Navigation />
      <ParticlesBackground />

      <main className="page-content">
        <div className="container">
          <header className="page-header">
            <h1>Experience</h1>
            <p>My professional experience and academic journey.</p>
          </header>

          <div className="experience-container">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-date">Nov 2020 - Present</div>
                <h2 className="timeline-title">Researcher</h2>
                <div className="timeline-company">
                  <a
                    href="https://www.aalto.fi/en/department-of-electrical-engineering-and-automation/bionic-and-rehabilitation-engineering"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Bionic and Rehabilitation Engineering group, Aalto University, Finland
                  </a>
                </div>
                <ul className="timeline-details">
                  <li className="timeline-detail-item">
                    Working on Sensitivity of High-Fidelity Neural Interfaces to Perturbations
                  </li>
                  <li className="timeline-detail-item">Developing algorithms for robust motor unit decomposition</li>
                  <li className="timeline-detail-item">
                    Investigating effects of signal quality on neural interface performance
                  </li>
                </ul>

                <h3 className="timeline-subtitle">MSc Students Advisor:</h3>
                <ul className="timeline-details">
                  <li>
                    Daniel Fasel, Aalto University (2024)
                    <div className="timeline-thesis">
                      Thesis: Performance Boost in HD-EMG Motor Unit Detection via BSS.
                      <a
                        href="https://aaltodoc.aalto.fi/items/2efeae38-0228-4d20-a295-66e2c4d80831"
                        target="_blank"
                        rel="noreferrer"
                        className="thesis-link"
                      >
                        <i className="fas fa-external-link-alt"></i> View Thesis
                      </a>
                    </div>
                  </li>
                  <li>
                    Pham Manh Tuan, Aalto University (2024)
                    <div className="timeline-thesis">
                      Thesis: High-density neural sensing and embedded control of a soft prosthetic hand.
                      <a
                        href="https://aaltodoc.aalto.fi/items/e186231e-4aa7-4d57-af56-675906f2cfc0"
                        target="_blank"
                        rel="noreferrer"
                        className="thesis-link"
                      >
                        <i className="fas fa-external-link-alt"></i> View Thesis
                      </a>
                    </div>
                  </li>
                  <li>
                    Marcus Talke, Aalto University (2022)
                    <div className="timeline-thesis">
                      Thesis: Using Supervised Deep Learning for Real-Time Motor Unit Decomposition of High-Density
                      Surface Electromyography Signals.
                      <a
                        href="https://aaltodoc.aalto.fi/items/65be6b77-9880-4f05-a9fe-26dd162e577b"
                        target="_blank"
                        rel="noreferrer"
                        className="thesis-link"
                      >
                        <i className="fas fa-external-link-alt"></i> View Thesis
                      </a>
                    </div>
                  </li>
                </ul>

                <h3 className="timeline-subtitle">Teaching Assistantships:</h3>
                <ul className="timeline-details">
                  <li>Translational Engineering Forum | Aalto University | Fall 2021 – 24</li>
                  <li>Neurorobotics (TOP10 MSc Course at EEA) | Aalto University | Spring 2022 – 24</li>
                  <li>Embedded Real-Time Systems | Aalto University | Fall 2022 – 24</li>
                </ul>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-date">2018 - Jul 2020</div>
                <h2 className="timeline-title">Full-time Laboratory Teacher</h2>
                <div className="timeline-company">University of Tehran</div>
                <ul className="timeline-details">
                  <li className="timeline-detail-item">
                    <strong>Linear Control Systems Lab:</strong> Guided ~200 students/year in designing and implementing
                    controllers on real-time systems (e.g., inverted pendulum, ball and beam, DC motor).
                    <div className="video-container">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/m8BYSSq3LtE?si=YEyfoqNSWx0HiE0u&autoplay=1&mute=1"
                        title="Linear Control Systems Lab Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </li>
                  <li className="timeline-detail-item">
                    <strong>Biological Signal Lab:</strong> Assisted ~30 students/year in collecting and processing
                    biological signals (ECG, EEG, EMG, EOG) using MATLAB.
                  </li>
                </ul>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-date">Sep 2014 - June 2018</div>
                <h2 className="timeline-title">Research Assistant & Teaching Assistant</h2>
                <div className="timeline-company">Motor Control and Computational Neuroscience lab</div>
                <ul className="timeline-details">
                  <li className="timeline-detail-item">TA for Principles of Rehabilitation & Equipment</li>
                  <li className="timeline-detail-item">
                    Developed a computational model of human motor control for arm reaching movements based on muscle
                    synergies
                  </li>
                  <li className="timeline-detail-item">
                    Implemented algorithms for analyzing EMG signals and extracting muscle synergies during complex
                    movements
                  </li>
                  <li className="timeline-detail-item">
                    Conducted experiments to validate computational models against human performance data
                  </li>
                </ul>
              </div>
            </div>

            <div className="skills-section">
              <div className="card">
                <div className="card-header">
                  <h2>Skills</h2>
                </div>
                <div className="card-content">
                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">Python</span>
                      <span className="skill-percentage">95%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "95%" }}></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">MATLAB</span>
                      <span className="skill-percentage">95%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "95%" }}></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">Visualization Tools</span>
                      <span className="skill-percentage">95%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "95%" }}></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">TensorFlow</span>
                      <span className="skill-percentage">80%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "80%" }}></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">PyTorch</span>
                      <span className="skill-percentage">85%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">Triton Cluster Computing</span>
                      <span className="skill-percentage">80%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "80%" }}></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">scikit-learn</span>
                      <span className="skill-percentage">90%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "90%" }}></div>
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">C/C#</span>
                      <span className="skill-percentage">75%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <Script id="animate-skills">
        {`
          document.addEventListener("DOMContentLoaded", () => {
            const skillBars = document.querySelectorAll(".skill-progress");

            // Function to check if an element is in viewport
            function isInViewport(element) {
              const rect = element.getBoundingClientRect();
              return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
              );
            }

            // Function to animate skill bars
            function animateSkillBars() {
              skillBars.forEach((bar) => {
                if (isInViewport(bar)) {
                  // The width is already set in the HTML
                  bar.style.transition = "width 1.5s ease-in-out";
                }
              });
            }

            // Initial check
            setTimeout(animateSkillBars, 500);

            // Check on scroll
            window.addEventListener("scroll", animateSkillBars);
          });
        `}
      </Script>
      <style jsx>{`
  .timeline-detail-item {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
  }
`}</style>
    </>
  )
}
