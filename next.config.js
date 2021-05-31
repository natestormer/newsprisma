require("dotenv").config()

const {
  DATABASE_URL,
  AUTH0_CLIENTID,
  AUTH0_DOMAIN,
  AUTH0_CLIENT_SECRET,
  AUTH0_SCOPE,
  AUTH0_COOKIE,
  BACKEND_ADDRESS,
} = process.env

module.exports = {
  future: {
    // Prisma client fails to compile using webpack 5
    // See: https://github.com/prisma/prisma/issues/6328
    webpack5: false,
  },
  publicRuntimeConfig: {
    BACKEND_URL: `${BACKEND_ADDRESS}/api/graphql`,
  },
  serverRuntimeConfig: {
    // changed to support v1 migration
    // info: https://www.udemy.com/course/end-to-end-react-with-prisma-2/learn/lecture/24431364#questions/14507714
    // v1 migration guide: https://github.com/auth0/nextjs-auth0/blob/main/V1_MIGRATION_GUIDE.md
    auth: {
      baseURL: BACKEND_ADDRESS,
      issuerBaseURL: `https://${AUTH0_DOMAIN}`,
      clientID: AUTH0_CLIENTID,
      clientSecret: AUTH0_CLIENT_SECRET,
      secret: AUTH0_COOKIE,
      clockTolerance: 60,
      httpTimeout: 5000,
      authorizationParams: {
        scope: AUTH0_SCOPE,
        audience: "MY_AUDIENCE",
      },
      routes: {
        callback: `/api/callback`,
        postLogoutRedirect: `${BACKEND_ADDRESS}/`,
      },
      session: {
        rollingDuration: 60 * 60 * 8,
        absoluteDuration: 60 * 60 * 8 * 7,
      },
    },
  },
}
