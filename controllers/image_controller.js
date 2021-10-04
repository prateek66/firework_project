import Images from '../models/image_model.js';


const uploadImage= async(req,res)=> {
    try {
        console.log(req);
      const files = req.files.map((x) => x.location);
      console.log(files);
      const objects = {...req.body,upload: files};
  
      const add = await Images.insertMany(objects);
      res.status(201).send(add);
      
    } catch (err) {
      console.log(err);
      res.status(400).send(`something went wrong!! ${err}`)
      
    }
  }

  export {uploadImage};