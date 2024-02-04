const { postModel} = require('../model/Postmodel/post.model.js'); // Replace with your actual Post model file path
const { customErrorHandler } = require('../service/customErrorHandler.js');
const postController = {
    createpost : async(req,res,next)=>{
        const {description,image} = req.body;
        console.log(req.body,description,image);
        if(!description && !image){
            return next(customErrorHandler.missingRequiredFields("Missing required fields"));
        }
        
        try {
            const postData = new postModel({
                user_id : req.users._id,
                description,
            });
           await postData.save()
        } catch (error) {
            next(error);
        }

       
       return res.status(200).json({
            msg : "post has been created successfully",
            user : req.body || null
        })
    },
    deletepost : async(req,res,next)=>{
        try {
            await postModel.findByIdAndDelete({_id : req.params.id })
        } catch (error) {
            next(error);
        }

        res.json({
            msg : "Post deleted successfully",
        })
    },
    updatepost : (req,res,next)=>{
        res.json({
            msg : "Post deleted successfully",
            post_id : req.params.id
        })
    },
    getpost : async(req,res,next)=>{

        const post = await postModel.findOne({user_id :req.params.id})
        res.json({
            msg : `Single Post of ${req.params.id}`,
            post : post || "No Post Found"
        })
    },
    getposts : async(req,res,next)=>{
        const posts = await postModel.find()
        res.json({
            msg : "All Posts",
            post_id : posts || null
        })
    }
}

exports.postController = postController