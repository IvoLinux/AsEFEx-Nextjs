import db from 'utils/db';

export default async (req, res) => {
    try {
        const { id: ano } = req.query;
        const { result } = await db.collection(ano).doc(req.body.NrCP).set(req.body)
    } catch (e) {
        res.status(400).end();
    }
}