// import React from 'react';

// export default function Projects() {

//   // Reverse the projects array to display the last project first
//   const projects = [
//     {
//       id: 18,
//       paragraph: 'HTML, CSS, JavaScript',
//       image: '/public/18.Github_Profile_Finder.png',
//           name: 'Github Profile Finder',
//           githubLink: 'https://github.com/Rishabh6306/Github-Profile-Finder',
//           liveLink: 'https://github-profile-viewer-site.netlify.app/'
//         },
//         {
//           id: 19,
//           paragraph: 'HTML, CSS, JavaScript',
//           image: '/public/19.Live_Preview_Website.jpg',
//           name: 'Live Preview Website',
//           githubLink: 'https://github.com/Rishabh6306/PPT-Assignment/tree/main/Web%20Development/Assignment-7/Q-7%20Live%20Preview%20Webiste',
//           liveLink: 'https://live-preview-site.netlify.app/'
//         }
// ]
// const reversedProjects = projects.slice().reverse();

//   return (
//     <div id='projects'>
//       <div className='project-grid'>
//         {reversedProjects.map((project) => (
//           <div className='project-box' key={project.id}>
//             <img src={project.image} alt='Project' />
//             <p>Technology: {project.paragraph}</p>

//             <div className='project-layer'>
//               {project.name}
//               <div className='button-container'>
//                 <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
//                   GitHub
//                 </a>
//                 <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>
//                   Try it
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }  


import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 18,
      paragraph: 'HTML, CSS, JavaScript',
      image: '/public/18.Github_Profile_Finder.png',
      name: 'Github Profile Finder',
      githubLink: 'https://github.com/Rishabh6306/Github-Profile-Finder',
      liveLink: 'https://github-profile-viewer-site.netlify.app/'
    },
    {
      id: 19,
      paragraph: 'HTML, CSS, JavaScript',
      image: '/public/19.Live_Preview_Website.jpg',
      name: 'Live Preview Website',
      githubLink: 'https://github.com/Rishabh6306/PPT-Assignment/tree/main/Web%20Development/Assignment-7/Q-7%20Live%20Preview%20Webiste',
      liveLink: 'https://live-preview-site.netlify.app/'
    }
    // Add more projects as needed
  ];

  const reversedProjects = projects.slice().reverse();

  return (
    <div id='projects'>
      <div className='project-grid'>
        {reversedProjects.map((project) => (
          <div className='project-box' key={project.id}>
            <img src={project.image} alt='Project' />
            <p>Techonlogy: {project.paragraph}</p>
            <div className='project-layer'>
              {project.name}
              <div className='button-container'>
                <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
                  GitHub
                </a>
                <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>
                  Try it
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}