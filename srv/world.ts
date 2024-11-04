module.exports = class say {
    hello(req: { data: { to: String } }) { 
        return `Hello ${req.data.to}!` 
    };
}