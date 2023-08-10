import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGithub, faHtml5, faJsSquare, faReact, faAirbnb } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

const MyTimeline = ({ items }) => (
  <div className="vertical-timeline">
    {items.map((item, index) => (
      <VerticalTimelineItem
        key={index}
        date={item.date}
        title={item.title}
        content={item.content}
        icon={<FontAwesomeIcon icon={faAirbnb} />}
      />
    ))}
  </div>
);

const VerticalTimelineItem = ({ date, title, content, icon }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element"
    date={date}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={icon}
  >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    <p className="vertical-timeline-element-content">{content}</p>
  </VerticalTimelineElement>
);

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => clearTimeout(timeoutId);
      }, []);

      const timelineItems = [
        {
          date: '01/2019  -  01/2021 ',
          title: 'Sorted Solution LLC - Information Technology Staff',
          content: 'Taking care of Customer problems via Online and Offline Visits, Use of Applications like (Microsoft Office (Word, Excel, PowerPoint, OneNote, Outlook, and Etc.), Zendesk, Confluence, Slack, Zapier, Microsoft OS, MacOS, Active Directory, NinjaRMM, AWS, Microsoft Azure, Wordpress. '
        },
        {
          date: '01/2016 - Current',
          title: 'Harborview Medical Center - Unit Supply Tech',
          content: 'Uses computer technologies such as handhelds, package scanners, and software programs, Issues and credits in the Materials Management Information System (MMIS), ensuring the cost of the items are allocated appropriately '
        },
        {
          date: '2023-08-11',
          title: 'Filipino Community Center - Robotics Instructor',
          content: 'Taught kids how to make an applicable code for the robot we have created.'
        }
      ];

    return (
      <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={['A','b','o','u','t',' ','m','e']}
            idx={15}
            />
          </h1>
          <p>
            As an Information Technology (IT) student and professional, my passion lies in the dynamic and constantly evolving world of technology. With a focus on software development, cybersecurity, and data analysis, I am committed to expanding my knowledge and expertise in these domains. I approach challenges with a growth mindset and possess strong problem-solving skills, which I believe are crucial in addressing the complexities of the IT landscape. My goal is to contribute to impactful projects and use emerging technologies to drive innovation and efficiency.
          </p>
          <p>
            Collaboration and effective communication are fundamental aspects of my approach to IT. As a team player, I understand the value of working together to achieve common goals. I am eager to collaborate with like-minded professionals to bring creative solutions to the table and provide tangible benefits to users and stakeholders. Throughout my journey in the IT field, I have gained a deeper appreciation for the significance of teamwork in delivering successful outcomes.
          </p>
          <p>
            The vast potential of the IT industry excites me, and I am driven to be at the forefront of shaping the future through technology. With a commitment to continuous learning, I stay updated on industry trends and best practices, ensuring that I remain adaptable to the ever-changing landscape. My aspiration is to make a positive impact by leveraging my IT skills to drive progress and empower businesses and individuals with cutting-edge solutions. I believe that the fusion of my passion, technical acumen, and dedication will pave the way for a fulfilling and rewarding career in Information Technology.
          </p>
          <br/>
          <h2>My Experiences</h2>
          <div className='container-timeline-container'>
        <MyTimeline items={timelineItems} />
      </div>
          <div className='stage-cube-cont'>


              <div className='cubespinner'>

                  <div className='face1'>
                      <FontAwesomeIcon icon = {faAngular} color= "#DD0031"/>
                  </div>

                  <div className='face2'>
                      <FontAwesomeIcon icon = {faHtml5} color= "#F06529"/>
                  </div>

                  <div className='face3'>
                      <FontAwesomeIcon icon = {faCss3} color= "#28A4D9"/>
                  </div>

                  <div className='face4'>
                      <FontAwesomeIcon icon = {faJsSquare} color= "#5ED4F4"/>
                  </div>

                  <div className='face5'>
                      <FontAwesomeIcon icon = {faReact} color= "#EFD81D"/>
                  </div>

                  <div className='face6'>
                      <FontAwesomeIcon icon = {faGithub} color= "#EC4D28"/>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
      </>
      
    );
  };


  

  





  export default About;