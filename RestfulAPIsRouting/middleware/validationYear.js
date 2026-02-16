module.exports = (req, res, next) => { 
    const { year } = req.body; 
    if (year && (!Number.isInteger(year) || year < 1000 || year > new Date().getFullYear())) { 
        return res.status(400).json({ error: 'Invalid year provided' }); 
    } 
    next(); 
};