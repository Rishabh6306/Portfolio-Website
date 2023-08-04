import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      paragraph: 'HTML, CSS',
      image: '1.Job_Form.png',
      name: 'Job Form',
      githubLink: 'https://github.com/Rishabh6306/Full-Stack-Web-Development/tree/main/Full%20Stack%20Web%20Development/HTML%20%2C%20CSS%20Project/Project-1%20Job%20Application%20Form',
      liveLink: 'https://resplendent-biscochitos-964f55.netlify.app/',
    },
    {
      id: 2,
      paragraph: 'HTML, CSS',
      image: '2.Simple_learning_Website.png',
      name: 'Simple learning Website',
      githubLink: 'https://github.com/Rishabh6306/Full-Stack-Web-Development/tree/main/Full%20Stack%20Web%20Development/HTML%20%2C%20CSS%20Project/Project-2%20Media%20Query%20related',
      liveLink: 'https://splendorous-beijinho-13d4af.netlify.app/',
    },
    {
      id: 3,
      paragraph: 'HTML, CSS',
      image: '3.Profile_Card.png',
      name: 'Profile Card',
      githubLink: 'https://github.com/Rishabh6306/Full-Stack-Web-Development/tree/main/Full%20Stack%20Web%20Development/HTML%20%2C%20CSS%20Project/project-3%20Profile%20Card',
      liveLink: 'https://beamish-gingersnap-311925.netlify.app/',
    },
    {
      id: 4,
      paragraph: 'HTML, CSS',
      image: '4.Parallax _Website.png',
      name: 'Parallax Website',
      githubLink: 'https://github.com/Rishabh6306/Full-Stack-Web-Development/tree/main/Full%20Stack%20Web%20Development/HTML%20%2C%20CSS%20Project/Project-4%20Parallax%20Website',
      liveLink: 'https://graceful-crisp-933fd9.netlify.app/'
    },
    {
      id: 5,
      paragraph: 'HTML, CSS, JavaScript',
      image: '5.Counter_App.png',
      name: 'Counter App',
      githubLink: 'https://github.com/Rishabh6306/Full-Stack-Web-Development/tree/main/Full%20Stack%20Web%20Development/HTML%2C%20CSS%2C%20JavaScript%20Project/Project-1%20%20Counter%20Website',
      liveLink: 'https://counterapprishabh.netlify.app/'
    },
    {
      id: 6,
      paragraph: 'HTML, CSS, JavaScript',
      image: '6.Palindrome_Checker.png',
      name: 'Palindrome Checker',
      githubLink: 'https://github.com/example3',
      liveLink: 'https://example3.com'
    },
    {
      id: 7,
      paragraph: 'HTML, CSS, JavaScript',
      image: '7.Holi_Festival.png',
      name: 'Holi Festival',
      githubLink: 'https://github.com/example3',
      liveLink: 'https://example3.com'
    },
    {
      id: 8,
      paragraph: 'HTML, CSS, JavaScript',
      image: '8.Random_Number_Generator.png',
      name: 'Random Number Generator',
      githubLink: 'https://github.com/Rishabh6306/Full-Stack-Web-Development/tree/main/Full%20Stack%20Web%20Development/HTML%2C%20CSS%2C%20JavaScript%20Project/Project-4%20%20Random%20Number%20Generate',
      liveLink: 'https://sweet-speculoos-4998cc.netlify.app/'
    },
    {
      id: 9,
      paragraph: 'HTML, CSS, JavaScript',
      image: '9.Simple-Calculator.png',
      name: 'Simple Calculator',
      githubLink: 'https://github.com/Rishabh6306/Full-Stack-Web-Development/tree/main/Full%20Stack%20Web%20Development/HTML%2C%20CSS%2C%20JavaScript%20Project/Project-6%20Calculator',
      liveLink: 'https://cute-semifreddo-df2e63.netlify.app/'
    },

    {
      id: 10,
      paragraph: 'HTML, CSSe, JS',
      image: '10.Analog-Watch.png',
      name: 'Second',
      githubLink: 'https://github.com/example3',
      liveLink: 'https://example3.com'
    },
    {
      id: 11,
      paragraph: 'HTML, CSS, JS',
      image: '11.Memory-Game.png',
      name: 'Memory-Game',
      githubLink: 'https://github.com/Rishabh6306/Full-Stack-Web-Development/tree/main/Full%20Stack%20Web%20Development/HTML%2C%20CSS%2C%20JavaScript%20Project/Project-10%20Mind%20Game',
      liveLink: 'https://checkmindpower.netlify.app/',
    },
    {
      id: 12,
      paragraph: 'HTML, Tailwind CSS',
      image: '12.Sign_In_Page.png',
      name: 'Sign In Page',
      githubLink: 'https://github.com/Rishabh6306/Full-Stack-Web-Development/tree/f09499b98399c7e6eb45cd2c90eaf7f78161f364/Full%20Stack%20Web%20Development/HTML%2C%20Tailwind%20CSS/1.login%20Page%20Project',
      liveLink: 'https://loginwebsit.netlify.app/',
    },
    {
      id: 13,
      paragraph: 'HTML, Tailwind CSS',
      image: '13.Microsoft_Clone.png',
      name: 'Microsoft Clone',
      githubLink: 'https://github.com/Rishabh6306/Full-Stack-Web-Development/tree/main/Full%20Stack%20Web%20Development/HTML%2C%20Tailwind%20CSS/2.%20clone%20micorsoft',
      liveLink: 'https://microsoftclone121.netlify.app/',
    },
    {
      id: 14,
      paragraph: 'HTML, Tailwind CSS, JavaScript',
      image: '14.Amazing_Quotes_Generater.png',
      name: 'Amazing Quotes Generater',
      githubLink: 'https://github.com/Rishabh6306/Full-Stack-Web-Development/tree/main/Full%20Stack%20Web%20Development/HTML%2C%20Tailwind%20CSS/3.%20Quotes%20Generate',
      liveLink: 'https://motivationalquote.netlify.app/'
    },
    {
      id: 15,
      paragraph: 'HTML, Tailwind CSS, ReactJS',
      image: '15.News_Updates_Project.png',
      name: 'News Updates Project',
      githubLink: 'https://github.com/Rishabh6306/NewsUpdates-Project',
      liveLink: 'https://motivationalquote.netlify.app/'
    },
    {
      id: 16,
      paragraph: 'HTML, CSS, JavaScript',
      image: '16.Calculator.png',
      name: 'Calculator',
      githubLink: 'https://github.com/Rishabh6306/OIBSIP/tree/main/level-2/Task-1%20Calculator',
      liveLink: 'https://simple1-calculator.netlify.app/'
    },
    {
      id: 17,
      paragraph: 'HTML, CSS',
      image: '17.Tribute_Page.png',
      name: 'Tribute Page',
      githubLink: 'https://github.com/Rishabh6306/OIBSIP/tree/main/level-2/Task-2%20Tribute%20Page',
      liveLink: 'https://tribute-pro-page.netlify.app/'
    },
    {
      id: 18,
      paragraph: 'HTML, CSS, JavaScript',
      image: '18.Github_Profile_Finder.png',
      name: 'Github Profile Finder',
      githubLink: 'https://github.com/Rishabh6306/Github-Profile-Finder',
      liveLink: 'https://github-profile-viewer-site.netlify.app/'
    },
    {
      id: 19,
      paragraph: 'HTML, CSS, JavaScript',
      image: '19.Live_Preview_Website.jpg',
      name: 'Live Preview Website',
      githubLink: 'https://github.com/Rishabh6306/PPT-Assignment/tree/main/Web%20Development/Assignment-7/Q-7%20Live%20Preview%20Webiste',
      liveLink: 'https://live-preview-site.netlify.app/'
    },
    {
      id: 20,
      paragraph: 'React, CSS',
      image: '20.Todo_WebApp_With_React.png',
      name: 'Todo WebApp',
      githubLink: 'https://github.com/Rishabh6306/Todo-WebApp-With-ReactJS',
      liveLink: 'https://todo-webapp-for-task.netlify.app/'
    },
    {
      id: 21,
      paragraph: 'React, CSS',
      image: '21.Dynamic_Code_Previewer.png',
      name: 'Dynamic Code Previewer',
      githubLink: 'https://github.com/Rishabh6306/Dynamic-Code-Previewer-With-React',
      liveLink: 'https://dynamic-code-previewer.netlify.app/'
    },
    {
      id: 22,
      paragraph: 'HTML, CSS, JavaScript',
      image: '22.Blog_Website.png',
      name: 'Blog Website',
      githubLink: 'https://github.com/Rishabh6306/MileStone-Repo/tree/main/Project-1',
      liveLink: 'https://blogtrends-website.netlify.app/'
    },
    {
      id: 23,
      paragraph: 'React, Tailwind',
      image: '23.CountryInfo_WebApp.png',
      name: 'CountryInfo WebApp',
      githubLink: 'https://github.com/Rishabh6306/Countries-Info-ReactWebApp',
      liveLink: 'https://global-explorer.netlify.app/'
    },
    {
      id: 24,
      paragraph: 'React, CSS',
      image: '24.Image_Gallery.png',
      name: 'Image Gallery',
      githubLink: 'https://github.com/Rishabh6306/Image-Gallery',
      liveLink: 'NotAvaliable.html'
    },
    
  ]

  const reversedProjects = projects.slice().reverse();

  return (
    <>
      <div id='projects'>
        <div className='project-grid'>
          {reversedProjects.map((project) => (
            <div className='project-box' key={project.id}>
              <img src={project.image} alt='Project' />
              <p>Techonlogy: {project.paragraph}</p>
              <div className='project-layer'>
                {project.name}
              </div>
              <div className='button-container'>
                <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
                  GitHub
                </a>
                <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>
                  Try it
                </a>
              </div>
            </div>

          ))}
        </div>
      </div>
    </>
  );
}