type UserId = string & { __brand: "UserId" };
type ArticleId = string & { __brand: "ArticleId" };

const userId = "id01";

// function getArticle(articleId: ArticleId) {}
function getArticle(articleId: UserId) {}

getArticle(userId);


//
https://github.com/LeDDGroup/typescript-conditional-types
https://github.com/LeDDGroup/ts-types-utils
https://github.com/sindresorhus/type-fest
https://www.typescriptlang.org/docs/handbook/utility-types.html
https://dev.to/joanllenas/decoding-json-with-typescript-1jjc
https://github.com/joanllenas/ts.data.json
https://github.com/TCMiranda/joi-extract-type/blob/master/index.ts