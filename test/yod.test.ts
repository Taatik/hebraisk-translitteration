import { Text } from "../src/index";

describe.each`
  description                                  | hebrew             | transliteration
  ${"consonantal yod"}                         | ${"יָם"}           | ${"jam"}
  ${"const yod with hiriq as vowel"}           | ${"יַיִן"}         | ${"jajin"}
  ${"hiriq yod: medial"}                       | ${"עִיר"}          | ${"ir"}
  ${"hiriq yod: final"}                        | ${"אֲנִי"}         | ${"ani"}
  ${"hiriq yod: final with maqqef"}            | ${"וַֽיְהִי־כֵֽן"} | ${"vajæhi-chæn"}
  ${"hiriq followed by const yod (fake word)"} | ${"רִיֵּם"}        | ${"rijæm"}
  ${"medial tsere-yod"}                        | ${"אֵין"}          | ${"æjn"}
  ${"final tsere-yod"}                         | ${"רִגְעֵי"}       | ${"rigæj"}
`("$description", ({ description, hebrew, transliteration }) => {
  const heb = new Text(hebrew);
  const transliteratedHeb = heb.transliterate();
  test(`${description} to equal: ${transliteration}`, () => {
    expect(transliteratedHeb).toEqual(transliteration);
  });
});
