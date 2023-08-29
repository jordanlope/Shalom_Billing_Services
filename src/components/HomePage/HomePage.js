export default function SplashPage() {
    const getStarted = () => {
      window.location.href = 'https://www.google.com/';
    };
  
    return (
      <div data-theme='corporate'>
        <nav id='nav'>
          <div className='fixed z-50 navbar bg-gradient-to-l from-gray-900 to-gray-600 bg-gradient-to-r flex justify-between items-center px-4 py-2'>
            <div>
              {/* <img
                src={BrandLogo}
                className='btn btn-ghost normal-case text-xl'
              /> */}
            </div>
            <div>
              <a
                href='#aboutUs'
                className='btn btn-ghost normal-case text-xl text-base-100'
              >
                About us
              </a>
              <a
                href='#services'
                className='btn btn-ghost normal-case text-xl text-base-100'
              >
                Services
              </a>
              <a
                href='#team'
                className='btn btn-ghost normal-case text-xl text-base-100'
              >
                Team
              </a>
            </div>
          </div>
        </nav>
        <div id='aboutUs' className='px-6 md:px-12 lg:px-20 bg-info-content'>
          <div className='hero min-h-screen px-8 py-20 sm:py-32 md:py-40 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-gray-100 to-gray-300'>
            <div className='hero-content text-center'>
              <div className=''>
                <p className='py-10 text-3xl sm:text-5xl font-bold mb-4 text-success-content'>
                  Visualize your Kubernetes Clusters{' '}
                  <br className='hidden xl:inline' /> and Log Data in Real-Time.
                </p>
                <div className='flex justify-center'>
                  <video autoPlay loop class='w-2/3 h-auto' controls>
                    {/* <source src={Demo} type='video/mp4' /> */}
                  </video>
                </div>
  
                <div className='py-20'>
                  <a href='https://drive.google.com/drive/folders/1SpjUE-g7J0H6MLHpR9KYwdZfpNHdQlue?usp=drive_link'>
                    <button
                      className='btn-lg bg-primary hover:bg-seconday active:bg-gradient-to-tl from-sky-400 to-blue-800 rounded-lg'
                      onClick={getStarted}
                    >
                      <p className='text-neutral-content'>Download</p>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <section className='py-20 px-20 md:px-12 lg:px-20 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r'>
            <div className='text-center'>
              <h2 className='text-3xl sm:text-5xl font-bold mb-4 text-base-100'>
                What We Do
              </h2>
              <p className='text-lg sm:text-2xl mb-6 md:mb-14 text-base-100'>
                Track the health and performance of your K8s cluster.
              </p>
            </div>
  
            <div
              id='services'
              className='px-2 md:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 text-neutral-focus'
            >
              <div className='card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-base-200'>
                <div className='car-body items-center text-center gap-4'>
                  <i className='bi bi-search text-4xl text-cente'></i>
                  <h2 className='card-title flex justify-center py-5'>
                    Desktop Application
                  </h2>
                  <div className='flex justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      class='w-12 h-12 pb-5'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75'
                      />
                    </svg>
                  </div>
  
                  <p>
                    Visualize real-time data <br className='hidden xl:inline' />{' '}
                    from your Kubernetes cluster
                    <br className='hidden xl:inline' />
                    with just a click of a button.
                    <br className='hidden xl:inline' />
                  </p>
                </div>
              </div>
              <div className='card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-base-200'>
                <div className='car-body items-center text-center gap-4'>
                  <i className='bi bi-search text-4xl'></i>
                  <h2 className='card-title flex justify-center py-5'>
                    Cluster Metrics
                  </h2>
                  <div className='flex justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      class='w-12 h-12 pb-5'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z'
                      />
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z'
                      />
                    </svg>
                  </div>
  
                  <p>
                    Monitor your cluster’s health
                    <br className='hidden xl:inline' /> with key metrics across
                    different namespaces,
                    <br className='hidden xl:inline' /> comparing pods and nodes
                    performance.
                    <br className='hidden xl:inline' />
                  </p>
                </div>
              </div>
              <div className='card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-base-200'>
                <div className='car-body items-center text-center gap-4'>
                  <i className='bi bi-search text-4xl'></i>
                  <h2 className='card-title flex justify-center py-5'>
                    Logs, Logs, Logs!
                  </h2>
                  <div className='flex justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      class='w-12 h-12 pb-5'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5'
                      />
                    </svg>
                  </div>
  
                  <p>
                    Get up-to-date logs on your pods with the
                    <br className='hidden xl:inline' /> ability to search and
                    filter down on keywords
                    <br className='hidden xl:inline' />
                    to help you debug and troubleshoot.
                    <br className='hidden xl:inline' />
                    <br className='hidden xl:inline' />
                    <br className='hidden xl:inline' />
                  </p>
                </div>
              </div>
              {/* <div className='card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg bg-base-200'>
                <div className='car-body items-center text-center gap-4'>
                  <i className='bi bi-search text-4xl'></i>
                  <h2 className='card-title flex justify-center py-5'>
                    Best of both worlds!
                  </h2>
                  <div className='flex justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      class='w-12 h-12 pb-5'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
                      />
                    </svg>
                  </div>
  
                  <p>
                    Access to our friendly GUI <br className='hidden xl:inline' />{' '}
                    that houses both specific metrics and logs
                    <br className='hidden xl:inline' /> under one application
                    <br className='hidden xl:inline' /> regarding of what
                    component you choose to track!
                    <br className='hidden xl:inline' />
                  </p>
                </div>
              </div> */}
            </div>
          </section>
        </div>
        <section
          id='team'
          className='flex justify-center py-10 px-6 md:px-12 lg:px-20 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-100 to-gray-300'
        >
          <div className='container '>
            <div className='row justify-center'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>
                <h2 className='text-3xl sm:text-4xl font-bold mb-4 pb-10 text-center col-span-full'>
                  The Team Behind KuberSee
                </h2>
              </div>
              <div className='flex justify-evenly flex-wrap'>
                <div>
                  <div className='w-44 rounded-full team-item text-center mx-4'>
                    <a href='https://www.linkedin.com/in/jordanmlopez/'>
                      {/* <img
                        className='rounded-full transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl'
                        src={Jordan}
                        alt=''
                      /> */}
                    </a>
  
                    <h3 className='bi bi-search text-xl pt-5'>Jordan Lopez</h3>
                    <div className='team-info'>
                      <p>
                        {' '}
                        <p>Software Engineer</p>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='w-44 team-item text-center mx-4'>
                    <a href='https://www.linkedin.com/in/joey-cheng-works/'>
                    </a>
  
                    <h3 className='bi bi-search text-xl pt-5'>Joey Cheng</h3>
                    <div className='team-info'>
                      <p>
                        {' '}
                        <p>Software Engineer</p>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='w-44 team-item text-center mx-4'>
                    <a href='https://www.linkedin.com/in/alexis-contre/'>
                    </a>
  
                    <h3 className='bi bi-search text-xl pt-5'>
                      Alexis Contreras
                    </h3>
                    <div className='team-info'>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='w-44 team-item text-center mx-4'>
                    <a href='https://www.linkedin.com/in/elinorweissberg/'>
                    </a>
  
                    <h3 className='bi bi-search text-xl pt-5'>
                      Elinor Weissberg
                    </h3>
                    <div className='team-info'>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='w-44 team-item text-center mx-4' src=''>
                    <a href='https://www.linkedin.com/in/tianqi-zhao416/'>
                    </a>
  
                    <h3 className='bi bi-search text-xl pt-5'>Tianqi Zhao</h3>
                    <div className='team-info'>
                      <p>Software Engineer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <footer className='footer footer-center p-6 md:p-10 bg-gradient-to-br from-gray-900 to-gray-600 bg-gradient-to-r text-base-100 content rounded'>
          <div className='grid grid-flow-col gap-4'>
            <a
              href='https://github.com/oslabs-beta/KuberSee'
              className='link link-hover bi bi-search text-xl'
            >
              GitHub
            </a>
            <a
              href='https://medium.com/@kubersee/visualize-your-kubernetes-clusters-and-log-data-in-real-time-d58eb47409e0'
              className='link link-hover bi bi-search text-xl'
            >
              Medium
            </a>
            <a href='#nav' className='link link-hover bi bi-search text-xl'>
              Home
            </a>
          </div>
          <div>
            <p>Copyright © 2023 - All right reserved by KuberSee</p>
          </div>
        </footer>
      </div>
    );
  }