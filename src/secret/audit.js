
// Save a log with this format [DATETIME] - USER - ACTION - SECRET_PATH - RESPONSE
module.exports = (reqMethod, reqUrl, user, send) => {
    const currentDateTime = Date().split('GMT')[0].trim()
    const action = reqMethod + ' ' + reqUrl
    const responseStatusCode = send.statusCode

    console.log(`[${currentDateTime}] ${user} - ${action} - ${responseStatusCode}`)
}