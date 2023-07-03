import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faChevronDown,
    faCopyright,
    faArrowAltCircleUp
} from "@fortawesome/free-solid-svg-icons";
import quoteImage from './Assets/RandomQuoteMachine.png';
import catchphraseImage from './Assets/Catchphrases.png';
import markdownPrev from './Assets/MarkdownPrev.png';
import clock from './Assets/255clock.png';
import drummer from './Assets/drummer.png';
import calc from './Assets/pocketCalc.png';


function App() {
    return (
        <div className="App">
            <nav>
                <li>
                    <a href="#welcome-section">Home</a>
                </li>
                <li>
                    <a href="#about-section">About</a>
                </li>
                <li>
                    <a href="#projects">Work</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </nav>
            <main>
                <section id="welcome-section">
                    <div id="welcome-wrapper">
                        <div id="name" className="font-effect-shadow-multiple">
                            <div id="emoji">👋</div>
                            Hi, I'm Maureen!
                        </div>
                        <div id="flavor">a web developer</div>
                    </div>
                </section>
                <section id="about-section">
                    <div id="about-wrapper">
                        <h2 className="font-effect-shadow-multiple" id="about-title">About</h2>
                        <div className="about-body">
                            I am a recent Computer Science graduate with a solid foundation in software development,
                            algorithms, and data structures. Possessing a strong passion for technology and a keen eye
                            for innovation, I am dedicated to leveraging my technical expertise to drive meaningful
                            solutions in the ever-evolving field of Computer Science. Through academic projects and
                            study, I have gained practical experience in developing software applications,
                            analyzing complex problems, and collaborating effectively within multidisciplinary teams.
                            <p></p>
                            As a lifelong learner, I am committed to staying abreast of emerging trends and technologies
                            in the computer science industry. I thrive in fast-paced environments that foster innovation
                            and collaboration, and I am eager to contribute my skills to a dynamic organization that
                            values creativity, excellence, and continuous improvement.
                        </div>
                        <h3 className="font-effect-shadow-multiple">Education & Certifications</h3>
                        <div className="about-body" id="education-body">
                        <ul>
                            <li className="education">Bachelor of Science in Computer Science Summa Cum Laude from <a
                                href="https://www.umgc.edu/" target="_blank"> University of Maryland Global Campus </a>(Jan
                                2021 - August 2022)
                            </li>
                            <li className="education">Service Hub Software Certified from <a href="https://app.hubspot.com/academy/24158824/"
                                                                       target="_blank"> Hubspot </a> (Mar 2023)
                            </li>
                            <li className="education">Front End Development Libraries Certification from <a
                                href="https://www.freecodecamp.org/certification/mauromall/front-end-development-libraries"
                                target="_blank"> freeCodeCamp </a>(June 2023)
                            </li>
                        </ul>
                        </div>
                        <h3 className="font-effect-shadow-multiple">Skills</h3>
                        <div className="about-body">
                            <a href="https://www.java.com/en/" target="_blank">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                                    alt="Java" className="skills"/>
                            </a>
                            <a href="https://www.python.org/" target="_blank">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                    alt="Python" className="skills"/>
                            </a>
                            <a href="https://www.javascript.com/" target="_blank">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                    alt="Javascript" className="skills"/>
                            </a>
                            <a href="https://html.spec.whatwg.org/multipage/" target="_blank">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                                    alt="HTML5" className="skills"/>
                            </a>
                            <a href="https://www.w3.org/TR/CSS/" target="_blank">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                                    alt="CSS3" className="skills"/>
                            </a>
                            <a href="https://vuejs.org/" target="_blank">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                                     alt="Vue"
                                     className="skills"/>
                            </a>
                            <a href="https://react.dev/" target="_blank">
                                <img
                                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                                    alt="React" className="skills"/>
                            </a>
                            <a href="https://nodejs.org/en" target="_blank">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                    alt="NodeJS" className="skills"/>
                            </a>
                            <a href="https://jquery.com/" target="_blank">

                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
                                    alt="JQuery" className="skills"/>

                            </a>
                            <a href="https://redux.js.org/" target="_blank">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                                    alt="Redux" className="skills"/>
                            </a>
                            <a href="https://getbootstrap.com/" target="_blank">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
                                    alt="Bootstrap" className="skills"/>
                            </a>
                            <a href="https://sass-lang.com/" target="_blank">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                                    alt="Sass" className="skills"/>
                            </a>
                            <a href="https://firebase.google.com/" target="_blank">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                                    alt="FireBase" className="skills"/>
                            </a>
                            <a href="https://www.mathworks.com/products/matlab.html" target="_blank">

                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"
                                     alt="Matlab" className="skills"/>

                            </a>
                            <a href="https://www.postgresql.org/" target="_blank">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
                                    alt="PostgreSQL" className="skills"/>
                            </a>
                            <a href="https://www.linux.org/" target="_blank">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                                    alt="Linux" className="skills"/>
                            </a>
                            <a href="https://www.markdownguide.org/" target="_blank">

                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"
                                    alt="Markdown" className="skills"/>

                            </a>
                            <a href="https://www.npmjs.com" target="_blank">

                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                                    alt="npm" className="skills"/>

                            </a>
                            <a href="https://yarnpkg.com/getting-started" target="_blank">

                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"
                                     alt="yarn" className="skills"/>

                            </a>
                            <a href="https://www.gnu.org/software/bash/" target="_blank">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
                                     alt="bash" className="skills"/>
                            </a>
                            <a href="https://git-scm.com/" target="_blank">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
                                     alt="Git" className="skills"/>
                            </a>
                            <a href="https://code.visualstudio.com/" target="_blank">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                                    alt="VisualStudio" className="skills"/>
                            </a>
                            <a href="https://github.com/atom/atom" target="_blank">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atom/atom-original.svg"
                                     alt="Atom" className="skills"/>
                            </a>
                            <a href="https://www.jetbrains.com/idea/" target="_blank">

                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"
                                    alt="IntelliJ" className="skills"/>

                            </a>

                            <a href="https://www.arduino.cc/" target="_blank">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg"
                                    alt="Arduino" className="skills"/>
                            </a>
                            <a href="https://www.raspberrypi.com/" target="_blank">

                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg"
                                    alt="RaspberryPi" className="skills"/>

                            </a>
                            <a href="https://www.microsoft.com/en-us/windows/windows-11" target="_blank">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
                                    alt="Windows" className="skills"/>
                            </a>
                            <a href="https://ubuntu.com/" target="_blank">

                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
                                     alt="Ubuntu" className="skills"/>

                            </a>
                            <a href="https://www.adobe.com/products/illustrator/free-trial-download.html"
                               target="_blank">

                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
                                    alt="AdobeIllustrator" className="skills"/>

                            </a>
                            <a href="https://www.adobe.com/products/photoshop.html" target="_blank">

                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                                    alt="Photoshop" className="skills"/>

                            </a>
                        </div>
                    </div>
                </section>

                <section id="projects" className="projects-section">
                    <h2 id="projects-header" className="font-effect-shadow-multiple">Here are some of my projects!</h2>
                    <div className="projects-grid">
                        <div id="project1">
                            <a
                                href="https://maomalley.github.io/quote-generator/"
                                target="_blank"
                                className="project project-tile"
                            >
                                <img
                                    className="project-image"
                                    src={quoteImage}
                                    alt="project"
                                />
                            </a><a href="https://github.com/maomalley/quote-generator/tree/master"
                                   target="_blank">
                            <p className="project-title">
                                <span className="code">&lt;</span>
                                Quote Generator
                                <span className="code">&#47;&gt;</span>
                            </p>
                        </a>
                        </div>
                        <div id="project2">
                            <a
                                href="https://maomalley.github.io/Catchphrase-Generator/"
                                target="_blank"
                                className="project project-tile"
                            >
                                <img
                                    className="project-image"
                                    src={catchphraseImage}
                                    alt="project"
                                />
                            </a><a href="https://github.com/maomalley/Catchphrase-Generator"
                                   target="_blank">
                            <p className="project-title">
                                <span className="code">&lt;</span>
                                Catchphrase Generator
                                <span className="code">&#47;&gt;</span>
                            </p>
                        </a>
                        </div>
                        <div id="project3">
                            <a
                                href="https://maomalley.github.io/markdown-prev/"
                                target="_blank"
                                className="project project-tile"
                            >
                                <img
                                    className="project-image"
                                    src={markdownPrev}
                                    alt="project"
                                />
                            </a>
                            <a href="https://github.com/maomalley/markdown-prev/tree/master"
                               target="_blank">
                                <p className="project-title">
                                    <span className="code">&lt;</span>
                                    Markdown Previewer
                                    <span className="code">&#47;&gt;</span>
                                </p>
                            </a>
                        </div>
                        <div id="project4">
                            <a
                                href="https://maomalley.github.io/25-5-clock/"
                                target="_blank"
                                className="project project-tile"
                            >
                                <img
                                    className="project-image"
                                    src={clock}
                                    alt="project"
                                />
                            </a>
                            <a href="https://github.com/maomalley/25-5-clock"
                               target="_blank">
                                <p className="project-title">
                                    <span className="code">&lt;</span>
                                    25-5 Work-Rest Clock
                                    <span className="code">&#47;&gt;</span>
                                </p>
                            </a>
                        </div>
                        <div id="project5">
                            <a
                                href="https://maomalley.github.io/drummer/"
                                target="_blank"
                                className="project project-tile"
                            >
                                <img
                                    className="project-image"
                                    src={drummer}
                                    alt="project"
                                />
                            </a>
                            <a href="https://github.com/maomalley/drummer/tree/main"
                               target="_blank">
                                <p className="project-title">
                                    <span className="code">&lt;</span>
                                    Drum Keypad
                                    <span className="code">&#47;&gt;</span>
                                </p>
                            </a>
                        </div>
                        <div id="project6">
                            <a
                                href="https://maomalley.github.io/pocket-calculator/"
                                target="_blank"
                                className="project project-tile"
                            >
                                <img
                                    className="project-image"
                                    src={calc}
                                    alt="project"
                                />
                            </a>
                            <a href="https://github.com/maomalley/pocket-calculator"
                               target="_blank">
                                <p className="project-title">
                                    <span className="code">&lt;</span>
                                    Pocket Calculator
                                    <span className="code">&#47;&gt;</span>
                                </p>
                            </a>
                        </div>
                    </div>

                    <a
                        href="https://github.com/maomalley"
                        className="btn btn-show-all"
                        target="_blank"
                    >Show all<FontAwesomeIcon
                        icon={faChevronDown}
                        style={{}}
                    /></a>
                </section>

                <section id="contact" className="contact-section">
                    <div id="contact-wrapper">
                        <div className="contact-section-header">
                            <h2 className="font-effect-shadow-multiple">Let's work together!</h2>
                        </div>
                        <div id="contact-links">

                            <div id="github">
                                <a
                                    id="profile-link"
                                    href="https://github.com/maomalley"
                                    target="_blank"
                                    className="btn contact-details"
                                >
                                    <i className="fa fa-github" aria-hidden="true"> </i>

                                    GitHub</a>
                            </div>
                            <div id="email">
                                <a href="mailto:mauomalle0@gmail.com"
                                   className="btn contact-details"><i className="fa fa-at" aria-hidden="true"> </i>
                                    E-Mail</a
                                >
                            </div>
                        </div>
                        <div id="credits">
                            <a href="https://github.com/maomalley/maomalley.github.io" target="_blank">
                                <FontAwesomeIcon
                                    icon={faCopyright}
                                    style={{}}
                                /> 2023 Maureen O'Malley
                            </a>
                        </div>
                    </div>
                    <div id="top">
                        <a href="#welcome-section">
                            <FontAwesomeIcon
                                icon={faArrowAltCircleUp}
                                style={{}}
                            />
                        </a>
                    </div>
                </section>

            </main>
        </div>


    );
}

export default App;
