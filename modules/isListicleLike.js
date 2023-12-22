const vFlagIsSupported = (() => {
    try {
        new RegExp('', 'v')
        return true
    } catch {
        return false
    }
})()

// Gracefully degrade to the "naive" emoji character property if v flag (string properties) not supported.
// See https://stackoverflow.com/questions/76289317/why-do-unicode-emoji-property-escapes-match-numbers for
// reasoning why RGI_Emoji is preferable where available.
const emoji = vFlagIsSupported ? String.raw`\p{RGI_Emoji}` : String.raw`\p{Emoji}`

const re = new RegExp(
    String.raw`
        (?:                               # location within the title:
            ^                             # - at the start
            | (?:                         # - any of the following:
                : | - | —                 #     - after certain punctuation (start of subtitle)
                | ${emoji}                #     - after emoji
                | the | top | mastering   #     - words often found before the number in listicles
                | these | my | best
            ) [^\p{L}\p{M}\p{N}]          #   ...followed by a non-word character (punctuation etc)
        )
        [^\p{L}\p{M}\p{N}]*               #   ...followed by 0 or more non-word characters
        (?:
            [2-9]                         # single digit 2..9
            | \d{2,3}                     # 2 or 3 digits (4 digits is most likely a year e.g. "2023")
            | two | three | four          # number words 2..10
            | five | six | seven
            | eight | nine | ten
        )
        [\p{Zs}+]                         # followed by whitespace or certain punctuation
    `
        // strip whitespace and comments from preceding regex source
        .replace(/\s+|#.*$/gm, ''),
    // case insensitive and unicode/"unicode-sets" aware
    `i${vFlagIsSupported ? 'v' : 'u'}`,
)

export const isListicleLike = re.test.bind(re)
