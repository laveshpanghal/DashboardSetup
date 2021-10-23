import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import SideBar from "./SideBar";
import {copyToclipboard} from 'react-copy-to-clipboard'
import axios from "axios";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

const Content = ({}) => {
    const history = useHistory()
    const [text, setText] = useState("");
    const [isCopied, setIsCopied] = useState(false);
    const [text2,setText2] = useState("POST /v1/signup/basic HTTP/1.1\n" +
        "Host: localhost:3000\n" +
        "x-api-key: GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj\n" +
        "Content-Type: application/json")
    const [ggwp,setGgwp]=useState('├── src\n' +
        '│   ├── server.ts\n' +
        '│   ├── app.ts\n' +
        '│   ├── config.ts\n' +
        '│   ├── auth\n' +
        '│   │   ├── apikey.ts\n' +
        '│   │   ├── authUtils.ts\n' +
        '│   │   ├── authentication.ts\n' +
        '│   │   ├── authorization.ts\n' +
        '│   │   └── schema.ts\n' +
        '│   ├── core\n' +
        '│   │   ├── ApiError.ts\n' +
        '│   │   ├── ApiResponse.ts\n' +
        '│   │   ├── JWT.ts\n' +
        '│   │   └── Logger.ts\n' +
        '│   ├── database\n' +
        '│   │   ├── index.ts\n' +
        '│   │   ├── model\n' +
        '│   │   │   ├── ApiKey.ts\n' +
        '│   │   │   ├── Blog.ts\n' +
        '│   │   │   ├── Keystore.ts\n' +
        '│   │   │   ├── Role.ts\n' +
        '│   │   │   └── User.ts\n' +
        '│   │   └── repository\n' +
        '│   │       ├── ApiKeyRepo.ts\n' +
        '│   │       ├── BlogRepo.ts\n' +
        '│   │       ├── KeystoreRepo.ts\n' +
        '│   │       ├── RoleRepo.ts\n' +
        '│   │       └── UserRepo.ts\n' +
        '│   ├── helpers\n' +
        '│   │   ├── asyncHandler.ts\n' +
        '│   │   ├── role.ts\n' +
        '│   │   └── validator.ts\n' +
        '│   ├── routes\n' +
        '│   │   └── v1\n' +
        '│   │       ├── access\n' +
        '│   │       │   ├── login.ts\n' +
        '│   │       │   ├── logout.ts\n' +
        '│   │       │   ├── schema.ts\n' +
        '│   │       │   ├── signup.ts\n' +
        '│   │       │   └── token.ts\n' +
        '│   │       ├── blog\n' +
        '│   │       │   ├── blogDetail.ts\n' +
        '│   │       │   ├── blogList.ts\n' +
        '│   │       │   ├── editor.ts\n' +
        '│   │       │   ├── schema.ts\n' +
        '│   │       │   └── writer.ts\n' +
        '│   │       ├── index.ts\n' +
        '│   │       └── profile\n' +
        '│   │           ├── schema.ts\n' +
        '│   │           └── user.ts\n' +
        '│   └── types\n' +
        '│       └── app-request.d.ts\n' +
        '├── tests\n' +
        '│   ├── auth\n' +
        '│   │   ├── apikey\n' +
        '│   │   │   ├── mock.ts\n' +
        '│   │   │   └── unit.test.ts\n' +
        '│   │   ├── authUtils\n' +
        '│   │   │   ├── mock.ts\n' +
        '│   │   │   └── unit.test.ts\n' +
        '│   │   ├── authentication\n' +
        '│   │   │   ├── mock.ts\n' +
        '│   │   │   └── unit.test.ts\n' +
        '│   │   └── authorization\n' +
        '│   │       ├── mock.ts\n' +
        '│   │       └── unit.test.ts\n' +
        '│   ├── core\n' +
        '│   │   └── jwt\n' +
        '│   │       ├── mock.ts\n' +
        '│   │       └── unit.test.ts\n' +
        '│   ├── routes\n' +
        '│   │   └── v1\n' +
        '│   │       ├── blog\n' +
        '│   │       │   ├── blogDetail\n' +
        '│   │       │   │   ├── mock.ts\n' +
        '│   │       │   │   └── unit.test.ts\n' +
        '│   │       │   └── writer\n' +
        '│   │       │       ├── mock.ts\n' +
        '│   │       │       └── unit.test.ts\n' +
        '│   │       ├── login\n' +
        '│   │       │   ├── integration.test.ts\n' +
        '│   │       │   ├── mock.ts\n' +
        '│   │       │   └── unit.test.ts\n' +
        '│   │       └── signup\n' +
        '│   │           ├── mock.ts\n' +
        '│   │           └── unit.test.ts\n' +
        '│   ├── .env.test\n' +
        '│   └── setup.ts\n' +
        '├── addons\n' +
        '│   └── init-mongo.js\n' +
        '├── keys\n' +
        '│   ├── private.pem\n' +
        '│   └── public.pem\n' +
        '├── .env\n' +
        '├── .gitignore\n' +
        '├── .dockerignore\n' +
        '├── .eslintrc\n' +
        '├── .eslintignore\n' +
        '├── .prettierrc\n' +
        '├── .prettierignore\n' +
        '├── .travis.yml\n' +
        '├── .vscode\n' +
        '│   └── launch.json\n' +
        '├── Dockerfile\n' +
        '├── docker-compose.yml\n' +
        '├── package-lock.json\n' +
        '├── package.json\n' +
        '├── jest.config.js\n' +
        '└── tsconfig.json\n')









    function copyText() {
        setIsCopied(true)
        var copyText = document.getElementById("checkId");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);

    }






    return (

        <div className='break-words  ' id='content'>
            <a href="#heading_one"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                </path>
            </svg></a>

            <h1 id="heading_one" className='text-2xl font-medium'>Node.js Backend Architecture Typescript Project</h1>
            <hr className='w-full mt-6 bg-black h-0.5'

            />
            <br/>

            <p className='text-base break-words'>
                Learn to build a Blogging platform like Medium, MindOrks, and FreeCodeCamp - Open-Source Project By AfterAcademy
            </p>
            <br/>
            <img
                className="h-1/3 w-2/3 "
                src="https://raw.githubusercontent.com/afteracademy/nodejs-backend-architecture-typescript/master/addons/github_assets/cover-nodejs-backend.png"
                alt="svelte logo"/>
            <br/>
            <a href="#heading_two"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                </path>
            </svg></a>
            <h1 id="heading_two"  className='text-2xl font-medium'> About this Open Source Project</h1>
            <hr className='w-full mt-6 bg-black h-0.5'

            />
            <br/>
            <h2 className='text-base'>
                This open-source project is for you(community). Our Team at <a className='text-blue-700' href="https://afteracademy.com/" target="_blank" rel="noreferrer noopener" >AfterAcademy</a> has taken this initiative to promote Backend Learning in the best possible way. We are determined to provide quality content for everyone. Let's do it together by learning from this projec.</h2>

            <br/>

            <a href="#heading_three"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                </path>
            </svg></a>
            <h1 id="heading_three"  className='text-2xl font-medium'> We will learn and build the backend application for a blogging platform.</h1>
            <hr className='w-full mt-6 bg-black h-0.5'

            />
            <br/>
            <h2 >
                The main focus will be to create a maintainable and highly testable architecture.</h2>
               <h2> Following are the features of this project:</h2>
            <br/>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'> backend is written in Typescript: The type safety at build time and having intellisense for it in the IDE like vscode is unparalleled to productivity. We have found production bug reduced to a significant amount since most of the code vulnerabilities are identified during the build phase itself.</p>
              </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'> Separation of concern principle is applied: Each component has been given a particular role. The role of the components is mutually exclusive. This makes the project easy to be unit tested.</p>
                </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'> Centralised Error handling is done: We have created a framework where all the errors are handled centrally. This reduces the ambiguity in the development when the project grows larger</p>
                </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'>  Mongodb is used through Mongoose: Mongodb fits very well to the node.js application. Being NoSQL, fast, and scalable makes it ideal for modern web applications.</p>
                </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'>Docker compose has been configured: We have created the Dockerfile to provide the easy deployability without any setup and configurations.</p>
                </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4' >A pure backend project: We have experienced that when a backend is developed clubbed with a frontend then in the future it becomes really difficult to scale. We would want to create a separate backend project that servers many websites and mobile apps.</p>
                </div>
            </div>
            <br/>
            <a href="#heading_four"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                </path>
            </svg></a>
            <h1 id="heading_four"  className='text-2xl font-medium'>We have also open source a complete blogging website working on this backend project: <a className='text-blue-700' href="https://github.com/afteracademy/react-app-architecture" target="_blank" rel="noreferrer noopener" >Goto Repository</a></h1>
            <hr className='w-full mt-6 bg-black h-0.5'
            />
            <br/>
            <h2 className='text-base'>
                In the above repository [React.js Isomorphic Web Application Architecture] we will learn and build a React web application for a blogging platform using this project as its API server. <a className='text-blue-700' href="https://demo.react-app-architecture.afteracademy.com/" target="_blank" rel="noreferrer noopener" >Visit demo website</a>
             </h2>

            <br/>
            <a href="#heading_five"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                </path>
            </svg></a>
            <h1 id="heading_five"  className='text-2xl font-medium'>How to build and run this project. </h1>
            <hr className='w-full mt-6 bg-black h-0.5 '
            />
            <br/>
            <h2 className='text-base'>
                Install using Docker Compose [Recommended Method]
            </h2>

            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'>Clone this repo.</p>
                </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'>Make a copy of .env.example file to .env. </p>
                </div>
            </div>

            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'> Make a copy of keys/private.pem.example file to keys/private.pem</p>
                </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'>Make a copy of keys/public.pem.example file to keys/public.pem</p>
                </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'>Make a copy of tests/.env.test.example file to tests/.env.test. </p>
                </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'> Install Docker and Docker Compose. <a className='text-blue-700' href='https://docs.docker.com/get-docker/' target="_blank" rel="noreferrer noopener" >Find Instructions Here</a>.</p>
                </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'> Execute <span className='bg-gray-400 rounded border-gray-400 border-2 '>docker-compose up -d</span> in terminal from the repo directory.</p>
                </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'> You will be able to access the api from http://localhost:3000</p>
                </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'>If having any issue then make sure 3000 port is not occupied else provide a different port in .env file. </p>
                </div>
            </div>

            <br/>

            <h2 className='text-base'>
                Run The Tests
            </h2>

            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'>Install node.js and npm on your local machine.</p>
                </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'>From the root of the project executes in terminal <span className='bg-gray-400 rounded border-gray-400 border-2 '>npm install</span>. </p>
                </div>
            </div>

            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'> Use the latest version of node on the local machine if the build fails.</p>
                </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'>Make a copy of keys/public.pem.example file to keys/public.pem</p>
                </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'>To run the tests execute <span className='bg-gray-400 rounded border-gray-400 border-2 '>npm test</span>. </p>
                </div>
            </div>
            <br/>
            <h2 className='text-base'>
                Install Without Docker [2nd Method]
            </h2>

            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'>Install MongoDB on your local.</p>
                </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'>Do steps 1 to 5 as listed for Install using Docker Compose. </p>
                </div>
            </div>

            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'> Use the latest version of node on the local machine if the build fails.</p>
                </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'>Change the <span className='bg-gray-400 rounded border-gray-400 border-2 '>DB_HOST</span>to <span className='bg-gray-400 rounded border-gray-400 border-2 '>localhost</span> in .env and tests/.env.test files.</p>
                </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'>Execute <span className='bg-gray-400 rounded border-gray-400 border-2 '>npm start</span> and You will be able to access the API from http://localhost:3000 . </p>
                </div>
            </div>
            <div className="flex flex-row ...">
                <div className='pl-12 text-lg'>&#8226;</div>
                <div>
                    <p className='text-base pl-4'>To run the tests execute <span className='bg-gray-400 rounded border-gray-400 border-2 '>npm test</span> . </p>
                </div>
            </div>
            <br/>
            <a href="#heading_six"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                </path>
            </svg></a>
            <h1 id="heading_six"  className='text-2xl font-medium'>Project Directory Structure </h1>
            <hr className='w-full mt-6 bg-black h-0.5'
            />
            <br/>

            <div className='flex justify-end ...'
            >  <CopyToClipboard text={ggwp}
                                onCopy={() => setIsCopied(true)}>
                <button onClick={()=>{alert('copied')}}>Copy </button>
            </CopyToClipboard>
                </div>
            <div className='whitespace-pre bg-gray-300 rounded  border-gray-300 border-4' id='checkId'>

                {ggwp}
            </div>

<br/>
            <a href="#heading_seven"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" viewBox="0 0 1792 1792">
                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                </path>
            </svg></a>
            <h1 id="heading_seven"  className='text-2xl font-medium'>API Examples </h1>
            <hr className='w-full mt-6 bg-black h-0.5'
            />
            <h1 className='text-base'>Method and Headers</h1>
            <br/>

            <div className='flex justify-end ... '
            >  <CopyToClipboard text={'POST /v1/signup/basic HTTP/1.1\n' +
            'Host: localhost:3000\n' +
            'x-api-key: GCMUDiuY5a7WvyUNt9n3QztToSHzK7Uj\n' +
            'Content-Type: application/json'}
                                onCopy={() => setIsCopied(true)}>
                <button onClick={()=>{alert('copied')}}>Copy </button>
            </CopyToClipboard>
            </div>
            <div className='whitespace-pre bg-gray-300 rounded border-gray-300 border-4' >

                {text2}

            </div>










        </div>

    );
};

export default Content;
