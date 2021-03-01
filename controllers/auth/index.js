const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

// Middleware to check JSON web token in request authorisation headers & compare with Auth0 JSON Keyset
exports.verifyJWT = jwt({
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: "https://michaelkim.eu.auth0.com/.well-known/jwks.json",
	}),
	audience: "https://michaelkim.eu.auth0.com/api/v2/",
	issuer: "https://michaelkim.eu.auth0.com/",
	algorithms: ["RS256"],
});
