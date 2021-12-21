export default function handler(req: any, res: any) {
  const userMethod = req.method;
  res.status(200).json({ name: 'John Doe', method: userMethod });
}
