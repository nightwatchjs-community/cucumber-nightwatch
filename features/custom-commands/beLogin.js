module.exports = class BeLogin {
  async command({ name, password }) {
    let returnValue
    try {
      const userSessions = JSON.parse(process.env.USERSESSION || '{}')
      await this.api.beRelativeURL('/')
      if (!userSessions[name]) {
        // Login
        await this.api
          .setValue('input[name="name"]', name)
          .setValue('input[name="pass"]', password)
          .click('#edit-submit')
          .assert.titleContains('Dashboard')
        // Get session and save it
        await this.api.getCookies(function (result) {
          if (result.value.length > 0) {
            const session = result.value.find((cookie) =>
              cookie.name.startsWith('SSESS')
            )
            userSessions[name] = session
            process.env.USERSESSION = JSON.stringify(userSessions)
          } else {
            console.warn('No session found after login, please investigate')
          }
        })
      } else {
        // Restore session and make sure we are logged in
        await this.api
          .setCookie({
            name: userSessions[name].name,
            value: userSessions[name].value,
          })
          .beRelativeURL('/admin/workbench')
        this.api.assert.titleContains('Dashboard')
      }
    } catch (err) {
      console.error('Backend login failed', err)
      returnValue = {
        status: -1,
        error: err.message,
      }
    }

    return returnValue
  }
}
