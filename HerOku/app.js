const express = require("express");
const db = require("./db.json");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/users", (req, res) => {
  res.status(200).send(db);
});

app.get("/users/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.status(200).send(400, {
      message: "veri işlenemedi",
    });
  } else {
    const user = db.find((u) => (u.id = req.params.id));
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(400).send({
        message: "kullanıcı bulunamadı",
      });
    }
  }
});

app.post("/users", (req, res) => {
  const saveData = {
    full_name: req.body.full_name,
    country: req.body.country,
    created_at: new Date(),
    id: new Date().getTime(),
    email: req.body.email,
  };

  db.push(saveData);
  res.send(saveData);
});

app.patch("/users/:id", (req, res) => {

    if (isNaN(req.params.id)) {
        res.status(200).send(400, {
          message: "veri işlenemedi",
        });
      } else {
        const user = db.find((u) => (u.id = req.params.id));
        if (user) {
          Object.keys(req.body).forEach(key =>{
              user[key]=req.body[key]
          })
          res.status(200).send(user)
        } else {
          res.status(400).send({
            message: "kullanıcı bulunamadı",
          });
        }
      }
});

app.delete("/users/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.status(200).send(400, {
          message: "veri işlenemedi",
        });
      } 
      else 
      {
        const userIndex = db.findIndex((u) => (u.id = req.params.id));
        if (userIndex >-1) 
        {
        db.splice(userIndex,1);
        res.status(201).send({ message:"kullanıcı silindi" })
         } 
        else 
        {
          res.status(404).send({message: "kullanıcı bulunamadı",});
        }
      }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
