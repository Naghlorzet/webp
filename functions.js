const fs = require('fs')


exports.getGroupAdmins = function (participants) {
    let admins = [];
    for (let i of participants) {
        i.admin !== null ? admins.push(i.id) : "";
    }
    return admins;
};

exports.updateDatabase = (jenis, after) => {
	
    //DATABASE
    const server = JSON.parse(fs.readFileSync('./server.json'))
    const grups = JSON.parse(fs.readFileSync('./grups.json'))
    
    
        if (jenis == "url") {
      server[0].url = after
    fs.writeFileSync('./server.json', JSON.stringify(server))
    return "success"
    } else if (jenis == "username") {
      server[0].username = after
    fs.writeFileSync('./server.json', JSON.stringify(server))
    return "success"
      } else if (jenis == "password") {
      server[0].password = after
    fs.writeFileSync('./server.json', JSON.stringify(server))
    return "success"
      } else if (jenis == "ip") {
      server[0].ip = after
    fs.writeFileSync('./server.json', JSON.stringify(server))
    return "success"
      } else if (jenis == "domain") {
      server[0].domain = after
    fs.writeFileSync('./server.json', JSON.stringify(server))
    return "success"
      } else if (jenis == "grup") {
      grups.push(after)
    fs.writeFileSync('./grups.json', JSON.stringify(grups))
    return "success"
    
    
    } else {
      return "failed"
    }
    
      
      
    } 


