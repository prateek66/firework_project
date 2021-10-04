module.exports = function(t)
{
var text = t;
text = text.replace(/,/g, ">");

text = text.replace(/ஜௌ/g, "n\[s");
text = text.replace(/ஜோ/g, "N\[h");
text = text.replace(/ஜொ/g, "n\[h");
text = text.replace(/ஜா/g, "\[h");
text = text.replace(/ஜி/g, "\[p");
text = text.replace(/ஜீ/g, "\[P");
text = text.replace(/ஜு/g, "\[{");
text = text.replace(/ஜூ/g, "\[_");
text = text.replace(/ஜெ/g, "n\[");
text = text.replace(/ஜே/g, "N\[");
text = text.replace(/ஜை/g, "i\[");
text = text.replace(/ஜ்/g, "\[;");
text = text.replace(/ஜ/g, "\[");

text = text.replace(/கௌ/g, "nfs");
text = text.replace(/கோ/g, "Nfh");
text = text.replace(/கொ/g, "nfh");
text = text.replace(/கா/g, "fh");
text = text.replace(/கி/g, "fp");
text = text.replace(/கீ/g, "fP");
text = text.replace(/கு/g, "F");
text = text.replace(/கூ/g, "$");
text = text.replace(/கெ/g, "nf");
text = text.replace(/கே/g, "Nf");
text = text.replace(/கை/g, "if");
text = text.replace(/க்/g, "f;");
text = text.replace(/க/g, "f");


text = text.replace(/ஙௌ/g, "nqs");
text = text.replace(/ஙோ/g, "Nqh");
text = text.replace(/ஙொ/g, "nqh");
text = text.replace(/ஙா/g, "qh");
text = text.replace(/ஙி/g, "qp");
text = text.replace(/ஙீ/g, "qP");
text = text.replace(/ஙு/g, "*");
text = text.replace(/ஙூ/g, "*");
text = text.replace(/ஙெ/g, "nq");
text = text.replace(/ஙே/g, "Nq");
text = text.replace(/ஙை/g, "iq");
text = text.replace(/ங்/g, "q;");
text = text.replace(/ங/g, "q");



text = text.replace(/சௌ/g, "nrs");
text = text.replace(/சோ/g, "Nrh");
text = text.replace(/சொ/g, "nrh");
text = text.replace(/சா/g, "rh");
text = text.replace(/சி/g, "rp");
text = text.replace(/சீ/g, "rP");
text = text.replace(/சு/g, "R");
text = text.replace(/சூ/g, "R+");
text = text.replace(/செ/g, "nr");
text = text.replace(/சே/g, "Nr");
text = text.replace(/சை/g, "ir");
text = text.replace(/ச்/g, "r;");
text = text.replace(/ச/g, "r");


text = text.replace(/ஞௌ/g, "nQs");
text = text.replace(/ஞோ/g, "NQh");
text = text.replace(/ஞொ/g, "nQh");
text = text.replace(/ஞா/g, "Qh");
text = text.replace(/ஞி/g, "Qp");
text = text.replace(/ஞீ/g, "QP");
text = text.replace(/ஞு/g, "*");
text = text.replace(/ஞூ/g, "*");
text = text.replace(/ஞெ/g, "nQ");
text = text.replace(/ஞே/g, "NQ");
text = text.replace(/ஞை/g, "iQ");
text = text.replace(/ஞ்/g, "Q;");
text = text.replace(/ஞ/g, "Q");



text = text.replace(/டௌ/g, "nls");
text = text.replace(/டோ/g, "Nlh");
text = text.replace(/டொ/g, "nlh");
text = text.replace(/டா/g, "lh");
text = text.replace(/டி/g, "b");
text = text.replace(/டீ/g, "B");
text = text.replace(/டு/g, "L");
text = text.replace(/டூ/g, "^");
text = text.replace(/டெ/g, "nl");
text = text.replace(/டே/g, "Nl");
text = text.replace(/டை/g, "il");
text = text.replace(/ட்/g, "l;");
text = text.replace(/ட/g, "l");


text = text.replace(/ணௌ/g, "nzs");
text = text.replace(/ணோ/g, "Nzh");
text = text.replace(/ணொ/g, "nzh");
text = text.replace(/ணா/g, "zh");
text = text.replace(/ணி/g, "zp");
text = text.replace(/ணீ/g, "zP");
text = text.replace(/ணு/g, "Z");
text = text.replace(/ணூ/g, "Z}");
text = text.replace(/ணெ/g, "nz");
text = text.replace(/ணே/g, "Nz");
text = text.replace(/ணை/g, "iz");
text = text.replace(/ண்/g, "z;");
text = text.replace(/ண/g, "z");

text = text.replace(/தௌ/g, "njs");
text = text.replace(/தோ/g, "Njh");
text = text.replace(/தொ/g, "njh");
text = text.replace(/தா/g, "jh");
text = text.replace(/தி/g, "jp");
text = text.replace(/தீ/g, "jP");
text = text.replace(/து/g, "J");
text = text.replace(/தூ/g, "J}");
text = text.replace(/தெ/g, "nj");
text = text.replace(/தே/g, "Nj");
text = text.replace(/தை/g, "ij");
text = text.replace(/த்/g, "j;");
text = text.replace(/த/g, "j");



text = text.replace(/நௌ/g, "nes");
text = text.replace(/நோ/g, "Neh");
text = text.replace(/நொ/g, "neh");
text = text.replace(/நா/g, "eh");
text = text.replace(/நி/g, "ep");
text = text.replace(/நீ/g, "eP");
text = text.replace(/நு/g, "E");
text = text.replace(/நூ/g, "E}");
text = text.replace(/நெ/g, "ne");
text = text.replace(/நே/g, "Ne");
text = text.replace(/நை/g, "ie");
text = text.replace(/ந்/g, "e;");
text = text.replace(/ந/g, "e");


text = text.replace(/னௌ/g, "nds");
text = text.replace(/னோ/g, "Ndh");
text = text.replace(/னொ/g, "ndh");
text = text.replace(/னா/g, "dh");
text = text.replace(/னி/g, "dp");
text = text.replace(/னீ/g, "dP");
text = text.replace(/னு/g, "D");
text = text.replace(/னூ/g, "D}");
text = text.replace(/னெ/g, "nd");
text = text.replace(/னே/g, "Nd");
text = text.replace(/னை/g, "id");
text = text.replace(/ன்/g, "d;");
text = text.replace(/ன/g, "d");


text = text.replace(/பௌ/g, "ngs");
text = text.replace(/போ/g, "Ngh");
text = text.replace(/பொ/g, "ngh");
text = text.replace(/பா/g, "gh");
text = text.replace(/பி/g, "gp");
text = text.replace(/பீ/g, "gP");
text = text.replace(/பு/g, "G");
text = text.replace(/பூ/g, "G+");
text = text.replace(/பெ/g, "ng");
text = text.replace(/பே/g, "Ng");
text = text.replace(/பை/g, "ig");
text = text.replace(/ப்/g, "g;");
text = text.replace(/ப/g, "g");


text = text.replace(/மௌ/g, "nks");
text = text.replace(/மோ/g, "Nkh");
text = text.replace(/மொ/g, "nkh");
text = text.replace(/மா/g, "kh");
text = text.replace(/மி/g, "kp");
text = text.replace(/மீ/g, "kP");
text = text.replace(/மு/g, "K");
text = text.replace(/மூ/g, "%");
text = text.replace(/மெ/g, "nk");
text = text.replace(/மே/g, "Nk");
text = text.replace(/மை/g, "ik");
text = text.replace(/ம்/g, "k;");
text = text.replace(/ம/g, "k");


text = text.replace(/யௌ/g, "nas");
text = text.replace(/யோ/g, "Nah");
text = text.replace(/யொ/g, "nah");
text = text.replace(/யா/g, "ah");
text = text.replace(/யி/g, "ap");
text = text.replace(/யீ/g, "aP");
text = text.replace(/யு/g, "A");
text = text.replace(/யூ/g, "A+");
text = text.replace(/யெ/g, "na");
text = text.replace(/யே/g, "Na");
text = text.replace(/யை/g, "ia");
text = text.replace(/ய்/g, "a;");
text = text.replace(/ய/g, "a");

text = text.replace(/ரௌ/g, "nus");
text = text.replace(/ரோ/g, "Nuh");
text = text.replace(/ரொ/g, "nuh");
text = text.replace(/ரா/g, "uh");
text = text.replace(/ரி/g, "up");
text = text.replace(/ரீ/g, "uP");
text = text.replace(/ரு/g, "U");
text = text.replace(/ரூ/g, "\&");
text = text.replace(/ரெ/g, "nu");
text = text.replace(/ரே/g, "Nu");
text = text.replace(/ரை/g, "iu");
text = text.replace(/ர்/g, "u;");
text = text.replace(/ர/g, "u");


text = text.replace(/லௌ/g, "nys");
text = text.replace(/லோ/g, "Nyh");
text = text.replace(/லொ/g, "nyh");
text = text.replace(/லா/g, "yh");
text = text.replace(/லி/g, "yp");
text = text.replace(/லீ/g, "yP");
text = text.replace(/லு/g, "Y");
text = text.replace(/லூ/g, "Y}");
text = text.replace(/லெ/g, "ny");
text = text.replace(/லே/g, "Ny");
text = text.replace(/லை/g, "iy");
text = text.replace(/ல்/g, "y;");
text = text.replace(/ல/g, "y");


text = text.replace(/ளௌ/g, "nss");
text = text.replace(/ளோ/g, "Nsh");
text = text.replace(/ளொ/g, "nsh");
text = text.replace(/ளா/g, "sh");
text = text.replace(/ளி/g, "sp");
text = text.replace(/ளீ/g, "sP");
text = text.replace(/ளு/g, "S");
text = text.replace(/ளூ/g, "Sh");
text = text.replace(/ளெ/g, "ns");
text = text.replace(/ளே/g, "Ns");
text = text.replace(/ளை/g, "is");
text = text.replace(/ள்/g, "s;");
text = text.replace(/ள/g, "s");

text = text.replace(/வௌ/g, "nts");
text = text.replace(/வோ/g, "Nth");
text = text.replace(/வொ/g, "nth");
text = text.replace(/வா/g, "th");
text = text.replace(/வி/g, "tp");
text = text.replace(/வீ/g, "tP");
text = text.replace(/வு/g, "T");
text = text.replace(/வூ/g, "T+");
text = text.replace(/வெ/g, "nt");
text = text.replace(/வே/g, "Nt");
text = text.replace(/வை/g, "it");
text = text.replace(/வ்/g, "t;");
text = text.replace(/வ/g, "t");


text = text.replace(/ழௌ/g, "nos");
text = text.replace(/ழோ/g, "Noh");
text = text.replace(/ழொ/g, "noh");
text = text.replace(/ழா/g, "oh");
text = text.replace(/ழி/g, "op");
text = text.replace(/ழீ/g, "oP");
text = text.replace(/ழு/g, "O");
text = text.replace(/ழூ/g, "*");
text = text.replace(/ழெ/g, "no");
text = text.replace(/ழே/g, "No");
text = text.replace(/ழை/g, "io");
text = text.replace(/ழ்/g, "o;");
text = text.replace(/ழ/g, "o");

text = text.replace(/றௌ/g, "nws");
text = text.replace(/றோ/g, "Nwh");
text = text.replace(/றொ/g, "nwh");
text = text.replace(/றா/g, "wh");
text = text.replace(/றி/g, "wp");
text = text.replace(/றீ/g, "wP");
text = text.replace(/று/g, "W");
text = text.replace(/றூ/g, "W}");
text = text.replace(/றெ/g, "nw");
text = text.replace(/றே/g, "Nw");
text = text.replace(/றை/g, "iw");
text = text.replace(/ற்/g, "w;");
text = text.replace(/ற/g, "w");

text = text.replace(/ஹௌ/g, "n`s");
text = text.replace(/ஹோ/g, "N`h");
text = text.replace(/ஹொ/g, "n`h");
text = text.replace(/ஹா/g, "`h");
text = text.replace(/ஹி/g, "`p");
text = text.replace(/ஹீ/g, "`P");
text = text.replace(/ஹு/g, "{`");
text = text.replace(/ஹூ/g, "`_");
text = text.replace(/ஹெ/g, "n`");
text = text.replace(/ஹே/g, "N`");
text = text.replace(/ஹை/g, "i`");
text = text.replace(/ஹ்/g, "`;");
text = text.replace(/ஹ/g, "`");

text = text.replace(/ஷௌ/g, "n\\s");
text = text.replace(/ஷோ/g, "N\\h");
text = text.replace(/ஷொ/g, "n\\h");
text = text.replace(/ஷா/g, "\\h");
text = text.replace(/ஷி/g, "\\p");
text = text.replace(/ஷீ/g, "\\P");
text = text.replace(/ஷு/g, "\{");
text = text.replace(/ஷூ/g, "\\\_");
text = text.replace(/ஷெ/g, "n\\");
text = text.replace(/ஷே/g, "N\\");
text = text.replace(/ஷை/g, "i\\");
text = text.replace(/ஷ்/g, "\\;");
text = text.replace(/ஷ/g, "\\");

text = text.replace(/ஸௌ/g, "n]s");
text = text.replace(/ஸோ/g, "N]h");
text = text.replace(/ஸொ/g, "n]h");
text = text.replace(/ஸா/g, "]h");
text = text.replace(/ஸி/g, "]p");
text = text.replace(/ஸீ/g, "]P");
text = text.replace(/ஸு/g, "]{");
text = text.replace(/ஸூ/g, "]_");
text = text.replace(/ஸெ/g, "n]");
text = text.replace(/ஸே/g, "N]");
text = text.replace(/ஸை/g, "i]");
text = text.replace(/ஸ்/g, "];");
text = text.replace(/ஸ/g, "]");


text = text.replace(/அ/g, "m");
text = text.replace(/ஆ/g, "M");
text = text.replace(/இ/g, ",");
text = text.replace(/ஈ/g, "<");
text = text.replace(/உ/g, "c");
text = text.replace(/ஊ/g, "C");
text = text.replace(/எ/g, "v");
text = text.replace(/ஏ/g, "V");
text = text.replace(/ஐ/g, "I");
text = text.replace(/ஒ/g, "x")
text = text.replace(/ஓ/g, "X");
text = text.replace(/ஔ/g, "xs");
text = text.replace(/ஃ/g, "\/");
text = text.replace(/ஸ்ரீ/g, "=");

text = text.replace(/வூ/g, "t+");
text = text.replace(/பூ/g, "G+");
text = text.replace(/யூ/g, "A+");
text = text.replace(/ஹு/g, "`{");
text = text.replace(/ஜு/g, "[{");
text = text.replace(/ஸு/g, "]{");
text = text.replace(/ஷு/g, "\{");
text = text.replace(/யூ/g, "A+");
text = text.replace(/ா/g, "h");
text = text.replace(/ெ/g, "n");
text = text.replace(/ே/g, "N");
text = text.replace(/ை/g, "i");
text = text.replace(/ு/g, "{");
text = text.replace(/ூ/g, "_");
text = text.replace(/ி/g, "p");
text = text.replace(/ீ/g, "P");

return text;
}