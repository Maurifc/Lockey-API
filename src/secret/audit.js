
// Save a log with this format [DATETIME] - USER - ACTION - SECRET_PATH - RESPONSE
module.exports = (reqMethod, reqUrl, send) => {
    const currentDateTime = Date().split('GMT')[0].trim()
    const user = 'USER'
    const action = reqMethod + ' ' + reqUrl
    const responseStatusCode = send.statusCode

    console.log(`[${currentDateTime}] ${user} - ${action} - ${responseStatusCode}`)
}