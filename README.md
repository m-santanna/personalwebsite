# PersonalWebsite

### Description

The idea behind this project is to be able to share critical information about my programming journey to future recruiters and expand my knowledge on different frameworks and common practices.

#### Distinctiveness and Complexity

This project tackles the UI aspect of web development the most. It not only has a fundamental difference in concept from the other projects created during this course, but it is also done in a completely different territory (Since it is done in Next.js and not Django, topic in which will be talked further later on this section). The UI is highly customizable, and it is also responsive. It has a dark and a light theme, and it is also responsive to different screen sizes. It also has a lot of components that are nested inside each other, which makes it more complex than some other projects built during CS50Web.

It required me to develop strong intimacy with TailwindCSS, TypeScript and Next.js 13. Which are all high level frameworks/languages that helped me develop my abilities and knowledge of web development, where each one of them are on high demand these past few years, which made me interested in learning these frameworks. TailwindCSS allowed me to create a highly customizable and responsive UI, abstracting the CSS itself. TypeScript helps with fundamental problems that used to occur when using JavaScript, which at the end of the day is converted back to JS. Next.js was more than enough to build a fullstack app that has different routes, and runs multiple components.

#### Languages, Frameworks and Libraries

To achieve a solid foundation on React, and to get used to popular CSS frameworks, this project is built with Next.js 13, TailwindCSS and TypeScript. Even though it was asked to build the backend of the website with Django, I came to the conclusion that the goal of this project did not require any API/Models, which made me less susceptible to use Django, since it would restrain me more than generate goods.

#### Python packages?

As said before, this project didn't require any backend features, which resulted in no need to use any Python packages.

### Sections and Components

#### Navbar

The NavBar contains links for all the sections that are present on the website, that were created by the Link component, made by the Next.js team, that doesn't render all the data from the page again. Differently than the anchor tag. The NavBar also has a button to switch between the light and the dark theme. Feature done with the next-theme library.

#### HomeSection

The home section has an introduction to the website while also demonstrating a minimalistic design. It required a few nested components, and knowledge of the flex property of css. Property that is needed in the majority of the project.

#### AboutSection

This section contains all my information needed to know my strengths and weaknesses to get a better grasp of my knowledge and experience on Computer Science.

#### ProjectsSection

This section is responsible to showcase all the projects done while taking CS50Web and a few personal projects that I idealized and started developing. Each project has a link attached to its name, opening a new tab of the users browser, and showcasing the GitHub repository with the project's content.

#### ContactSection

This section contains links to my GitHub, Linkedin and Email accounts, allowing any visitors to contact me.

#### tsx files

As mentioned before, this project is done with TypeScript, and more precisely with the tsx extension. This extension allows me to use HTML inside my JavaScript code, which is a very powerful feature that allows me to create components that are reusable and easy to understand. It is also noticable that each route has a page.tsx file that is responsible to render the content of the page.

#### cs50web and cs50x

These routes are responsible to redirect the user to a page that shows my CS50Web and CS50x certificates, respectively (Even though I don't yet have the cs50web diploma, I already created the route for it).

### Youtube Video Showcasing the app

https://youtu.be/ShjJUT0DDXg

### How to run the application

You are able to access this project by visiting: https://m-santanna.me/
Optionally, you can clone this repository to your local machine. And run the following commands:
"npm install"
"npm run dev"
And open a tab on your favorite browser on: http://localhost:3000
