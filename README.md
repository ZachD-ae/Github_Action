# Github_Action

## CI/CD Pipeline for Testing and Deployment

### Description

As applications scale and evolve, developers must ensure quality checks are met before merging code into critical branches. **Continuous Integration (CI)** and **Continuous Deployment (CD)** are essential practices that ensure consistency, quality, and automated deployment of the latest code after passing all tests.

This project demonstrates the creation of a CI/CD pipeline using **GitHub Actions** to:
- **Run component tests with Cypress** when a Pull Request (PR) is made to the `develop` branch.
- **Deploy the application** automatically to **Render** when code is merged from `develop` to `main`.

This pipeline helps automate the process of verifying that new code passes all tests before it is merged and deployed to production.

## Table of Contents

- [Project Description](#description)
- [Technologies Used](#technologies-used)
- [CI/CD Pipeline](#cicd-pipeline)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Features](#features)
- [Running Tests Locally](#running-tests-locally)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Testing**: Cypress
- **CI/CD**: GitHub Actions
- **Deployment**: Render
- **Version Control**: Git, GitHub

## CI/CD Pipeline

### Overview
This project utilizes GitHub Actions for **Continuous Integration (CI)** and **Continuous Deployment (CD)**. The workflows are set up to automate testing and deployment processes:

### Testing on Pull Requests (PR to `develop`):
- **Trigger**: When a pull request is created targeting the `develop` branch.
- **Actions**:
  - Install project dependencies.
  - Run **Cypress** component tests to ensure no functionality is broken by the changes in the PR.

### Deployment to Render:
- **Trigger**: When changes are pushed to the `main` branch (usually after merging `develop` into `main`).
- **Actions**:
  - Install dependencies.
  - Build the application.
  - Deploy the application to **Render** using the **Render CLI**.

### GitHub Actions Workflow Files:
1. **test.yml**: This workflow runs Cypress tests when a PR is made to `develop`.
2. **deploy.yml**: This workflow automatically deploys the application to Render when code is merged into `main`.

### Workflow Highlights:
- **Test Workflow**: Automatically triggered on pull requests to `develop`, ensuring that all component tests pass before merging.
- **Deploy Workflow**: Automatically triggers on merges to `main`, deploying the application to Render.

## Setup and Installation

To set up the project locally for development, follow these steps:

### Prerequisites
Ensure the following tools are installed:
- **Node.js** (version >= 16)
- **npm** or **yarn**
- **Git**

### Clone the Repository

```bash
git clone https://github.com/your-username/project-name.git
