# NearDev Application

A full-stack web application for managing NEAR Protocol developers. The system allows users to register developers by their GitHub username, automatically fetching their profile information from the GitHub API, and storing their technical skills.

## Architecture

The application follows a client-server architecture with a React frontend and a Spring Boot REST API backend.

### Backend
- **Framework**: Spring Boot 4.0.2
- **Language**: Java 21
- **Database**: H2 (in-memory database)
- **API**: RESTful web services
- **External Integration**: GitHub API

### Frontend
- **Framework**: React 19.2.0
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Language**: JavaScript (JSX)

## Features

- Register developers by GitHub username
- Automatic profile data retrieval from GitHub API (name, bio, avatar URL)
- Store and manage developer technologies/skills
- List all registered developers
- Delete developers from the registry
- Real-time error handling and user feedback


## Prerequisites

- Java 21 or higher
- Maven 3.6+ (or use the included Maven wrapper)
- Node.js 18+ and npm
- Internet connection (for GitHub API integration)

## Installation and Setup

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Build the project using Maven:
```bash
./mvnw clean install
```

3. Run the Spring Boot application:
```bash
./mvnw spring-boot:run
```

The backend server will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend application will be available at `http://localhost:5173` (or the port assigned by Vite)

## API Endpoints

The backend exposes the following REST endpoints under the base path `/dev`:

### Register Developer
- **POST** `/dev/save`
- **Request Body**:
```json
{
  "login": "github-username",
  "techs": ["React", "Java", "Spring Boot"]
}
```
- **Response**: 201 Created (on success) or 500 Internal Server Error

### List All Developers
- **GET** `/dev/list`
- **Response**: 200 OK with array of developers, or 404 Not Found if no developers exist
- **Response Body**:
```json
[
  {
    "id": 1,
    "name": "Developer Name",
    "login": "github-username",
    "avatarUrl": "https://avatars.githubusercontent.com/...",
    "bio": "Developer bio",
    "techs": ["React", "Java"]
  }
]
```

### Delete Developer
- **DELETE** `/dev/delete/{id}`
- **Response**: 204 No Content (on success), 404 Not Found, or 500 Internal Server Error

## How It Works

1. **Developer Registration**:
   - User enters a GitHub username and technologies in the frontend form
   - Frontend sends a POST request to `/dev/save` with the login and techs
   - Backend fetches the developer's profile from GitHub API using the provided username
   - Backend extracts name, bio, and avatar URL from the GitHub response
   - Developer data is persisted in the H2 database
   - The newly created developer is returned to the frontend

2. **Developer Listing**:
   - On application load, the frontend automatically fetches all registered developers
   - Backend queries the database and returns all developers
   - If no developers exist, a 404 error is returned with an appropriate message

3. **Developer Deletion**:
   - User can delete a developer by ID
   - Backend validates the developer exists before deletion
   - Returns appropriate HTTP status codes based on the operation result

## Database

The application uses H2 in-memory database, which means:
- Data is stored in memory and persists only while the application is running
- Database is automatically created on application startup
- Access the H2 console at `http://localhost:8080/h2-console` (if enabled)
- Connection details are configured in `application.properties`

## Development

### Backend Development
- The backend uses Spring Boot DevTools for hot reloading
- Changes to Java files will trigger automatic application restart
- H2 console can be accessed for database inspection during development

### Frontend Development
- Vite provides fast hot module replacement (HMR)
- Changes to React components are reflected immediately in the browser
- ESLint is configured for code quality checks

### Building for Production

**Backend**:
```bash
cd backend
./mvnw clean package
java -jar target/neardev-0.0.1-SNAPSHOT.jar
```

**Frontend**:
```bash
cd frontend
npm run build
```
The production build will be in the `dist/` directory.

## Error Handling

The application implements comprehensive error handling:
- **DevNotFoundException**: Thrown when a developer is not found in the database
- Frontend displays error messages to users when API calls fail
- Backend returns appropriate HTTP status codes and error messages

## CORS Configuration

The backend is configured with CORS to allow requests from the frontend:
- Maximum age: 3600 seconds
- All origins are allowed (configure for production use)

## License

This project is open source and available for use and modification.
