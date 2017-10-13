export * from './camelCase';
export * from './snakeCase';
export * from './kebabCase';
export * from './capitalize';

export default function fontCase(string) {
    const parsedValue = string;

    return {
        value() {
            return parsedValue;
        },
    };
}
