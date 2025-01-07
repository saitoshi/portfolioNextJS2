import { IProject } from './type';

export const primeFitnessNakano: IProject = {
  id: '9',
  _id: '660b5d47ff942396a1364766',
  title: 'Prime Fit Nakano',
  date: 'Nov. 2024',
  category: ['NextJS', 'TypeScript', 'MongoDB'],
  image: [
    '/image/primeFitProject/landingPC.png',
    '/image/primeFitProject/location.png',
    '/image/primeFitProject/faq.png',
    '/image/primeFitProject/dashboard.png',
  ],
  thumbnail: '/image/primeFitProject/landingPC.png',
  purpose:
    'A web application created for Nakano Prime Fitness to interact with their clients. The web appliction is a simple CRUD application created with Next JS and TypeScript with a no-SQL data structure using MongoDB.',
  requirements: [
    'A dashboard feature that allows admin to make updates.',
    'A feature to write and post blogs related to their services.',
    'A login feature and only the admin can add users.',
  ],
  comment: [
    'Screenshot of Landing Page (Desktop)',
    'Screenshot of Location Page',
    'Screenshot of FAQ Page',
    'Screenshot of the Admin Dashboard',
  ],
};
export const backstageToSpreadsheet: IProject = {
  id: '8',
  _id: '660b5d47ff942396a1364765',
  title: 'Taboola API x Google Spreadsheet',
  date: 'Apr. 2024',
  category: ['Google Scripts', 'API', 'Google Spreadsheets'],
  image: ['/image/googleSpreadsheet.jpeg'],
  thumbnail: '/image/googleSpreadsheet.png',
  purpose:
    'One of Taboola Japan’s clients approached and asked if there is a way to transfer data to Google Spreadsheets in a quicker manner. Currently, they are transferring data manually by downloading it from the client dashboard and uploading it to Google Drive. However, this did not satisfy the customer. They asked for an easier way to transfer data.',
  requirements: [
    'While there are third party tools that do the operation, the client wanted to avoid using third party tools due to trust and breach of important data.',
    'The client would like data directly delivered from the system in fear of data tampering.',
    'On the other hand, they wanted a simple solution. In other words, using Python or Node JS to connect to the dashboard API was not an option as it was too complicated for the client to manage and handle.',
    'The programming function should filter out data and then write the important data to a spreadsheet.',
  ],
  steps: {
    planning:
      'The project began with an internal meeting between the solution team and the account manager for the client. We listed out what are the needs and what are the extra steps that would provide a better customer experience. ',
    research:
      'The solution team knew that Google Spreadsheet came with the extension known as Google Script. However, none of the members knew how it worked. Thus, I began by listing out the basic questions and specific questions related to the project about Google Script and Google Spreadsheet.',
    development:
      'After listing all of the questions and the answers, I created a test function using a test account used for client demonstration. I created the functional code based on the pseudocode written to meet the customer needs. After creating the functional test code, I created a guideline for the business team on how to run the code and manage the output.',
  },
};

export const taboolaIPFilter: IProject = {
  id: '7',
  _id: '660b5d47ff942396a1364764',
  title: 'Taboola JPN - IP Filter',
  date: 'Apr. 2024',
  category: ['JavaScript', 'API'],
  image: ['/image/midArticleSample.png'],
  thumbnail: '/image/midArticleSample.png',
  purpose:
    'This began because the business team received a request by an APAC client asking not to show Taboola parts in European Regions because of GDPR regulation. Therefore, I created a JavaScript function that inserts Taboola parts if and only if the user of the website is located in regions outside of GDPR participating countries. ',
  requirements: [
    'The JavaScript should recognize the IP Address and then filter out which country the IP Address is from.',
    'The technical team has to write a both internal and external proposal sheet explaining why the code is set up in a certain way and how to implement the code.',
    'Due to the time constraints, provide a list of external API that the client can potentially use to filter out the IP Address.',
  ],

  tasks: [
    'To begin with, I conducted a background research on which countries participated in GDPR. ',
    'I created a simple pseudocode to deliver to the business team on how the JavaScript function would work.',
    'I created a sample demo page of the working JavaScript code.',
    'I conducted an internal and external meeting in both meetings to explain the JavaScript code.',
  ],
  nextSteps: [
    'Create an API that returns true/false if the region is a GDPR participant. That way it is less code for the client side to write and manage.',
    'Use this as an opportunity to learn more about other programming languages, such as Python and Java, to build a backend server.',
  ],
};
export const cloverTechShopLive: IProject = {
  id: '6',
  _id: '66061859b4c527abb8dbee42',
  title: 'CloverTech x ShopLive JPN API',
  date: 'Apr. 2024',
  category: ['TypeScript', 'NodeJS', 'Google Big Query', 'ExpressJS'],
  image: [
    '/image/frontproducts_shoplive.jpg',
    '/image/googleBigQuerySample.png',
    '/image/shopliveDemo.png',
  ],
  thumbnail: '/image/frontproducts_shoplive.jpg',
  purpose:
    'ShopLive is Singapore based Live Commerce B2B SaaS Platform and CloverTech Ltd. is responsible for being a distributor in the Japanese market. The custom function was requested by CloverTech to help meet the Japanese business needs.',
  requirements: [
    'One JavaScript (JS) function to store the required information - Product ID and Livestream ID - to a cookie.',
    'Another JS function that sends the required information to CloverTech server.',
    'Google Big Query was the the data warehouse used for this project. All of the required information was sent and stored here.',
    'A NodeJS backend where it will connect to Google Big Query to manage the data.',
  ],

  tasks: [
    'Since this was my first time using Google Big Query, did some preliminary research on how to use and externally connect it.',
    'A technical proposal sheet was created and delivered to the COO for check and approval.',
    'The client side JS functions and a test page was created and submitted for COO for approval.',
    'Created the backend using Node JS, Express JS, and TypeScript. After checking the functionality uploaded the server to Render.com for the COO to play around.',
    'Created a presentation and documentation in Japanese on how functions work and how the clients can implement them.',
  ],
};
export const midWidgetInsertion: IProject = {
  id: '5',
  _id: '66061859b4c527abb8dbee41',
  title: 'Taboola JPN - Midarticle AD Insertion',
  date: 'Jan. 2024',
  category: ['JavaScript'],
  image: ['/image/midArticleSample.png', '/image/midArticleAd1.jpg'],
  thumbnail: '/image/midArticleSample.png',
  purpose:
    'The business team approached and asked the team I was part of to create a function that inserts a widget for every 200px of paragraphs.',
  requirements: [
    'The mid-article widget should be inserted every 200px of paragraphs only.',
    'If there is an Instagram or YouTube video, the counter should reset to 0px.',
    'The CSS styling should match to the third party the publisher had previously.',
  ],

  tasks: [
    'A demo function was created with the initial requirements listed by the business team.',
    'The function was optimized based on the Solution Lead feedback.',
    'The optimized demo function was presented to the publisher. Feedback and last minute adds on were collected by the business team.',
    'The revised function was delivered to the publisher along with implementation instructions written in Japanese.',
  ],
};

export const makaiMarineReport: IProject = {
  id: '4',
  title: 'Makai Marine',
  _id: '66061859b4c527abb8dbee3f',
  date: 'Oct. 2023',
  category: ['NextJS', 'MongoDB', 'JavaScript'],
  image: [
    '/image/makaiTop.png',
    '/image/makaiChatBot.png',
    '/image/makaiForm.png',
    '/image/makaiSignIn.png',
  ],
  thumbnail: '/image/makaiTop.png',
  purpose:
    'The application was created for Hawaii Annual Code Challenge 2023 (HACC 2023). The main theme was to create an online application where residents of Hawaii can submit a debris report.',
  requirements: [
    'The user should be able to submit the key information, such as what kind of debris, location, image, and other descriptions related to what they found.',
    'All of the information should be stored in a database that is easy to read and understand.',
    'The application should have a chat bot where users can seek for simple help.',
  ],
  tasks: [
    'Was responsible for creating the frontend based on the mock design created by other teammates.',
    'Managed the logic behind the chatbot function.',
  ],
};

export const lvgScraper: IProject = {
  id: '3',
  _id: '66061859b4c527abb8dbee3d',
  title: 'LVG Scrape',
  date: 'JUN. 2023',
  category: ['Puppeeteer ', 'TypeScript', 'NodeJS', 'Docker'],
  image: ['/image/scraperImage.png'],
  thumbnail: '/image/scraperImage.png',
  purpose:
    "A scraper was requested by the Local Venture Group's clients. They wanted to simplify their potential client search.",
  requirements: [
    'The scraper should be easy to use.',
    'The scraper should email the results as a CSV files',
    'The scraper should retrieve all of the necessary information listed by the client.',
  ],
  tasks: [
    'Interviewed the different clients on which website the client wanted to scrape',
    'Created a planning documentation with all the schemas, function names, routes, and etc. to avoid the back and forth between the clients',
    'Created all the GitHub related development issues and the milestone schedule',
    'Created the backend routes and a token system so only registered users can use the scraper',
    'Created a simple frontend where a click on a single button starts the scraper',
    'Create a usage manual for the client and FAQ section to prevent unnecessary back and forth between the clients.',
  ],
};

export const innovation0147: IProject = {
  id: '2',
  _id: '66061859b4c527abb8dbee3b',
  title: '0147: Open Innovation',
  date: 'Jan 2023',
  category: ['TypeScript', 'React', 'NodeJS', 'MongoDB', 'ExpressJS'],
  thumbnail:
    'https://github.com/saitoshi/images/blob/main/0147top.png?raw=true',
  image: [
    'https://github.com/saitoshi/images/blob/main/0147top.png?raw=true',
    'https://github.com/saitoshi/images/blob/main/0147-screenshot/0147Login.png?raw=true',
    'https://github.com/saitoshi/images/blob/main/0147-screenshot/0147Profile.png?raw=true',
    'https://github.com/saitoshi/images/blob/main/0147-screenshot/0147Listing.png?raw=true',
  ],
  purpose:
    'This application was created as a project for Kumamoto City under Local Venture Room INC. The application stores "Open Innovation" based project. Users can create accounts and register their innovation ideas or submit their solutions.',
  steps: {
    planning:
      'Created an excel sheet containing the database schema, controllers, and the frontend layout based on the provided proposal.',
    design: 'Asked and met the desginer team for the frontend designs',
    development:
      'Initially was responsible for developing and testing the backend but took over the frontend after the backend was finished',
    testing:
      'Tested the application within the comapny with members not in the project.',
    maintenance: 'After live deployment, made revisions based on user feedback',
  },
  tasks: [
    'Created the user-related APIs with the aid from MERN stack development manual',
    'Connected the frontend and backend functions for account registeration, user login, other account related activities, and innovation submissions.',
    'Connected the application to an AWS S3 Bucket to store PDF files',
    'With the assistance of nodemailer, made it possible so users and management can receive emails related to innovation activities',
  ],
  requirements: [
    'The application should have a login feature.',
    'New users should verify their accounts.',
    'Users should be able to register their ideas.',
  ],
};
export const doeReport: IProject = {
  id: '1',
  _id: '66061859b4c527abb8dbee39',
  title: 'DOELT: Legislative Tracker',
  date: 'Nov 2022',
  category: ['JavaScript', 'React', 'MeteorJS'],
  thumbnail: 'https://hacc-cassiopeia.github.io/image/log-in.png',
  image: [
    'https://hacc-cassiopeia.github.io/image/home.png',
    'https://hacc-cassiopeia.github.io/image/all-bills.png',
    'https://hacc-cassiopeia.github.io/image/edit-bill.png',
  ],
  purpose:
    'A project created for the given challenges in the Hawaii Annual Code Challenge 2022. The challenge was to create an application in which it automatically extracts legislations and displays the status to the user. The application placed second in the code challenge.',
  requirements: [
    'Due to the time constraints used the UH Manoa ICS template',
    'Front end was built using JavaScript React and React Bootstrap as its framework',
    'The Backend was built using Meteor and MongoDB to store data',
  ],
  links: {
    github: 'https://github.com/HACC-Cassiopeia/HACC-Cassiopeia.github.io',
    organization: 'https://hacc-cassiopeia.github.io/',
  },
};

export const radGrad: IProject = {
  id: '10',
  _id: '660b5d47ff942396a1364767',
  title: 'RadGrad',
  date: 'Aug. 2021',
  category: ['TypeScript', 'React', 'MeteorJS'],
  purpose:
    'RadGrad is an application in which registered ICS students can use as a undergraduate career planner. For example, if a certain student is interested in cybersecurity, using RadGrad they are able to see the recommended courses and possible intern programs. Furthermore, RadGrad also has a point system in which as students advance through their studies they level up.',
  image: [
    '/image/RadGradHome.png',
    '/image/RadGradTask2.gif',
    '/image/RadGradTask3.gif',
  ],
  thumbnail: '/image/RadGradHome.png',
  requirements: [
    'One of the main goals was to migrate the existing JavaScript code to TypeScript',
    'The system that provides the list of courses and internships that will help students achieve to be successful in the area of their interest.',
    'Created components of areas that can be reused frequently.',
  ],
};
export const pastWorks: IProject[] = [
  radGrad,
  doeReport,
  innovation0147,
  lvgScraper,
  makaiMarineReport,
  midWidgetInsertion,
  cloverTechShopLive,
  taboolaIPFilter,
  backstageToSpreadsheet,
  primeFitnessNakano,
].reverse();
