import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ParticlesBackground from "@/components/particles-background"

export default function Projects() {
  return (
    <>
      <Navigation />
      <ParticlesBackground />

      <main className="page-content">
        <div className="container">
          <header className="page-header">
            <h1>Projects</h1>
            <p>A collection of research projects I've worked on throughout my academic career.</p>
          </header>

          <div className="projects-grid">
            <div className="card">
              <div className="card-header">
                <h2>Robustness of Motor Unit Decoding and Clustering via NMF for Human-Machine Interfacing</h2>
              </div>
              <div className="card-content">
                <p className="project-date">Mar. 2021 – Dec. 2024</p>
                <div className="dynamic-content">
                  <p>
                    Developed MU decoding algorithms, implemented NMF clustering, analyzed the impact of signal
                    perturbations, and contributed to writing and editing the manuscript.
                  </p>
                </div>
                <div className="tags">
                  <span className="tag">Python</span>
                  <span className="tag">Machine Learning</span>
                  <span className="tag">Signal Processing</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h2>Blood Flow Restriction Alters the Motor Neurons and the Common Synaptic Input to Them</h2>
              </div>
              <div className="card-content">
                <p className="project-date">Jun. 2022 – Dec. 2024</p>
                <div className="dynamic-content">
                  <p>
                    Conducted the experiment at University of Stuttgart during my visit in June 2022 and March 2023,
                    implemented HD-EMG signal processing, analyzed motor unit coherence and performance, and contributed
                    to writing and editing the manuscript.
                  </p>
                </div>
                <div className="tags">
                  <span className="tag">HD-EMG</span>
                  <span className="tag">MATLAB</span>
                  <span className="tag">Data Analysis</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h2>Enhancing Prosthetic Hand Control with EMG-Armband and Machine Learning</h2>
              </div>
              <div className="card-content">
                <p className="project-date">Sep. 2022 – Jul. 2024</p>
                <div className="dynamic-content">
                  <p>
                    Advised BSc and MSc students on experimental design and data collection methods, contributed to
                    coding machine learning algorithms, assisted in developing the GUI using PyQt for real-time data
                    acquisition and analysis, and worked on improving prosthetic hand control systems.
                  </p>
                </div>
                <div className="tags">
                  <span className="tag">Python</span>
                  <span className="tag">PyQt</span>
                  <span className="tag">EMG</span>
                  <span className="tag">Machine Learning</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h2>Mind to Muscle: Neural Decoding of Handwriting Errors</h2>
              </div>
              <div className="card-content">
                <p className="project-date">Mar. 2024 – Present</p>
                <div className="dynamic-content">
                  <p>
                    Contributed to experimental design, participated in data collection, analyzed EMG, kinematic, and
                    MEG data, and worked on identifying correlations between muscle activity, brain dynamics, and
                    handwriting performance.
                  </p>
                </div>
                <div className="tags">
                  <span className="tag">MEG</span>
                  <span className="tag">EMG</span>
                  <span className="tag">Neuroscience</span>
                  <span className="tag">Data Analysis</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h2>High-Frequency Paired Associative Stimulation and Its Neuromuscular Effects</h2>
              </div>
              <div className="card-content">
                <p className="project-date">Oct. 2023 – Present</p>
                <div className="dynamic-content">
                  <p>
                    Contributed to the experimental design, participated in data collection, analyzed high-density EMG
                    (HDEMG) data, and extended the analysis of MEPs to cover spatial-temporal dynamics. Additionally,
                    focused on extracting neural drives during pre- and post-stimulation sessions.
                  </p>
                </div>
                <div className="tags">
                  <span className="tag">HD-EMG</span>
                  <span className="tag">Neural Drives</span>
                  <span className="tag">MEP Analysis</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h2>Dextrimeter: Advancing Stroke Rehabilitation by Capturing Finger Force Metrics</h2>
              </div>
              <div className="card-content">
                <p className="project-date">Dec. 2023 – Present</p>
                <div className="dynamic-content">
                  <p>
                    Contributing to experimental design, participating in the development of the Dextrimeter device,
                    integrating force measurements with the TMS system, and analyzing the force across different MVC
                    levels.
                  </p>
                </div>
                <div className="tags">
                  <span className="tag">Rehabilitation</span>
                  <span className="tag">Force Measurement</span>
                  <span className="tag">TMS</span>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h2>Exploring mTMS Pulse Effects on Motor Force and HD-EMG Mapping</h2>
              </div>
              <div className="card-content">
                <p className="project-date">Dec. 2023 – Present</p>
                <div className="dynamic-content">
                  <p>
                    Contributed to the experimental design, integrated high-density EMG and force measurements with the
                    mTMS system, and analyzed the force output along with the HD EMG spatial maps across different mTMS
                    stimulation conditions.
                  </p>
                </div>
                <div className="tags">
                  <span className="tag">mTMS</span>
                  <span className="tag">HD-EMG</span>
                  <span className="tag">Force Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
