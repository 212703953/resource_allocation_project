var db=require("../db")

var Production_line = {
    getproduction_lines : function(callback) {
        return db.query('SELECT * FROM production_line', callback
        )
    },
    createproduction_line: function(production_line, callback){
        return db.query(
            "INSERT INTO production_line (production_line_id, name) VALUES (?,?)"
            //INSERT INTO factory_to_prod (factory_id, production_line_id) SELECT factory_id FROM factory WHERE factory.name=?"
            ,[production_line.id, production_line.name], 
            callback,
        )
    },
    updateprodcution_line: function(production_line,callback){
        return db.query(
            "UPDATE production_line  SET  name=? WHERE production_line_id=?", [production_line.name, production_line.id], callback
        )
    },
    deleteproduction_line: function(id,callback){
        return db.query(
        "DELETE FROM production_line WHERE production_line_id=?", [id],callback
        )
    },
};


module.exports = Production_line;