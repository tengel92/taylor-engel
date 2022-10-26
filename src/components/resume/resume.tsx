import { component$ } from '@builder.io/qwik';

interface ResumeData {
  companies: Company[];
}

interface Company {
  name: string;
  location: string;
  roles: Role[];
}

interface Role {
  title: string;
  start: string;
  end: string;
  projects: Project[];
}

interface Project {
  name?: string;
  description: string;
  techStack: string;
  bullets: string[];
}

export const Resume = component$(() => {
  const resumeData: ResumeData = {
    companies: [
      {
        name: 'PwC',
        location: 'Dallas, TX',
        roles: [
          {
            title: 'Senior Software Engineer | Manager',
            start: 'June 2021',
            end: 'Present',
            projects: [
              {
                description:
                  'I am leading software engineers to design and develop new features for an AI-driven, voice enabled, virtual assistant. The application currently exceeds 40,000 unique users a day and has thousands of utterances. It is a critical application at PwC that supports return to office, workplace reservations and time entry among many other features.',
                techStack: 'Angular 12, Ionic 5, Node.js microservices',
                bullets: [
                  'One initiative I led development on was to incorporate the concept of favoriting. We started with favoriting contacts but this component is designed to be generic and can be applied to other pieces.',
                  'Led UI design and development under a very short and strict deadline to accommodate tracking of vaccination status of PwC employees. I created a new site for administrators to view COVID-19 vaccination cards and approve, request additional information or reject employee vaccination status.',
                ],
              },
            ],
          },
          {
            title: 'Software Engineer | Senior Associate',
            start: 'January 2020',
            end: 'June 2021',
            projects: [
              {
                description: `The goal of this project was to develop a proof of concept Angular web application that encapsulates a legacy application using the “strangler” pattern. This successfully proved our ability to have a hybrid legacy / modern web application that can slowly transition to a full rewrite of the web application using modern web frameworks.`,
                techStack: 'Angular 11, Nest.js, .NET Core',
                bullets: [
                  'Modified existing legacy web application to work effectively and efficiently as a standalone web app as well as within an Angular web app using an iframe.',
                  'Developed a solution to handle routing between legacy routes within the iframe and the modern Angular web app.',
                  'Occasionally assisted team as needed in developing .NET Core REST APIs.',
                ],
              },
              {
                description: `I was tasked with developing an advanced automated testing framework that was designed to be a robust solution for testing all JavaScript and TypeScript web and mobile applications at PwC.`,
                techStack: 'Node.js, TypeScript, Selenium, Mocha',
                bullets: [
                  'Initially the goal was to develop automated test cases for a web app named Phoenix using a new, automated testing application developed for PwC by a third party contractor. However, it was quickly realized that it had significant issues and management determined it would be worthwhile to consider alternatives.',
                  'Researched and developed an automated testing framework using Node.js, TypeScript, Selenium, Mocha and other technologies that proved to be far more stable and performant than the previous framework and other solutions.',
                  'Led discussions for proving the value of my approach to management and teammates and gained approval which transitioned stages from R&D to a production application.',
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Pariveda Solutions',
        location: 'Dallas, TX',
        roles: [
          {
            title: 'Software Engineering Consultant',
            start: 'July 2018',
            end: 'January 2020',
            projects: [
              {
                description:
                  'I was a full stack development consultant for a leading electric utility. The purpose of this project was for key stakeholders up to the CIO to have visibility into the status of business-critical applications especially during unplanned outages.',
                techStack:
                  'Angular v6 with Ionic 4 (mobile app), Node.js API, Express, Angular v8 (web app)',
                bullets: [
                  'Initial scope of the project was limited to front-end development as the Node.js API would be developed by another team. However, our team’s velocity exceeded expectations for speed and quality so our client allowed us to complete API development tasks.',
                  'I worked with the team to refactor and improve the code quality and performance as well as teaching best practices for RESTful APIs.',
                  'Improved my ability to design and develop aesthetically intuitive and pleasing components of the application as we not only wanted to provide an incredibly useful but also usable application.',
                ],
              },
              {
                description:
                  'This application was a multi-year, multi-million-dollar investment by the client to improve many aspects of the business.',
                techStack:
                  'JavaScript front-end that utilizes the Knockout.js library, Java 8 API, and Microsoft SQL Server',
                bullets: [
                  'Utilized Agile methodologies along with a streamlined DevOps cycle to rapidly provide high-value enhancements post go-live of an enterprise level custom web application.',
                  'Contributed to a team tasked with developing new features one of which was a scheduling module that was valued to have over a $1 million per year return on investment.',
                  'Efficiently and effectively collaborated with many different teams such as business analysts, quality assurance, and subject matter experts to ensure the highest quality product was delivered.',
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Nucor Corporation',
        location: 'Dallas, TX',
        roles: [
          {
            title: 'Oracle SOA Developer',
            start: 'October 2015',
            end: 'June 2018',
            projects: [
              {
                description:
                  'I was a SOA integrations developer where I had the opportunity to design and develop a brand new application called NextConnect which purpose was to view multiple business documents such as purchase orders, shipment receipts and invoices.',
                techStack:
                  'Angular v2-5, Node.js, HTML5, CSS3, Sass, Material Design and RESTful APIs',
                bullets: [
                  'Frequently was tasked with developing solutions to complex and unique problems such as how to get real-time data from various different machines into Oracle E-Business Suite (EBS).',
                  'Responsible for secured file transmissions to and from multiple bank trading partners using FTPS with SSL certificates as well as SFTP and SSH key authentication where yearly total bank transfers would exceed $2 billion.',
                  'Exercised principles of the software development lifecycle (SDLC), Agile and Kanban methodologies with a large, diverse development team to ensure software applications were delivered within project scope, budget and timeline.',
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <section
      id="resume"
      className="max-w-screen-md min-h-screen mx-auto text-white"
    >
      <h1 className="p-4 text-3xl font-extrabold text-indigo-200 sm:text-5xl">
        Résumé
      </h1>

      <div className="px-4 divide-y-2 divide-indigo-300">
        {resumeData.companies.map((company: Company, index: number) => {
          return (
            <details key={index} className="py-4 group" open={index === 0}>
              <summary className="flex items-center justify-between cursor-pointer">
                <div className="flex flex-col justify-between w-full lg:flex-row">
                  <div className="lg:flex lg:flex-col lg:justify-evenly">
                    <h1 className="text-2xl font-medium">{company.name}</h1>
                    <h2 className="text-lg font-medium">
                      {company.roles[0].title}
                    </h2>
                  </div>
                  <div className="flex flex-row-reverse items-end justify-between lg:flex-col lg:justify-evenly">
                    <p>{company.location}</p>
                    <p>
                      {company.roles[0].start} – {company.roles[0].end}
                    </p>
                  </div>
                </div>

                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                  <div className="w-5 h-5 text-base">
                    <div className="relative w-5 h-5 border border-white rounded-full">
                      <div className="absolute left-1/2 top-1/2 -ml-1.5 -mt-[1px] h-0.5 w-3 rotate-0 transform bg-white transition-all duration-500 ease-in-out group-open:rotate-180  group-open:transform group-open:transition-all group-open:duration-500 group-open:ease-in-out"></div>
                      <div className="absolute left-1/2 top-1/2 -ml-[1px] -mt-1.5 h-3 w-0.5 rotate-0 transform bg-white opacity-100 transition-all duration-500  ease-in-out group-open:rotate-180  group-open:transform group-open:opacity-0 group-open:transition-all group-open:duration-500 group-open:ease-in-out"></div>
                    </div>
                  </div>
                </span>
              </summary>

              {company.roles.map((role: Role, roleIndex: number) => {
                return (
                  <div key={roleIndex} className="pt-6">
                    {roleIndex > 0 && (
                      <div>
                        <h2 className="text-lg font-medium">
                          {company.roles[roleIndex].title}
                        </h2>
                        <p>
                          {company.roles[roleIndex].start} –
                          {company.roles[roleIndex].end}
                        </p>
                      </div>
                    )}

                    {role.projects.map(
                      (project: Project, projectIndex: number) => {
                        return (
                          <div key={projectIndex}>
                            <p className="pt-4 leading-relaxed">
                              {role.projects.length > 1 && (
                                <b>
                                  Project {role.projects.length - projectIndex}{' '}
                                  -{' '}
                                </b>
                              )}
                              {project.description}
                            </p>
                            <p className="pt-2 leading-relaxed">
                              <b>Tech Stack - </b>
                              {project.techStack}
                            </p>
                            <ul className="pt-4 pl-8 list-disc">
                              {project.bullets.map(
                                (bullet: string, bulletIndex: number) => {
                                  return <li key={bulletIndex}>{bullet}</li>;
                                }
                              )}
                            </ul>
                          </div>
                        );
                      }
                    )}
                  </div>
                );
              })}
            </details>
          );
        })}
      </div>
    </section>
  );
});

export default Resume;
