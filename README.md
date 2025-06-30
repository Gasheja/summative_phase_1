# 🧠 TaskFlow — Task Management Web App

**TaskFlow** is a beginner-friendly task management web application built as part of a DevOps learning project. It allows users to create, update, and manage tasks while practicing DevOps best practices using Azure DevOps for planning, version control, and continuous integration (CI).

---

## 🚀 Project Overview

This project demonstrates:
- Full-stack web application development using Node.js and Express
- Git-based version control using Azure Repos
- Professional project planning with Azure Boards
- CI automation using Azure Pipelines
- Code linting and unit testing for quality assurance

---

## 🎯 Features

| Feature               | Description |
|-----------------------|-------------|
| ✅ Create Task        | Users can add a new task with title, description, and deadline |
| ✅ View All Tasks     | Fetch a list of all tasks stored in the database |
| ✅ Update Task        | Modify task details like title, status, or deadline |
| ✅ Delete Task        | Remove a task from the list (optional) |

---

## 🧱 Tech Stack

- **Backend**: Node.js, Express
- **Database**: SQLite (for simplicity)
- **CI/CD**: Azure Pipelines
- **Version Control**: Azure Repos (Git)
- **Testing**: Jest
- **Linting**: ESLint

---

## 🛠️ Getting Started

### 1. Clone the Repository

```
git clone https://dev.azure.com/YOUR_ORG/YOUR_PROJECT/_git/summative_phase_1
cd summative_phase_1
```
# Install Dependencies
```
npm Install
```
# Run the application
```
node app.js
```
The server will start at http://localhost:3000.

# 🧪 Testing the API
I used Postman test endpoints:

## ▶️ Create a Task

```
POST http://localhost:3000/api/tasks
```
### JSON body:
```
{
  "title": "Finish DevOps Assignment",
  "description": "Push baseline code and write README",
  "deadline": "2025-07-01"
}
```
# Get all tasks

```
GET http://localhost:3000/api/tasks
```
# 🔁 Continuous Integration
This project uses Azure Pipelines for Continuous Integration(CI). It automatically:

-Installs dependencies

-Lints code using ESLint

-Runs unit tests using Jest

Pipeline is defined in ```azure-pipelines.yml`` and runs on every Pull Request.
