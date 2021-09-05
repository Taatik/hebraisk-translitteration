import { Text } from "../src/index";

describe.each`
  description                            | hebrew                         | transliteration
  ${"no special features"}               | ${"לֶ֬חֶם"}                    | ${"læchæm"}
  ${"gemination"}                        | ${"רַנֵּן"}                    | ${"ranæn"}
  ${"furtive patach, chet"}              | ${"מָשִׁיחַ"}                  | ${"mashiach"}
  ${"furtive patach, ayin"}              | ${"שָׁמֵ֑עַ"}                  | ${"shamæa"}
  ${"furtive patach, he"}                | ${"גָבֹ֗הַּ"}                  | ${"gavå-a"}
  ${"final chet w/ patach, NOT furtive"} | ${"מִתַּ֣חַת"}                 | ${"mitachat"}
  ${"final qamets-he"}                   | ${"מַלְכָּה"}                  | ${"malka"}
  ${"divine name"}                       | ${"יְהוָ֣ה"}                   | ${"Adånaj"}
  ${"3ms suffix"}                        | ${"תֹּורֹתָֽיו"}               | ${"tåråtav"}
  ${"multiple words and passeq"}         | ${"כְּשֶׁ֣בֶת ׀ הַמֶּ֣לֶךְ"}   | ${"kæshævæt hamælæch"}
  ${"mixed with latin chars"}            | ${"אֲבֹותֵינוּ (לְעֹולָם)"}    | ${"avåtæjnu (læålam)"}
  ${"qamets qatan"}                      | ${"כָּל הָעוֹלָם כָּל־הָעֵ֛ץ"} | ${"kål ha-ålam kål-haætz"}
`("$description", ({ description, hebrew, transliteration }) => {
  const heb = new Text(hebrew);
  const transliteratedHeb = heb.transliterate();
  test(`${description} to equal: ${transliteration}`, () => {
    expect(transliteratedHeb).toEqual(transliteration);
  });
});
