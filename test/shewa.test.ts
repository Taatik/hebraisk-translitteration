import { Text } from "../src/index";

describe.each`
  description       | hebrew       | transliteration
  ${"vocal shewa"}  | ${"זְמָר"}   | ${"zæmar"}
  ${"silent shewa"} | ${"אַגְמֹן"} | ${"agmån"}
  ${"final shewa"}  | ${"לֵךְ"}    | ${"læch"}
  ${"sqnmlwy form"} | ${"וַיְהִי"} | ${"vajæhi"}
`("$description", ({ description, hebrew, transliteration }) => {
  const heb = new Text(hebrew);
  const transliteratedHeb = heb.transliterate();
  test(`${description} to equal: ${transliteration}`, () => {
    expect(transliteratedHeb).toEqual(transliteration);
  });
});
