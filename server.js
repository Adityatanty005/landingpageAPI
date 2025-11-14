import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ------------------- UNIVERSITY DATA -------------------

const universities = {
  lpu: {
    name: "Lovely Professional University",
    established: 2005,
    location: "Punjab, India",

    overview: {
      description:
        "Lovely Professional University is one of India's leading private universities with strong engineering and management programs.",
      accreditation: ["UGC", "AICTE"],
      rank: { nirf: 38, national: 12 },
    },

    courses: [
      {
        name: "Computer Science & Engineering",
        degree: "B.Tech",
        duration: "4 Years",
      },
      {
        name: "Electronics & Communication Engineering",
        degree: "B.Tech",
        duration: "4 Years",
      },
      {
        name: "Mechanical Engineering",
        degree: "B.Tech",
        duration: "4 Years",
      },
      {
        name: "Production Engineering",
        degree: "B.Tech",
        duration: "4 Years",
      },
    ],

    fees: {
      "Computer Science & Engineering": "₹1,20,000 - ₹2,00,000 / year",
      "Electronics & Communication Engineering": "₹1,10,000 - ₹1,80,000 / year",
      "Mechanical Engineering": "₹1,00,000 - ₹1,70,000 / year",
      "Production Engineering": "₹95,000 - ₹1,60,000 / year",
    },
  },

  giet: {
    name: "GIET University",
    established: 1997,
    location: "Odisha, India",

    overview: {
      description:
        "GIET University is a premier institution focused on engineering, innovation, and global education.",
      accreditation: ["UGC", "AICTE"],
      rank: { nirf: 88, national: 25 },
    },

    courses: [
      {
        name: "Computer Science & Engineering",
        degree: "B.Tech",
        duration: "4 Years",
      },
      { name: "Mechanical Engineering", degree: "B.Tech", duration: "4 Years" },
      { name: "Civil Engineering", degree: "B.Tech", duration: "4 Years" },
      { name: "Electrical Engineering", degree: "B.Tech", duration: "4 Years" },
    ],

    fees: {
      "Computer Science & Engineering": "₹1,40,000 - ₹2,20,000 / year",
      "Mechanical Engineering": "₹1,10,000 - ₹1,80,000 / year",
      "Civil Engineering": "₹95,000 - ₹1,60,000 / year",
      "Electrical Engineering": "₹1,00,000 - ₹1,70,000 / year",
    },
  },
};

// get list of all universities
app.get("/universities", (req, res) => {
  res.json(Object.keys(universities));
});

// get details of a specific university
app.get("/universities/:id", (req, res) => {
  const uni = universities[req.params.id.toLowerCase()];
  uni ? res.json(uni) : res.status(404).json({ error: "University not found" });
});

// simple test API
app.get("/simple", (req, res) => {
  res.json({ message: "Simple JSON API working!" });
});

// nested JSON API
app.get("/nested", (req, res) => {
  res.json({
    success: true,
    universities,
    timestamp: new Date(),
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
