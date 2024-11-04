module.exports = class maths {
    add(req: { data: { a: any; b: any } }) { return req.data.a + req.data.b };
    subtract(req: { data: { a: number; b: number } }) { return req.data.a - req.data.b };
    multiply(req: { data: { a: number; b: number } }) { return req.data.a * req.data.b };
    divide(req: { data: { a: number; b: number } }) { return req.data.a / req.data.b };
}