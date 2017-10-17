export const isKebabCase = text =>
    /^[a-z]+(-[a-z]+)+$/g.test(text);
