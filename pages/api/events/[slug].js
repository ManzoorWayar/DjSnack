const { events } = require("./data.json");

export default (req, res) => {
  const event = events.filter((evt) => evt.slug === req.query.slug);

  if (req.method === "GET") {
    res.status(200).json(event);
  } else {
    req.setHeader("Allow", ["GET"]);
    res.status(200).json({
      message: `Method ${req.method} is Not Allowed!`,
    });
  }
};
