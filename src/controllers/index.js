
const onHandledError = require('../utils/onHandledErro');

module.exports = {
  uploadPhoto: onHandledError(async (req, res) => {
    
      try {
       
        console.log(req.file.path);
        
      } catch ([error]) {
        console.log(JSON.stringify([...error]), 'que suene bien')
        return res.stastus(409).send(error)
      }
    }
  )
}