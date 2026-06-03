export default async function handler(req, res) {

  const { q } = req.query;

  const API_KEY = process.env.GNEWS_API_KEY;

  if (!q) {
    return res.status(400).json({
      error: "検索キーワードが必要です"
    });
  }

  const url =
    `https://gnews.io/api/v4/search?q=${encodeURIComponent(q)}&lang=ja&country=jp&max=9&apikey=${API_KEY}`;

  try {

    const response = await fetch(url);
    const data = await response.json();

    return res.status(200).json(data);

  } catch (error) {

    return res.status(500).json({
      error: "ニュース取得失敗"
    });

  }

}