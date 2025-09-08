# NextGen Support API

Backend API for handling service requests and support tickets with a MySQL database.

## ✨ Features

- RESTful API endpoints for service requests
- Secure authentication & authorization (JWT)
- Input validation and sanitization
- Rate limiting and security headers
- Request logging and error handling
- Database migrations and seeding
- Environment-based configuration
- API documentation (Swagger/OpenAPI)

## 🚀 Prerequisites

- Node.js (v18 or higher)
- MySQL (v8.0 or higher)
- npm (v9 or higher) or yarn

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nextgen-support-api.git
   cd nextgen-support-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your database credentials and other settings.

## 🗄️ Database Setup

1. Ensure MySQL is running
2. Create a new database (or use an existing one):
   ```sql
   CREATE DATABASE nextgen_support CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

3. Initialize the database with schema:
   ```bash
   npm run db:init
   ```

## 🚦 Running the Application

### Development

```bash
# Start the development server with hot-reload
npm run dev
```

The server will be available at `http://localhost:5000` by default.

### Production

```bash
# Set environment to production
export NODE_ENV=production

# Install production dependencies
npm ci --only=production

# Start the server
npm start
```

## 📚 API Documentation

API documentation is available at `/api-docs` when running in development mode.

### Available Endpoints

#### Service Requests

- `POST /api/service-requests` - Submit a new service request
- `GET /api/service-requests` - Get all service requests (admin)
- `GET /api/service-requests/:id` - Get a specific service request (admin)
- `PUT /api/service-requests/:id/status` - Update request status (admin)

#### Health Check
- `GET /health` - Check API status

## 🔧 Database Management

### Initialize Database
```bash
npm run db:init
```

### Run Migrations
```bash
npm run db:migrate
```

### Seed Data
```bash
npm run db:seed
```

## 🔒 Security

- Input validation and sanitization
- Rate limiting
- Security headers (helmet)
- SQL injection protection
- XSS protection
- CORS enabled with allowed origins

## 📦 Environment Variables

See `.env.example` for all available environment variables.

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 🐳 Docker Support

```bash
# Build the Docker image
docker build -t nextgen-support-api .

# Run the container
docker run -p 5000:5000 --env-file .env nextgen-support-api
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@nextgen.example.com or open an issue in the repository.
| message      | TEXT         | Detailed message                |
| status       | ENUM         | 'new', 'in_progress', 'resolved', 'closed' |
| created_at   | TIMESTAMP    | When the request was created    |
| updated_at   | TIMESTAMP    | When the request was last updated |

## Development

- Use `npm run dev` for development with auto-reload
- The server will automatically create the required tables on startup

## Production

1. Set `NODE_ENV=production` in your `.env` file
2. Install production dependencies:
   ```bash
   npm install --production
   ```
3. Start the server:
   ```bash
   npm start
   ```

## Environment Variables

See `.env.example` for all available environment variables.
