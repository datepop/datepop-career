import { NotionAPI } from 'notion-client'

async function handler(req, res) {
  if (req.method === 'GET') {
    const { pagelink } = req.query;
    const api = new NotionAPI()
    const page = await api.getPage(pagelink);
    res.status(200).json(page);
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default handler;
