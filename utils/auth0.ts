import { initAuth0 } from "@auth0/nextjs-auth0"

import getConfig from "next/config"
const { serverRuntimeConfig } = getConfig()
const { auth } = serverRuntimeConfig

export default initAuth0({
  // changed to support v1 migration
  // info: https://www.udemy.com/course/end-to-end-react-with-prisma-2/learn/lecture/24431364#questions/14507714
  // v1 migration guide: https://github.com/auth0/nextjs-auth0/blob/main/V1_MIGRATION_GUIDE.md
  ...auth,
})
