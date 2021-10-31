

module.exports = {
  uploadPhoto: async(req, res) => {
    try {
      const { path } = req.files

      console.log(JSON.stringify(path), 'perro loco')

      return res.status(200).json({
        status: 'success',
        message: 'Photo uploaded successfully',
        data: {
          path
        }
      })

      
    } catch (error) {
      console.log(JSON.stringify(error))
      return res.stastus(409).send(error)
    }
  }
}