module.exports = {
  command: async function (pathname) {
    // Make sure env var is set.
    if (!process.env.BE_BASE_URL) {
      // TODO: how to better handle this in Cucumber?
      const errMsg = 'SDP Nightwatch: missing env vars `BE_BASE_URL`.'
      console.error(errMsg)
      throw new Error(errMsg)
    }
    // const beUrl = normalizeUrl(process.env.BE_BASE_URL);
    const beUrl = process.env.BE_BASE_URL
    await this.url(`${beUrl}${pathname}`)
  },
}
