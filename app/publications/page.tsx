import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import ParticlesBackground from "@/components/particles-background"

export default function Publications() {
  return (
    <>
      <Navigation />
      <ParticlesBackground />

      <main className="page-content">
        <div className="container">
          <header className="page-header">
            <h1>Publications</h1>
            <p>My research publications and academic contributions.</p>
          </header>

          <div className="publications-list">
            {/* 2025 Publications */}
            <div className="publication-card">
              <div className="publication-header">
                <h2>
                  Observing Changes in Motoneuron Characteristics Following Distorted Sensorimotor Input via Blood Flow
                  Restriction
                </h2>
                <span className="publication-status">2025</span>
              </div>
              <div className="publication-content">
                <div className="publication-grid">
                  <div className="publication-image-container">
                    <Image
                      src="/images/publications/1_BFR_observing.png"
                      alt="Blood Flow Restriction diagram showing effects on muscle tissue and neural pathways"
                      width={400}
                      height={250}
                      className="publication-image"
                    />
                  </div>
                  <div className="publication-text">
                    <p>
                      This study investigates how blood flow restriction affects motoneuron characteristics and
                      sensorimotor input, providing insights into neural adaptations under restricted blood flow
                      conditions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="publication-footer">
                <div className="authors">M. Taleshi, et al.</div>
                <div className="journal">Journal of Applied Physiology 138.2 (2025): 559-570</div>
                <a
                  href="https://journals.physiology.org/doi/full/10.1152/japplphysiol.00603.2024"
                  target="_blank"
                  rel="noreferrer"
                  className="view-paper"
                >
                  View Paper <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>

            <div className="publication-card">
              <div className="publication-header">
                <h2>Effects of Blood Flow Restriction on Motoneurons Synchronization</h2>
                <span className="publication-status">2025</span>
              </div>
              <div className="publication-content">
                <div className="publication-grid">
                  <div className="publication-image-container">
                    <Image
                      src="/images/publications/2_BFR_coh.png"
                      alt="Experimental setup showing HD-EMG recording during blood flow restriction"
                      width={400}
                      height={250}
                      className="publication-image"
                    />
                  </div>
                  <div className="publication-text">
                    <p>
                      This research examines the effects of blood flow restriction on motoneuron synchronization, with
                      implications for understanding neuromuscular adaptations and neural control mechanisms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="publication-footer">
                <div className="authors">M. Taleshi, et al.</div>
                <div className="journal">Frontiers in Neural Circuits 19 (2025): 1561684</div>
                <a
                  href="https://www.frontiersin.org/journals/neural-circuits/articles/10.3389/fncir.2025.1561684/full"
                  target="_blank"
                  rel="noreferrer"
                  className="view-paper"
                >
                  View Paper <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>

            <div className="publication-card">
              <div className="publication-header">
                <h2>Impact of Noise on Deep Learning-Based Pseudo-Online Gesture Recognition with High-Density EMG</h2>
                <span className="publication-status">2025</span>
              </div>
              <div className="publication-content">
                <div className="publication-grid">
                  <div className="publication-image-container">
                    <Image
                      src="/images/publications/3_HD-EMG_noise.png"
                      alt="Diagram showing noise effects on EMG signal processing for gesture recognition"
                      width={400}
                      height={250}
                      className="publication-image"
                    />
                  </div>
                  <div className="publication-text">
                    <p>
                      This study explores how noise affects deep learning-based gesture recognition systems using
                      high-density EMG, with implications for improving robustness in neural interfaces and prosthetic
                      control.
                    </p>
                  </div>
                </div>
              </div>
              <div className="publication-footer">
                <div className="authors">M. Taleshi, et al.</div>
                <div className="journal">EMBC, 2025</div>
              </div>
            </div>

            {/* 2022 Publications */}
            <div className="publication-card">
              <div className="publication-header">
                <h2>Muscle Synergy-driven Motor Unit Clustering for Human-Machine Interfacing</h2>
                <span className="publication-status">2022</span>
              </div>
              <div className="publication-content">
                <div className="publication-grid">
                  <div className="publication-image-container">
                    <Image
                      src="/images/publications/4_nmf.png"
                      alt="Comparison of non-clustered vs. clustered motor units with visualization of contraction cues"
                      width={400}
                      height={250}
                      className="publication-image"
                    />
                  </div>
                  <div className="publication-text">
                    <p>
                      This paper presents a novel approach to motor unit clustering based on muscle synergies, with
                      applications in human-machine interfacing and neural control of movement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="publication-footer">
                <div className="authors">M. Taleshi, et al.</div>
                <div className="journal">EMBC, pp. 4147-4150. IEEE, 2022</div>
                <a
                  href="https://ieeexplore.ieee.org/abstract/document/9871356"
                  target="_blank"
                  rel="noreferrer"
                  className="view-paper"
                >
                  View Paper <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>

            {/* 2017 Publications */}
            <div className="publication-card">
              <div className="publication-header">
                <h2>
                  Variation of Spatiotemporal Arm Muscle Synergies during Drawing Spirals and Circles: Can It Be Applied
                  in the Analysis of Learning?
                </h2>
                <span className="publication-status">2017</span>
              </div>
              <div className="publication-content">
                <div className="publication-grid">
                  <div className="publication-image-container">
                    <Image
                      src="/images/publications/5_embc2.png"
                      alt="Person performing spiral tracking task with EMG sensors"
                      width={400}
                      height={250}
                      className="publication-image"
                    />
                  </div>
                  <div className="publication-text">
                    <p>
                      This research investigates how arm muscle synergies vary during drawing tasks, with potential
                      applications in understanding motor learning and skill acquisition.
                    </p>
                  </div>
                </div>
              </div>
              <div className="publication-footer">
                <div className="authors">M. Taleshi, et al.</div>
                <div className="journal">ICBME, pp. 330-333, IEEE, 2017</div>
                <a
                  href="https://ieeexplore.ieee.org/abstract/document/8430286"
                  target="_blank"
                  rel="noreferrer"
                  className="view-paper"
                >
                  View Paper <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>

            {/* 2016 Publications */}
            <div className="publication-card">
              <div className="publication-header">
                <h2>Exploring the effect of training on muscle synergies and kinematics of a spiral tracking task</h2>
                <span className="publication-status">2016</span>
              </div>
              <div className="publication-content">
                <div className="publication-grid">
                  <div className="publication-image-container">
                    <Image
                      src="/images/publications/6_embc1.png"
                      alt="Graphs showing time-series data of muscle synergies across different sessions"
                      width={400}
                      height={250}
                      className="publication-image"
                    />
                  </div>
                  <div className="publication-text">
                    <p>
                      This study examines how training affects muscle synergies and kinematics during spiral tracking
                      tasks, providing insights into motor learning and adaptation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="publication-footer">
                <div className="authors">M. Taleshi, et al.</div>
                <div className="journal">ICBME, pp. 312-315, IEEE, 2016</div>
                <a
                  href="https://ieeexplore.ieee.org/abstract/document/7890979"
                  target="_blank"
                  rel="noreferrer"
                  className="view-paper"
                >
                  View Paper <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>

            {/* Preprints */}
            <div className="publication-card">
              <div className="publication-header">
                <h2>Effects of Spatial and Signal-Imposed Noises on Motor Unit Decomposition</h2>
                <span className="publication-status">Preprint</span>
              </div>
              <div className="publication-content">
                <div className="publication-grid">
                  <div className="publication-image-container">
                    <Image
                      src="/images/publications/8_decomp.png"
                      alt="Illustration of motor unit decomposition process showing neural signals and HD-EMG recording"
                      width={400}
                      height={250}
                      className="publication-image"
                    />
                  </div>
                  <div className="publication-text">
                    <p>
                      High-density EMG decomposition accurately extracts motor unit activity, but global white Gaussian
                      noise severely disrupts both yield and neural drive estimation. In contrast, channel loss,
                      electrode shift, and localized noise have minimal impact. These findings emphasize the need for
                      high signal quality and algorithmic robustness in real-world applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="publication-footer">
                <div className="authors">M. Taleshi, et al.</div>
                <div className="status">Preprint</div>
              </div>
            </div>

            <div className="publication-card">
              <div className="publication-header">
                <h2>Sensitivity of Motor Unit Driven Motion Classification to Signal Degradation</h2>
                <span className="publication-status">Preprint</span>
              </div>
              <div className="publication-content">
                <div className="publication-grid">
                  <div className="publication-image-container">
                    <Image
                      src="/images/publications/7_mu_sensitivity.png"
                      alt="Experimental setup for motor unit recording showing neural pathways from brain to muscle"
                      width={400}
                      height={250}
                      className="publication-image"
                    />
                  </div>
                  <div className="publication-text">
                    <p>
                      This research examines how signal degradation affects motor unit-driven motion classification
                      accuracy, with implications for improving robustness in neural interfaces and prosthetic control.
                    </p>
                  </div>
                </div>
              </div>
              <div className="publication-footer">
                <div className="authors">M. Taleshi, et al.</div>
                <div className="status">Preprint</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
