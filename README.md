
# ¡Critic!'s Review
------  
¡Critic!'s review has access to OMDB's full movie API via a search bar. The purpose of this app is to engage the user in providing both honest feedback to be shared with friends and tracking previously watched movies to avoid repeats. This App provides full create/edit/delete functionality for the user not found on other sites, barring admin rights.

## Technologies / Sources
------  
  * MongoDB, mongoose and node.js to develop app before Heroku deployment
  * jQuery utilized to access OMDB API for movie search
  * [CSS-tricks](https://css-tricks.com/) & [MDN](https://developer.mozilla.org/en-US/) & [w3Schools](https://www.w3schools.com/) referenced
  * Site hosted live via [Heroku](https://kritic.herokuapp.com/movies)

## Approach
------  
There is a lack of amatuer movie review sites that cater to the individual and rather feed off ad's revenue making for a site that feels like a commercial. This project has always been something I wanted to try and be able to deploy within my circle of friends as we all share each other's Plex server access. 

## Installation Instructions
------  
1. Open your terminal and *`cd`* into the *`directory`* of your choice (Note: do not clone a repo inside another)
2. Go to my [GitHub](https://github.com/christopher-cook/critic) repository
3. In the top-right corner choose **`Clone or Download`**
  - via **SSH**
    -- in terminal, type `git remote set-url <remote name> <ssh url>` ... remote name is typically origin
  - via **HTTPS**
    -- in terminal, type `git clone <https url>`
4. Additional packages may be required:
  -- npm install express methodOverride mongoose mongodb ejs jquery

### Link to Site
------
Live game site hosted at [¡Critic!](https://kritic.herokuapp.com/movies)

## Problems to be addressed
------
- Event listeners from search results not functional
- Add an additional comment button that saves in list format
- Implementing Sign Up and Login author.
