import { NextFunction, Request, Response } from 'express'
import multer, { MulterError } from 'multer'
import sanitize from 'sanitize-filename'
import { core } from '../index.js'

interface IUploadOptions {
  allowedExtensions: string[]
  maxFileSizeMB: number
  fieldName: string
  destinationPath: string
}

const configureStorage = (destinationPath: string) => {
  return multer.diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, destinationPath)
    },
    filename: (_req, file, cb) => {
      const safeOriginalName = sanitize(file.originalname)
      const uniqueName = `${Date.now()}-${safeOriginalName}`
      cb(null, uniqueName)
    }
  })
}

const fileFilter = (allowedExtensions: string[]) => {
  return (
    _req: Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback
  ) => {
    const fileExtension = file.mimetype.split('/')[1].toLowerCase()

    if (!allowedExtensions.includes(fileExtension)) {
      return cb(
        new core.error.client.UnsupportedMediaType(
          `Only ${allowedExtensions.join(', ')} files are allowed!`
        )
      )
    }

    cb(null, true)
  }
}

const handleMulterError = (
  err: unknown,
  next: NextFunction,
  maxFileSizeMB: number
) => {
  if (err instanceof MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return next(
        new core.error.client.PayloadTooLarge(
          `File size exceeds the limit of ${maxFileSizeMB} MB.`
        )
      )
    }
  }
  next(err)
}

export const fileUpload = ({
  allowedExtensions,
  maxFileSizeMB,
  fieldName,
  destinationPath
}: IUploadOptions) => {
  const maxFileSize = maxFileSizeMB * 1024 * 1024

  const storage = configureStorage(destinationPath)
  const multerMiddleware = multer({
    storage,
    fileFilter: fileFilter(allowedExtensions),
    limits: { fileSize: maxFileSize }
  })

  return (req: Request, res: Response, next: NextFunction) => {
    multerMiddleware.single(fieldName)(req, res, (err) => {
      if (err) {
        return handleMulterError(err, next, maxFileSizeMB)
      }
      next()
    })
  }
}
