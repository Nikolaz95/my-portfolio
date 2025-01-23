import React from 'react'


import "./DownloadCv.css"

import download from "../../assets/icon-update.png";

import CV from "../../assets/NikolaZovkoCV.pdf";
import Button from '../../Layouts/Buttons/Button';
import Image from '../../Layouts/Images/Image';


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
            <Button onClick={onButtonClick} className='btnSection' variant='downloadBtn'>
                <p>My Cv</p>
                <Image src={download} variant='download' title='download Cv' />
            </Button>
        </section>
    )
}

export default DownloadCv