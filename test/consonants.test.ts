import { Text } from "../src/index";

// test for sprirantized consonants and some sibilants

describe.each`
  description                  | hebrew      | transliteration
  ${"spirantized bet"}         | ${"אָב"}    | ${"av"}
  ${"unspirantized bet"}       | ${"בָּם"}   | ${"bam"}
  ${"spirantized kaf"}         | ${"לֵךְ"}   | ${"læch"}
  ${"unspirantized kaf"}       | ${"כָּמָר"} | ${"kamar"}
  ${"spirantized peh"}         | ${"אֶלֶף"}  | ${"ælæf"}
  ${"unspirantized peh"}       | ${"פֹּה"}   | ${"påh"}
  ${"shin char plur shin dot"} | ${"שֶׁלֶם"}  | ${"shælæm"}
  ${"shin char plur sin dot"}  | ${"אָרַשׂ"}  | ${"aras"}
  ${"word initial samech"}     | ${"סַד"}    | ${"sad"}
`("$description", ({ hebrew, transliteration }) => {
  const heb = new Text(hebrew);
  const transliteratedHeb = heb.transliterate();
  test(`${hebrew} to equal: ${transliteration}`, () => {
    expect(transliteratedHeb).toEqual(transliteration);
  });
});
