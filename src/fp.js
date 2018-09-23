export const curry = f =>
    function currify(...args) {
        return args.length >= f.length
            ? f.apply(this, args)
            : currify.bind(null, ...args)
    }

export const pipe = (...fs) => x => fs.reduce((y, f) => f(y), x)
