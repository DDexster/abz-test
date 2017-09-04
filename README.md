# ABZ-Agency test task

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Sources of this project are https://github.com/DDexster/abz-test

Deployed project http://abz-test-task.herokuapp.com/

## Table of Contents

- [Assignment](#assignment)
  - [General information](#general-information)
  - [Technical requirements](#technical-requirements)
  - [Part I (required)](#part-i-required)
  - [Part II (optional)](#part-ii-optional)
- [What was done](#what-was-done)

## Assignment

In this test assignment your call is to develop frontend part of service directory and contact
us pages for social network website using the following instructions.

### General information

  1. Test assignment is split into two parts. Part 1 is required and you must complete it fully to be considered. Part 2 consists of optional tasks that you can complete to show your experience in web development field.

  2. If you have experience with Angular / React frameworks try to implement as many tasks from Part 2 as possible to prove your overall proficiency and skills.

  3. We recommend you to use “Pixel Perfect” Google Chrome extension or similar. We will use this extension to review your test assignment.

  4. You should send your solution to our email address *info@abz.agency* as a link to github/bitbucket repository. If you submit your solution in any other form (as a link to zip archive, attached zip file, etc.) – your application won’t be considered!

### Technical requirements

- Angular 2+ / React;
- HTML5/CSS3;
- Markup should be pixel perfect (desktop: latest version of Chrome/FF/Safari/Edge, mobile: latest version of Safari on iOS 10 and Chrome on Android 7);
- minimum screen width is 970px;
- maximum screen width is 1440px;
- markup should be ready for content overflow, including block header length. If text is longer than block can display you should cut it and show “…” sign using CSS or Javascript.

### Part I (required)

1. Slice service directory page PSD mockup into HTML5/CSS3. Implement 3 column page layout, left and right columns should have fixed width while column in the middle should change width depending on the screen size.

2. Render service directory block on the page you build in the task 1 using the **following [link](https://anypoint.mulesoft.com/apiplatform/abz-dn-ua/#/portals/organizations/53806f58-49a2-4aea-bae9-91ca570e4f4d/apis/18293074/versions/307251)** to REST API documentation (services section): 
  * fetch list of services from server using GET request http://504080.com/api/v1/services/categories;
  * render service directory using received data as shown in the mockup;
  * implement error handling for server side errors (4xx, 5xx) – display a modal window with error description received from server;
  * no PSD mockup is provided for modal window. Use your own judgement on how to style it so that it doesn’t look alien to the rest of the page.

3. Slice contact us page PSD mockup into HTML5/CSS3 using the following requirements:
  * uploaded image should be fully visible even if it is wider than the form block;
  * logo should always stick to the left;
  * “Log In Now” button should always stick to the right;

4. Implement contact us page business logic using the **following [link](https://anypoint.mulesoft.com/apiplatform/abz-dn-ua/#/portals/organizations/53806f58-49a2-4aea-bae9-91ca570e4f4d/apis/18293074/versions/307251)** to REST API documentation (support and directories sections). In order to render this page with real data you need to make a GET request to
http://504080.com/api/v1/directories/enquiry-types to obtain list of choices for Enquiry Type dropdown. Please, note that the list should include option “Other” with a description of other type. If user chooses this option, an additional field should appear to type in a custom enquiry type. Implement form validation on the client side:
  * email field should validate that email is an input;
  * description field should not exceed 1000 characters;
  * uploaded image should not exceed 300x300 pixels;
  * validate that the image was chosen and not an arbitrary file;
  * maximum size of the uploaded image should not exceed 5MB;
  
If form data passed validation send it via POST to http://504080.com/api/v1/support.

### Part II (optional)
1. Website logo should support Retina screens.

2. Use CSS preprocessor (Sass/Less/Stylus).

3. Minify and optimize css, js, images, etc.

4. Organise your CSS styles in the human-readable way (group CSS rules by function, use comments to explain and organize CSS or split CSS rules into multiple files by function and use CSS imports to join them into one file).

5. Markup of this block https://yadi.sk/i/EPDHWR2i3GgbSX should be implemented in such a way that block margins are no less than on the PSD mock up and this grid is responsive, i.e. depending on the page width maximum number of blocks is shown in one row and blocks in one row are aligned to the middle.

## What was done

1. Part I was implemented fully on React, using [Semantic UI](https://react.semantic-ui.com/) for styling elements on **Contuct US** page. **Service Directory** page was developed using only *css* to fit **PSD** mockup and it's not adaptive for devices with **screen width less than 970px**.

2. Part II is implemented partially:
  * Website's logo supports Retina screens
  * CSS preprocessor was not use, because I didn't want to make `yarn eject` on my project
  * All assets was minified using `yarn build`, for making a *production-ready* sources.
  * CSS styles are organized for each component
  * https://yadi.sk/i/EPDHWR2i3GgbSX markup can be implemented using [Semantic UI](https://react.semantic-ui.com/) grid but it could affect styles and break *Pixel-Perfect*.

3. Sources of this project are [here](https://github.com/DDexster/abz-test).

4. This project is deployed on Heroku following this [url](http://abz-test-task.herokuapp.com/).

5. Modules used:
  * ["create-react-app"](https://www.npmjs.com/package/create-react-app)
  * ["react"](https://www.npmjs.com/package/react)
  * ["react-dom"](https://www.npmjs.com/package/react-dom)
  * ["react-loading"](https://www.npmjs.com/package/react-loading)
  * ["react-retina-image"](https://www.npmjs.com/package/react-retina-image)
  * ["react-router-dom"](https://www.npmjs.com/package/react-router-dom)
  * ["react-scripts"](https://www.npmjs.com/package/react-scripts)
  * ["semantic-ui-react"](https://www.npmjs.com/package/semantic-ui-react)