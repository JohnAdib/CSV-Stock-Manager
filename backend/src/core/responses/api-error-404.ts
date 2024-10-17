import { type IResponseJson } from '../interfaces/index.js'

/**
 * @swagger
 * /404:
 *   get:
 *     summary: Endpoint not found
 *     description: Handle requests to non-existent endpoints with a 404 error.
 *     parameters:
 *       - in: path
 *         name: 404
 *         schema:
 *           type: string
 *         required: true
 *         description: Any route that does not match an existing route will trigger this response.
 *     responses:
 *       '404':
 *         description: Endpoint not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 okay:
 *                   type: boolean
 *                   example: false
 *                   description: Indicates if the request was successful.
 *                 result:
 *                   type: null
 *                   description: Always null for error responses.
 *                 messages:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       title:
 *                         type: string
 *                         example: Error 404 (⊙＿⊙')
 *                         description: Title of the error message.
 *                       msg:
 *                         type: string
 *                         example: 'The endpoint you are looking for does not exist! Are you lost? 🧭'
 *                         description: The error message content.
 */
export const responseApiError404: IResponseJson = {
  okay: false,
  result: null,
  notification: {
    text: 'The endpoint you are looking for does not exist! Are you lost? 🧭',
    title: "Error 404 (⊙＿⊙')"
  }
}
