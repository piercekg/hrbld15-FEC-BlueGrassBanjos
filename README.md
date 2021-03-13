## Front End Capstone "Rainforest.com"

### Overview
Rainforest.com is the front-end of an imaginary e-commerce clothing website. It was built with React, Express, and Bootstrap.  The web-app consists of 4 interactive components that provide product information and user feedback. For more information on the guidelines and specs for the project, see the [business requirements document](https://docs.google.com/document/d/1NyZdWDHPqQ7xEqzfy3nYlUV90UO0maN1UvdUe6CwG3k/edit#heading=h.b4f9vfzdtmsk).

### Description (Add Screen Captures)
**Product Overview**\
This section of the app highlights the current product being viewed. It features a highly interactive image gallery, product details, and shopping functionality. Users are able to navigate through the image gallery and zoom in on the selected image. Users may select from available styles and sizes and add items to their cart.

**Related Products**\
The first carousel in this section of the app is made up of cards representing products that have been tagged as related to the product in the product overview. The cards feature a default product image and product details. The 'star' action button opens a comparison modal displaying the features of the related product and main product side-by-side.
The second carousel is made up of cards representing products that the user has saved for later, and is unique to each user. The 'Add to Outfit' card saves the product in the product overview to this list. The 'x' action button removes a product from this list.
A user click on a product's name will move that product to the product overview.

**Questions & Answers**\
This section of the app displays users' questions about the product in the product overview, and other users' answers to those questions. Users can search for answers, add answers to questions, rate answers as helpful, and ask new questions.

**Ratings & Reviews**\
This section of the app displays user ratings and reviews for the product in the product overview. This includes the average rating and a breakdown of how many reviews gave the product which rating. Users can tag reviews as helpful and report reviews that violate the sites usage guidelines.

**Navigation**\
Users can navigate to different products by entering a product id in the url bar:
`http://localhost:3000/:product_id` or `http://EC2_public_ip/:product_id`\
For example `http://localhost:3000/18082` navigates to the Heir Force Ones.

Alternatively, a user click on the product name of a related product or outfit item will navigate to that product.

### Getting Started
**General Requirements**\
nodejs v14.x

**Setup**\
Fork this [Github repository](https://github.com/BlueGrass-Banjos/hrbld15-FEC-BlueGrassBanjos), and in your chosen local directory clone your repo:\
`$ git clone https://github.com/YOUR_USERNAME/hrbld15-FEC-BlueGrassBanjos.git`

Navigate to the root project directory - `/hrbld15-FEC-BlueGrassBanjos/` - and follow these instructions:

*All dependencies are listed in package.json*\
Run `$ npm install` to install dependencies locally.

The express server setup is located in `/server/index.js`. The default port is `3000`. You may need to update the reference to the express server in `/client/requests.js` if it is not `localhost:3000`.
In order to interact with the HackReactor API, you will need to generate a [gitHub personal authorization token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) and create `config.js` in the root directory of the project. `config.js` should look like this:\
`module.exports = {TOKEN: 'YOUR_PERSONAL_AUTH_TOKEN_HERE'};`

**Run app in development-mode**\
run `$ npm run react-dev` to start webpack in watch mode.\
run `$ npm run server-dev` to start the express server with nodemon.

**Run app in production-mode**\
Update the reference to the express server in `/client/requests.js` to the public ip address of your EC2 instance.

run `$ npm run webpack-prod` to build the bundle.\
run `$ npm run server-prod` to start the express server with forever (runs continuosly).

### Team hrbld15-FEC-BlueGrassBanjos
**Authors:**\
David Goelitz - Product Overview\
Ben Kennedy - Ratings & Reviews\
Kevin Pierce - Related Products\
Hayden West - Questions & Answers

--------------- *Optional additional sections and notes* ---------------
### For the Capstones
When creating a README for your capstone projects, consider the different objectives of the work you did on each. Think about how to best reflect where your effort went for each, and how to best represent that work. Due to the differences between the two capstone projects, it is likely that their READMEs will be very different.
### Table of Contents - You can link to the different sections below
### Usage - Further details on how the project is meant to be used may be helpful.
### Roadmap - What future enhancements are planned? What is the current status of the project? Is it being actively maintained?