import { createConnection } from '@/utils/mysql'
import type { NextApiRequest, NextApiResponse } from 'next'
import { passwordCompareAndChangeController } from './../../controllers/passwordcompareandchange'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const connection = await createConnection()

    if (req.method === 'PUT') {
        await passwordCompareAndChangeController(req, res, connection)
    } else {
        res.status(404).json({ error: ' 해당 메서드는 지원하지 않습니다' })
    }
}
