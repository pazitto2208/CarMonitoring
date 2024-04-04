export default class HttpRespose {
    ok(body) {
        return {
            success: true,
            statusCode: 200,
            body
        }
    }

    serverError(body) {
        return {
            success: false,
            statusCode: 500,
            body
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