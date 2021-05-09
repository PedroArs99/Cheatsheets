const map = new Map<number, string>();
map.set(1, 'foo');

function getPromise<T extends Map<number,string>>(value: T): Promise<T> {
    return new Promise((res,rej) => setTimeout(()=> res(value), 1000));
}

