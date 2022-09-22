type UserId = string & { __brand: "UserId" };
type ArticleId = string & { __brand: "ArticleId" };

const userId = "id01";

// function getArticle(articleId: ArticleId) {}
function getArticle(articleId: UserId) {}

getArticle(userId);
