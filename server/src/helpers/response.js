export default class HttpRespose {
    ok(body) {
        return {
            success: true,
            statusCode: 200,
            body
        }
    }

    serverError() {
        return {
            success: false,
            statusCode: 500,
            body: null
        }
    }

    notFound(body) {
        return {
            success: false,
            statusCode: 404,
            body
        }
    }
} 