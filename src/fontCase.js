export default function fontCase(string) {
    const parsedValue = string;

    return {
        value() {
            return parsedValue;
        },
    };
}
