import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

//import fetch data
import timelineData from "../data/TimelineData"

//import css
import "./Timeline.css"

import Work from "../assets/icon/icon-worK.png"
import School from "../assets/icon/icon-school.png"

const Icon = ({ src }) => (
    <div style={{ backgroundColor: 'white', borderRadius: '50%', padding: '5px' }}>
        <img src={src} alt="Icon" style={{ width: '100%', height: '100%' }} />
    </div>
);



const Timeline = ({ timeLineRef }) => {
    const getIcon = (iconType) => {
        switch (iconType) {
            case "school":
                return <Icon src={School} />;
            case "work":
                return <Icon src={Work} />;
            default:
                return null;
        }
    };

    return (
        <main className="main-Timeline" ref={timeLineRef}>
            <h1 className='title-Timeline' >Timeline</h1>
            <div className="Timeline-mainContent">

                <VerticalTimeline>
                    {/* <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} /> */}
                    {timelineData.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            /* contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} */
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date={<div className='dataClass'>{item.date}</div>}
                            iconStyle={{ background: 'transparent', color: '#fff' }}
                            icon={getIcon(item.icon)}
                        >

                            <h3 className="vertical-timeline-element-title">{item.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.location}</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ex cupiditate. Aliquam obcaecati ipsum porro iste explicabo quaerat, culpa aliquid in numquam nihil et tempora quidem. Expedita modi placeat commodi asperiores eveniet unde. Atque, saepe eius ad libero nulla eaque, ex quis sunt labore laborum repellat. Amet cum nesciunt laboriosam!</p>
                        </VerticalTimelineElement>
                    ))}

                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} />
                </VerticalTimeline>
            </div>
        </main>
    )
}

export default Timeline