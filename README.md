# Roman Numeral Converter

A full-stack application that converts numbers to Roman numerals.

## Features
- Convert numbers from 1-3999 to Roman numerals
- RESTful API endpoint
- React-based UI with Adobe React Spectrum
- Dark/Light mode support
- URL parameter support

## Technologies
- Frontend: React, Adobe React Spectrum
- Backend: Python, Flask
- API: REST
- Containerization: Docker
- Version Control: Git

## Prerequisites
- Docker and Docker Compose
- Git
- Node.js (for local development)
- Python 3.9+ (for local development)

## Installation

### Clone the repository
```bash
git clone https://github.com/yourusername/roman-numeral-converter.git
cd roman-numeral-converter

### To us this setup
-with Docker
   docker-compose up --build

-without Docker
       
# Terminal 1 - Backend
cd backend
pip install -r requirements.txt
python app.py

# Terminal 2 - Frontend
cd frontend
npm install
npm start


the application run in http://localhost:3000/?query=98
    



NOTE: don't forget to install the node modules in frontend
