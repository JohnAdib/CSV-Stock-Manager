import { type IResponseJson } from '../interfaces/index.js'

/**
 * @swagger
 * /v1:
 *   get:
 *     summary: Get API v1 status
 *     description: Returns a success message indicating that API v1 is working.
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 okay:
 *                   type: boolean
 *                   example: true
 *                   description: Indicates if the request was successful.
 *                 result:
 *                   type: null
 *                   description: Always null for successful responses.
 *                 messages:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       msg:
 *                         type: string
 *                         example: 'Wow! You found the API v1! Am I working? 🤔'
 *                         description: The success message.
 */
export const responseApiV1: IResponseJson = {
  okay: true,
  result: null,
  notification: {
    text: 'Wow! You found the API v1! Am I working? 🤔'
  }
}
