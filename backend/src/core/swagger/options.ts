// TODO: pass the url as parameter
export const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Official API documentation for the project'
    },
    servers: [
      {
        url: 'http://localhost:7011',
        description: 'Development server'
      }
    ]
  },
  apis: ['../**/*.ts', '!**/node_modules/**', '!**/build/**', '!**/dist/**']
}
