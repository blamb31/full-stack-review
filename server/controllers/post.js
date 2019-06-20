module.exports = {
    read: async (req, res) => {
        try{
            const db = req.app.get('db')
            const posts = await db.getPosts()
            res.status(200).send(posts)
        } catch(error) {
            console.log(`Error fetching posts: ${error}`)
            res.status(500).send(error)
        }
    },
    getPost: async(req, res) => {
        try{
            const db = req.app.get('db')
            const {id} = req.params
            const post = await db.getPost(id)
            res.status(200).send(post[0])
        } catch(error) {
            console.log(`Error fetching posts: ${error}`)
            res.status(500).send(error)
        }
    },    
    create: async (req, res) => {
        try{
            const db = req.app.get('db')
            const {title, content} = req.body

            //make sure the user is logged in first

            if(!req.session.user) {
                return res.status(401).send(`User is not logged in`)
            }

            const {id: user_id} = req.session.user

            let newPost = {
                user_id,
                title,
                content
            }

            const posts = await db.createPost(newPost)
            res.status(200).send(posts)
        } catch(error) {
            console.log(`Error creating post` + error)
            res.status(500).send(error)
        }
    },
}