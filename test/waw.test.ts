import { Text } from "../src/index";

describe.each`
  description                              | hebrew           | transliteration
  ${"consonantal waw"}                     | ${"וָו"}         | ${"vav"}
  ${"waw haser (holem precedes waw)"}      | ${"שָׁלֹום"}      | ${"shalåm"}
  ${"waw haser (holem proceeds waw)"}      | ${"שָׁלוֹם"}     | ${"shalåm"}
  ${"shureq"}                              | ${"קוּם"}        | ${"kum"}
  ${"initial shureq"}                      | ${"וּבָם"}       | ${"uvam"}
  ${"initial shureq followed by shewa"}    | ${"וּלְזַמֵּ֖ר"} | ${"ulzamær"}
  ${"Consonantal vav with holem as vowel"} | ${"עָוֹן"}       | ${"avån"}
`("$description", ({ description, hebrew, transliteration }) => {
  const heb = new Text(hebrew);
  const transliteratedHeb = heb.transliterate();
  test(`${description} to equal: ${transliteration}`, () => {
    expect(transliteratedHeb).toEqual(transliteration);
  });
});
