import { type IResponseJson } from '../interfaces/index.js'

/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns information about the API.
 *     responses:
 *       200:
 *         description: Information about the API.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 okay:
 *                   type: boolean
 *                   description: Indicates if the request was successful.
 *                 result:
 *                   type: object
 *                   properties:
 *                     version:
 *                       type: string
 *                       description: The version of the API.
 *                     datetime:
 *                       type: string
 *                       format: date-time
 *                       description: The current date and time in ISO format.
 *                     documentation:
 *                       type: string
 *                       description: Link to the API documentation.
 *                 messages:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         description: Title of the message.
 *                       msg:
 *                         type: string
 *                         description: The message content.
 */
export const responseApiHello: IResponseJson = {
  okay: true,
  result: {
    version: process.env.VERSION,
    datetime: new Date().toISOString(),
    documentation: '/docs'
  },
  notification: {
    text: 'Welcome to our API. Hope you have a great time here. 🎉',
    title: 'Hello!'
  }
}
