// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'asinggil', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/datsciportfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Data Analytics, Data Science and Machine Learning Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['asinggil/datsciportfolio', 'asinggil/asinggil.github.io', 'asinggil/Course-2-Week-Data-Science-Course', 'asinggil/watsonstudiorepotest'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Video Game Sales Analysis using Spreadsheet',
          description:
            'A video game sales data analysis project using spreadsheet. The dataset that is used on this analysis consists 16714 rows and 10 columns. The data contains video games sales data from 1976 - 2016 accross different platforms.',
          //imageUrl:
          //  'https://imgur.com/a/113QuJ6',
          link: 'https://docs.google.com/spreadsheets/d/1HoFshlHFbZ1AruY993hsRavDyz5aK-NT/edit?usp=sharing&ouid=100052237031734965140&rtpof=true&sd=true',
        },
        {
          //title: 'Project Name',
          //description:
          //  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          //imageUrl:
          //  'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          //link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Alam S. Inggil',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'alam-s-inggil-55840b2a6',
    // x: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    researchGate: 'Alam-Surya-Inggil',
    //facebook: '',
    instagram: 'schrodingerzkitten',
    // reddit: '',
    // threads: '',
    // youtube: '', // example: 'pewdiepie'
    // udemy: '',
    // dribbble: '',
    // behance: '',
    medium: 'schrodingerskitten',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    // website: 'https://www.arifszn.com',
    // phone: '',
    email: 'alamsuryainggil001@gmail.com',
  },
  resume: {
    fileUrl:'', //kosongan
      //'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'SQL',
    'Tableau',
    'Ms. Excel',
    //'React.js',
    //'Node.js',
    //'Nest.js',
    //'MySQL',
    //'PostgreSQL',
    //'Git',
    //'Docker',
    //'PHPUnit',
    //'CSS',
    //'Antd',
    //'Tailwind',
  ],
  experiences: [
    {
      //company: 'Company Name',
      //position: 'Position',
      //from: 'September 2021',
      //to: 'Present',
      //companyLink: 'https://example.com',
    },
    {
      //company: 'Company Name',
      //position: 'Position',
      //from: 'July 2019',
      //to: 'August 2021',
      //companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Data Analytics Mini Course',
      body: 'RevoU',
      year: 'December 2023',
      link: 'https://drive.google.com/file/d/1mItUUmnOK0J1x83qlIENgvsYziuFHbgc/view',
    },
    {
      name: 'Introduction to Data Science Specialization',
      body: 'IBM',
      year: 'August 2024',
      link: 'https://coursera.org/share/4596ca04965a17f37764ea3ab73e2058',
    },
    {
      name: 'Data Science Professional Certificate',
      body: 'IBM',
      year: 'August 2024',
      link: 'https://coursera.org/share/75685fe45cd7eac35401234971fe4dae',
    },
    {
      name: 'Machine Learning Specialization',
      body: 'DeepLearning.ai & Stanford University',
      year: 'September 2024',
      link: 'https://coursera.org/share/00e8d43393e49337e0bbdd756f9c553c',
    },
  ],
  educations: [
    {
      institution: 'Sebelas Maret University',
      degree: 'B.Sc. in Physics',
      from: '2018',
      to: '2022',
    },
    {
      institution: 'SMA N 1 Wonogiri',
      degree: '',
      from: '2015',
      to: '2018',
    },
  ],
  publications: [
    {
      title: 'Solution of Klein-Gordon equation screened Hartmann ring-shaped plus Kratzer potential using hypergeometry method',
      conferenceName: 'AIP Conference Proceedings',
      journalName: '',
      authors: 'A. S. Inggil, A. Suparmi, S. Faniandari',
      link: 'https://www.researchgate.net/publication/367512338_Solution_of_Klein-Gordon_equation_screened_Hartmann_ring-shaped_plus_Kratzer_potential_using_hypergeometry_method',
      description:
        'Klein-Gordon Equation is an equation that describes the dynamics of a spin-0 particle in relativistic quantum mechanics. The Klein-Gordon equation can be constructed or manipulated as a Schrodinger-like equation. Hypergeometry method can be used to find a solution to the Schrodinger equation by introducing new variables and reducing the equation into second-order differential equations. By the hypergeometric method we can solve the Klein-Gordon equation for Screened Hartmann Ring-Shaped plus Kratzer potential and find the energy equation. According to the results of the energy, the energy of the meson particle increases if the orbital quantum number L increases, and the energy decreases if the radial quantum number nr increases.',
    },
    {
      //title: 'Publication Title',
      //conferenceName: 'Conference Name',
      //journalName: '',
      //authors: 'John Doe, Jane Smith',
      //link: 'https://example.com',
      //description:
      //  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: '@schrodingerskitten', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730', 
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
