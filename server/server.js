const express = require("express");
const cors = require("cors");
const port = 8000;
const axios = require("axios");
const db_name = "SportApiDB"
const app = express();

app.use(cors());
app.use(express.json());

require("./config/mongoose")(db_name);
require("./routes/SportApi.routes")(app);

app.get("/sports", (req,res) =>{
    axios.get("https://www.scorebat.com/video-api/v1/")
        .then(sports => {res.json(sports.data);})
        .catch(err => res.json(err));
})

app.listen(port, ()=> console.log(`Listening on port ${port}`))