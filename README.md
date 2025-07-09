# Project 2

## Product Vision

FOR students who have lost or found personal items on campus
WHO does not have a reliable way to report or search,
THE FoundIt is a web-based listing board
THAT lets students report, browse, and claim lost items
UNLIKE posting on random forums or flyers,
OUR app is centralized, searchable, and campus-verified.

## Using the Prototype

You can try the live version of our prototype here:

🔗 [FoundIt Live Demo](https://founditapp.netlify.app)

## Included Features:

Hero section explaining the app

Header with buttons to report a lost or found item

Page for submitting a lost item

Page for submitting a found item

Feed showing users posts (lost & found)

Filter to show lost only / found only / all posts

Data is stored and retrieved from a real MongoDB database (nodejs server)

Users can delete posts they created

Users can mark items as resolved

Deployed and fully interactive

## 📁 Project Structure

Our project is structured as a **mono-repo**

**Frontend**: React app for prototype

**Backend**: Nodejs server and mongodb database

## 🏗️ Software Architecture

### ✅ Key Architectural Qualities

- **Nonfunctional Characteristics**: Performance and responsiveness are critical so users can report and browse posts with minimal delay.
- **Number of Users**: As a campus-wide platform with potential multi-campus use, scalability is a design priority.
- **Product Lifetime**: The system is designed to evolve over time and easy to expand with features like login or media upload in the future.

---

### 🧱 Layered Architecture (Based on Figures 4.10 & 4.11)

| Layer | Role in FoundIt |
|-------|------------------|
| **User Interface** | React.js-based browser interface for interacting with the app |
| **UI Management** | Handles forms, user flows (report lost/found), routing |
| **Application Logic** | Controls CRUD for posts, filtering, resolving, deleting |
| **Shared Services** | Express.js REST API endpoints |
| **Database Layer** | MongoDB database via Mongoose ORM |

---

### 🖼️ Architecture Diagram

![Architecture Diagram](/flowchart.png)

### 🧰 Technology Choices

| Area            | Technology / Decision                                         |
|-----------------|---------------------------------------------------------------|
| **Database**    | MongoDB (NoSQL); flexible schema for storing post data       |
| **Platform**    | Web-first (React); potential mobile support in the future     |
| **Server**      | Node.js with Express, hosted on Render                        |
| **Open Source** | React.js, Axios, Express, Mongoose, dotenv                    |
| **Dev Tools**   | VS Code, Postman, MongoDB Compass, GitHub Projects            |


## ⚙️ Setup Instructions

### ✅ Prerequisites

Make sure you have:

- [Node.js](https://nodejs.org/) installed
- npm (comes with Node.js)

# Clone the project-2 repo in terminal

``` 
git clone https://github.com/CSCI-40500-Summer-2025/Project-2.git

cd to the repo folder
```

# Move into frontend project

``` cd Frontend ```

# Install dependencies

``` npm install ```

# Start the development server
```
npm run dev
```

**After start , in the terminal you should see a local link for example http://localhost:5174**

open the local url to see the project live
