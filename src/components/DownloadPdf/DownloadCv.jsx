import React from 'react'


import "./DownloadCv.css"

import download from "../../assets/icon-update.png";

import CV from "../../assets/NikolaZovkoCV.pdf";


const DownloadCv = () => {
    const onButtonClick = () => {
        const pdfUrl = CV;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Nikola Zovko CV.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section>
            <button onClick={onButtonClick} className='btnSection'>
                Download Cv <img src={download} width={50} height={50} alt="" title='download Cv' />
            </button>
        </section>
    )
}

export default DownloadCv