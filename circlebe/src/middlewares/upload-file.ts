import multer from 'multer';

const storage = multer.memoryStorage()
const storageDisk = multer.memoryStorage()

export const upload = multer({ storage: storage });
export const uploadDisk = multer({ storage: storageDisk });