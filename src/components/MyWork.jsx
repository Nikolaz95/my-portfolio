import React, { useEffect, useRef, useState } from 'react'



//import fetch data
import projectsData from '../data/MyProjectData';

//import css
import "./MyWork.css"
//import img
import projekt1 from '../assets/work-img/work-5.png';
import GitHub from '../assets/images/icon-github.png';
// import icons
import { FaArrowRight } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";

const MyWork = ({ myWorkRef }) => {
    const [openModal, setOpenModal] = useState(false);
    const [modalProject, setModalProject] = useState(null);
    const [projects, setProjects] = useState([]);


    /* open modal function */
    const toggleOpenModal = (project) => {
        setOpenModal(!openModal)
        setModalProject(project);
        console.log(openModal);
    };

    /* kod da ne mogu pomjerati s strane dok je modal aktiviran */
    if (openModal) {
        document.body.classList.add('modal-active')
    } else {
        document.body.classList.remove('modal-active')
    }

    /* close modal function */
    const toggleCloseModal = () => {
        setOpenModal(false)


    };



    /* klick outside to close */

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpenModal(false);
                /* console.log(menuRef.current); */
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [menuRef]);

    return (
        <article className='main-myWorkcontent' ref={myWorkRef}>
            <h1 className="title-work">My Work</h1>
            <div className="MyWork-content">
                {projectsData.map((project) => (
                    <div key={project.id} className="recentWork-card">
                        <img src={project.ImgProject} alt="here should be a image.." className='recent-workImg' />
                        <div className="MyworkCard-bottom">
                            <h2 className="produkt-title">{project.title}</h2>
                            <div className="quick-view">
                                <p onClick={() => toggleOpenModal(project)} className="quickView-btn">Quick View </p>

                                <FaArrowRight className='icon-arrow' onClick={() => toggleOpenModal(project)} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* modal code */}
            {openModal && projectsData && (
                <div className={`modal ${openModal ? 'modal-active' : ''}`}>

                    <span onClick={() => toggleCloseModal()} className='close-btnX'>
                        <FaWindowClose />
                    </span>
                    <div className="modal-content" ref={menuRef}>
                        <div className="modal-left">
                            <img src={modalProject.ImgProject}
                                alt="here should be a image.."
                                className='workImg-activeModal' />
                        </div>
                        <div className="modalright">
                            <h1 className='modalInfo-title'>{modalProject.title}</h1>
                            <p>{modalProject.description}</p>
                            <h1 className='modalInfo-titleTeh'>Technologies:</h1>
                            <div className='thngl-modal'>
                                {modalProject.skills.map((skill, index) => (
                                    <img key={index} src={skill} alt={`Skill ${index}`} className='skils-iconModal' />
                                ))}
                            </div>
                            <h2 className='modalInfo-title'>GitHub Code:</h2>
                            <div className='gitgub-link'>
                                <a href={modalProject.source} target="_blank">
                                    <img src={GitHub} alt="" className='skils-iconModal' title="GitHub" />
                                </a>
                            </div>
                            {modalProject.demo && (
                                <a href={modalProject.demo} target="_blank">
                                    <span className='democode-btn'>Demo <FaCircleArrowRight /></span>
                                </a>
                            )}

                        </div>
                    </div>
                </div>
            )}
        </article>
    )
}

export default MyWork
