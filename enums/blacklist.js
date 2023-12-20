export const BLACKLIST = [
    "lesson",
    "lessons",
    "image",
    "cool",
    "amazing",
    "incredible",
    "free",
    "best",
    "awesome",
    "must",
    "saas",
    "repository",
    "repositories",
    "top",
    "senior",
    "junior",
    "project",
    "projects",
    "achievable",
    "handy",
    "useful",
    "tip",
    "tips",
    "resource",
    "resources",
    "tool",
    "tools",
    "essential",
    "essentials",
    "github",
    "payment",
    "payments",
    "database",
    "databases",
    "open",
    "first",
    "last",
    "programming",
    "mistakes",
];

export const XKEYWORD_PATTERNS = BLACKLIST.map(bl => new RegExp(`[0-9]{1,3}[ ]*${bl}`, 'g'));
export const KEYWORDX_PATTERNS = BLACKLIST.map(bl => new RegExp(`${bl}[ ]*[0-9]{1,3}`, 'g'));
export const ANYWORD_PATTERN = new RegExp('([a-zA-Z]*[0-9]{1,3})|([0-9]{1,3}[ ]*[a-zA-Z]*)', 'g');
export const EMOJI_PATTERN = new RegExp('(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])', 'g');
