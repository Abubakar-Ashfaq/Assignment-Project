import jwt from 'jsonwebtoken';


async function auth(req, res, next) {
    const token = req.header('Authorization');
    console.log('Token:', token);

    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }

    try {
        // Ensure the JWTKEY is correctly obtained from environment variables or set it manually for testing
        const JWTKEY = process.env.JWT_SECRET || 'randomprivatekey'; // Replace 'your-secret-key' with your actual secret key
        const decoded = jwt.verify(token, JWTKEY);
        req.user = decoded;  
        next();
    }
    catch (ex) {
        console.log('Verification error:', ex.message);
        return res.status(400).send('Invalid token.');
    }
}

export default auth;


