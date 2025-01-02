YC Directory - Startup Pitch Platform
YC Directory is a platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other pitches, and gain exposure through a clean, minimalistic design for a smooth user experience. Powered by React 19, Next.js 15, Sanity, and TailwindCSS, it offers a seamless and dynamic way to engage with startup pitches.

##⚙️ Tech Stack
React 19 – A powerful front-end library for building modern user interfaces.
Next.js 15 – A full-stack React framework for building production-grade applications.
Sanity – A headless CMS for dynamic content management.
TailwindCSS – A utility-first CSS framework for rapid design prototyping.
ShadCN – For building UI components.
TypeScript – A superset of JavaScript for type safety and enhanced development experience.
🔋 Features
Live Content API: Displays the latest startup ideas dynamically on the homepage using Sanity's Content API.
GitHub Authentication: Allows users to log in easily using their GitHub account.
Pitch Submission: Users can submit startup ideas, including title, description, category, and multimedia links (image or video).
View Pitches: Browse through submitted ideas with filtering options by category.
Pitch Details Page: Click on any pitch to view its details, with multimedia and description displayed.
Profile Page: Users can view the list of pitches they've submitted.
Editor Picks: Admins can highlight top startup ideas using the "Editor Picks" feature managed via Sanity Studio.
Views Counter: Tracks the number of views for each pitch instead of an upvote system.
Search: Efficient search functionality to load and view pitches.
Minimalistic Design: A fresh, simple UI with only the essential pages for ease of use and a clean aesthetic.
🤸 Quick Start
Prerequisites
Make sure you have the following installed on your machine:

Git
Node.js (v16 or higher recommended)
npm (Node Package Manager)
Cloning the Repository
Clone the repository to your local machine:

bash
Copier le code
git clone https://github.com/JavaScript-Mastery-Pro/yc-directory.git
cd yc-directory
Installation
Install the project dependencies:

bash
Copier le code
npm install
Set Up Environment Variables
Create a new file named .env.local in the root of your project and add the following content:

env
Copier le code

NEXT_PUBLIC_SANITY_PROJECT_ID=<your_sanity_project_id>
NEXT_PUBLIC_SANITY_DATASET=<your_sanity_dataset>
NEXT_PUBLIC_SANITY_API_VERSION='vX'
SANITY_TOKEN=<your_sanity_token>

AUTH_SECRET=<your_auth_secret>
AUTH_GITHUB_ID=<your_github_client_id>
AUTH_GITHUB_SECRET=<your_github_client_secret>
Replace the placeholder values with your actual Sanity credentials (project ID, dataset, API version, and token) and GitHub OAuth credentials (client ID and client secret). You can obtain these credentials by signing up and creating a new project on the Sanity website and registering your app on the GitHub Developer settings page.

Running the Project
Run the development server:

bash
Copier le code
npm run dev
Open your browser and navigate to http://localhost:3000 to view the project.
