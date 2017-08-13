# Example Corporate Website

Contributors: Lisa Bernhardt  
Requires at least: Angular 1.6.4  
Version: 1.0  
License: GNU General Public License v2 or later  
License URI: [http://www.gnu.org/licenses/gpl-2.0.html](http://www.gnu.org/licenses/gpl-2.0.html)

---

## Description

This is a example application that I am building in order to learn AngularJS. To keep the complexity at a minimum, I am not using Node.js to compile the AngularJS files. As such, there is no node_modules directory for the library files. Instead, they are located in the assets/lib/vendor directory for third party components.

## Features

This project includes the following features:

* Using AngularJS version 1.6.4
* A initial home page that contains highlights of the other features of the site.
* A product page where all of the products are listed.
* Individual product pages per product.
* A about the company page that contains a company statistics, company mission, company passion, list of partners, list of the team, etc. Also includes a highlight totals section (e.g. # employees, # happy clients).
* A careers page where all of the job postings are listed.
* Individual job pages per job posting. Contains a link to navigate the user to the job application site that is independent from the main site.
* A company contact page that contains a form to send generic emails to and a list of company offices/locations. Also include a link to the product support site that is independent from the main site.
* Example Wizard (Multi-Step) Page - This shows a step-by-step screen where the user can navigate between each steps. Useful for long forms.
* Example Pricing Table - This shows a set of plans along with their price and high-level features.
* Example Blog Page - The company's blog should be maintained by it's own CMS system that is independent from the main site. This is just an example of how it can look with the theme.

## Future Features on Roadmap

* Convert to 'pretty' URLS and maintain refresh capabilities (See "to do" notation)
* Paginate the job postings (See "to do" notation)
* Replace any 'data' bindings from full json to id only service requests (See "to do" notation)
* A CMS to maintain the mock-data

## Installation

1. Install XAMPP on your server
2. In the `htdocs` directory of XAMPP, create a new directory named `angular`.
3. Place this project inside the angular directory.
4. Go to your browser and navigate to `http://localhost/angular/app/#!/` to see the AngularJS version.

## Third Party Resources

Example Application bundles the following third-party resources:

jQuery  
Licenses: MIT  
Source: [https://jquery.org](https://jquery.org)

Angular  
Licenses: MIT  
Source: [https://angularjs.org/](https://angularjs.org/)

Angular Translate, Pascal Precht  
Licenses: MIT  
Source: [https://angular-translate.github.io/](https://angular-translate.github.io/)

Angular UI Router  
Licenses: MIT  
Source: [https://github.com/angular-ui/ui-router]()https://github.com/angular-ui/ui-router)

Bootstrap  
Licenses: Creative Commons Attribution 3.0 Unported (CC BY 3.0)  
Source: [http://getbootstrap.com/](http://getbootstrap.com/)

Glyphicons, Jan Kovarik  
Licenses: Creative Commons Attribution 3.0 Unported (CC BY 3.0)  
Source: [http://glyphicons.com/](http://glyphicons.com/)

Font Awesome, Dave Gandy  
Licenses: MIT  
Source: [http://fontawesome.io/](http://fontawesome.io/)

Jumbotron Texture, Federica Pelzel  
Licenses: Creative Commons Attribution 3.0 (CC BY-SA 3.0)  
Source: [http://subtlepatterns.com/](http://subtlepatterns.com/)

Stock Photos, Pexels  
Licenses: Creative Commons Zero (CC0)  
Source: [https://www.pexels.com](https://www.pexels.com)

## Changelog

### 1.0

* Initial release
* Released: August 9, 2017

### 1.1

* Moved the page content (e.g. long passages) to mock-data JSON files
* Moved Job Categories and Employment Types to mock-data JSON files
* Fixed minor translation issue in career page's breadcrumbs
* Released: August 12, 2017



