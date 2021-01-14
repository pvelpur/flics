const User = require('../models/user')
const fetch = require('node-fetch')

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: "User not found!"
            })
        }
        req.profile = user //adds profile object to req with user info
        next()
    })
}


exports.getFavoritesByUser = async(req, res) => {
    const user = await User.findById(req.userID)
    return res.json(user.favorites)
}


exports.appendToList = async(req, res) => {
    const user = await User.findById(req.userID)
    var topMatch
    await fetch(`https://api.themoviedb.org/3/search/${req.body.mediaType}?api_key=${process.env.API_KEY}&language=en-US&query=${req.body.title}&page=1`).then(res => res.json()).then(res => {
        topMatch = res.results[0]
    })
    .catch(err => {
        res.status(400).json({error: err.message})
    })
    console.log(topMatch)
    user.favorites.push({title: topMatch.name, description: topMatch.overview, poster_path: topMatch.poster_path, release_date: topMatch.release_date, genreIDs: topMatch.genre_ids,  language: topMatch.original_language, vote_average: topMatch.vote_average})
    await user.save()
    res.status(201).json({message: "Successfully Appended To myList, please continue"})

}

exports.updateUser = async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        if (!user) {
            return res.status(404).send()
        }
        res.json(user)
    } catch(err) {
        res.status(404).send(err)
    }
}
