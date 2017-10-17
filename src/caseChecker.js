export const isKebabCase = text =>
    /^[a-z]+(-[a-z]+)+$/g.test(text);

export const isSnakeCase = text =>
    /^[a-z]+(_[a-z]+)+$/g.test(text);
