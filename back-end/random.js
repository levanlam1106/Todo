export function randomID() {
    const chars =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split(
            ""
        );
    let str = "";
    for (let i = 0; i < 13; i++) {
        str += chars[Math.floor(Math.random() * 12)];
    }
    return str;
}