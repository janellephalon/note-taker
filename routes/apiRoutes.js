// Dependencies 
const fs = require('fs');
var db = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function(app) {

    // GET Route  
    app.get("/api/notes", function (req, res) {
        res.json(db);
    });

    // POST Route 
    app.post("/api/notes", function (req, res) {
        const newNote = req.body;
        let uniqueID = (db.length).toString();
        console.log(uniqueID);
        newNote.id = uniqueID;
        db.push(newNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(db), function(err) {
            if(err) throw(err);
        })
        res.json(db);
    });

    // DELETE Route 
    app.delete('/api/notes/:id', (req,res)=>{
        var id = req.params.id;
        db.splice(id - 1, 1);
        db.forEach((obj, i) => {
            obj.id = i + 1;
        });

        fs.writeFile("./db/db.json", JSON.stringify(db), function () {
            res.json(db);
        });
      });
};