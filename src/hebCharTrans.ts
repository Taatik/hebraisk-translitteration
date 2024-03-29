type Dict = { [key: string]: string };

export const transliterateMap: Dict = {
  //   niqqud
  "\u{05B0}": "æ", // HEBREW POINT SHEVA (U+05B0)
  "\u{05B1}": "æ", // HEBREW POINT HATAF SEGOL (U+05B1)
  "\u{05B2}": "a", // HEBREW POINT HATAF PATAH (U+05B2)
  "\u{05B3}": "a", // HEBREW POINT HATAF QAMATS (U+05B3)
  "\u{05B4}": "i", // HEBREW POINT HIRIQ (U+05B4)
  "\u{05B5}": "æ", // HEBREW POINT TSERE (U+05B5)
  "\u{05B6}": "æ", // HEBREW POINT SEGOL (U+05B6)
  "\u{05B7}": "a", // HEBREW POINT PATAH (U+05B7)
  "\u{05B8}": "a", // HEBREW POINT QAMATS (U+05B8)
  "\u{05B9}": "å", // HEBREW POINT HOLAM (U+05B9)
  "\u{05BA}": "å", // HEBREW POINT HOLAM HASER FOR VAV (U+05BA)
  "\u{05BB}": "u", // HEBREW POINT QUBUTS (U+05BB)
  "\u{05BC}": "", // HEBREW POINT DAGESH OR MAPIQ (U+05BC)
  "\u{05BD}": "", // HEBREW POINT METEG (U+05BD)
  "\u{05BE}": "-", // HEBREW PUNCTUATION MAQAF (U+05BE)
  "\u{05BF}": "", // HEBREW POINT RAFE (U+05BF)
  "\u{05C0}": "", // HEBREW PUNCTUATION PASEQ (U+05C0)
  "\u{05C1}": "", // HEBREW POINT SHIN DOT (U+05C1)
  "\u{05C2}": "", // HEBREW POINT SIN DOT (U+05C2)
  "\u{05C3}": ".", // HEBREW PUNCTUATION SOF PASUQ (U+05C3)
  "\u{05C4}": "", // HEBREW MARK UPPER DOT (U+05C4)
  "\u{05C5}": "", // HEBREW MARK LOWER DOT (U+05C5)
  "\u{05C6}": "n", // HEBREW PUNCTUATION NUN HAFUKHA (U+05C6)
  "\u{05C7}": "å", // HEBREW POINT QAMATS QATAN (U+05C7)
  //   consonants
  א: "", // HEBREW LETTER ALEF (U+05D0)
  ב: "v", // HEBREW LETTER BET (U+05D1)
  ג: "g", // HEBREW LETTER GIMEL (U+05D2)
  ד: "d", // HEBREW LETTER DALET (U+05D3)
  ה: "h", // HEBREW LETTER HE (U+05D4)
  ו: "v", // HEBREW LETTER VAV (U+05D5)
  ז: "z", // HEBREW LETTER ZAYIN (U+05D6)
  ח: "ch", // HEBREW LETTER HET (U+05D7)
  ט: "t", // HEBREW LETTER TET (U+05D8)
  י: "j", // HEBREW LETTER YOD (U+05D9)
  ך: "ch", // HEBREW LETTER FINAL KAF (U+05DA)
  כ: "ch", // HEBREW LETTER KAF (U+05DB)
  ל: "l", // HEBREW LETTER LAMED (U+05DC)
  ם: "m", // HEBREW LETTER FINAL MEM (U+05DD)
  מ: "m", // HEBREW LETTER MEM (U+05DE)
  ן: "n", // HEBREW LETTER FINAL NUN (U+05DF)
  נ: "n", // HEBREW LETTER NUN (U+05E0)
  ס: "s", // HEBREW LETTER SAMEKH (U+05E1)
  ע: "", // HEBREW LETTER AYIN (U+05E2)
  ף: "f", // HEBREW LETTER FINAL PE (U+05E3)
  פ: "f", // HEBREW LETTER PE (U+05E4)
  ץ: "tz", // HEBREW LETTER FINAL TSADI (U+05E5)
  צ: "tz", // HEBREW LETTER TSADI (U+05E6)
  ק: "k", // HEBREW LETTER QOF (U+05E7)
  ר: "r", // HEBREW LETTER RESH (U+05E8)
  ש: "s", // HEBREW LETTER SHIN (U+05E9)
  ת: "t", // HEBREW LETTER TAV (U+05EA)
  "\u{05EF}": "", // HEBREW YOD TRIANGLE (U+05EF)
  װ: "", // HEBREW LIGATURE YIDDISH DOUBLE VAV (U+05F0)
  ױ: "", // HEBREW LIGATURE YIDDISH VAV YOD (U+05F1)
  ײ: "", // HEBREW LIGATURE YIDDISH DOUBLE YOD (U+05F2)
  // consonants w/ dagesh
  בּ: "b",
  גּ: "g",
  דּ: "d",
  כּ: "k",
  ךּ: "k",
  פּ: "p",
  וּ: "u",
  שׁ: "sh"
};
