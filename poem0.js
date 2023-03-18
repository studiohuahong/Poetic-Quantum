function poem0(){
   //----------------
  //取词1
  let quantum_1 = random(arr);
  let qSubStringDivide = Math.floor(random(0, 5));
  let qSubString = quantum_1.substring(qSubStringDivide, qSubStringDivide + 4);
  // 十进制转二进制，只会有1-15，所以每个词library只有15个词
  let finalValue_1 =
    Number(qSubString.substring(0, 1)) * 8 +
    Number(qSubString.substring(1, 2)) * 4 +
    Number(qSubString.substring(2, 3)) * 2 +
    Number(qSubString.substring(3)) * 1;
  
  // console
  // console.log(quantum_1);
  // console.log(qSubString);
  // console.log(finalValue_1);

  //取词2
  let quantum_2 = random(arr);
  qSubStringDivide = Math.floor(random(0, 5));
  qSubString = quantum_2.substring(qSubStringDivide, qSubStringDivide + 4);
  // 十进制转二进制，只会有1-15，所以每个词library只有15个词
  let finalValue_2 =
    Number(qSubString.substring(0, 1)) * 8 +
    Number(qSubString.substring(1, 2)) * 4 +
    Number(qSubString.substring(2, 3)) * 2 +
    Number(qSubString.substring(3)) * 1;
  
  // console
  // console.log(quantum_2);
  // console.log(qSubString);
  // console.log(finalValue_2);

  //取词3
  let quantum_3 = random(arr);
  qSubStringDivide = Math.floor(random(0, 5));
  qSubString = quantum_3.substring(qSubStringDivide, qSubStringDivide + 4);
  // 十进制转二进制，只会有1-15，所以每个词library只有15个词
  let finalValue_3 =
    Number(qSubString.substring(0, 1)) * 8 +
    Number(qSubString.substring(1, 2)) * 4 +
    Number(qSubString.substring(2, 3)) * 2 +
    Number(qSubString.substring(3)) * 1;
  
  // console
  // console.log(quantum_3);
  // console.log(qSubString);
  // console.log(finalValue_3);

  //取词4
  let quantum_4 = random(arr);
  qSubStringDivide = Math.floor(random(0, 5));
  qSubString = quantum_4.substring(qSubStringDivide, qSubStringDivide + 4);
  // 十进制转二进制，只会有1-15，所以每个词library只有15个词
  let finalValue_4 =
    Number(qSubString.substring(0, 1)) * 8 +
    Number(qSubString.substring(1, 2)) * 4 +
    Number(qSubString.substring(2, 3)) * 2 +
    Number(qSubString.substring(3)) * 1;
  
  // console
  // console.log(quantum_4);
  // console.log(qSubString);
  // console.log(finalValue_4);
//--------------
  
  
  
  // poem template_1
  let lib1_1 = ["a quantum computer", "a quantum scientist", "silver", "golden", "rosy", "black", "red","a function", "an instruction", "memory", "a message", "a node",  "the rule", "a script", "a token"
  ];
    let lib1_2 = ["a quantum computer", "a quantum scientist", "silver", "golden", "rosy", "black", "red","a function", "an instruction", "memory", "a message", "a node",  "the rule", "a script", "a token"
  ];
      let lib1_3 = ["a quantum computer", "a quantum scientist", "silver", "golden", "rosy", "black", "red","a function", "an instruction", "memory", "a message", "a node",  "the rule", "a script", "a token"
  ];
      let lib1_4 = ["a quantum computer", "a quantum scientist", "silver", "golden", "rosy", "black", "red","a function", "an instruction", "memory", "a message", "a node",  "the rule", "a script", "a token"
  ];

   makeVerb();

  line1 = "I am " + lib1_1[finalValue_1]+",";
  line2 = "I "+verb+" " + lib1_2[finalValue_2]+",";
  line3 = "I see " + lib1_3[finalValue_3]+",";
  line4 = "I am afraid of " + lib1_4[finalValue_4]+".";

  // style
  //background(0);
  fill(255,255,255,200);
  textSize(30);
  textFont(IBMfont);
  textAlign(CENTER, CENTER);
  text(line1, width/2, height/2-150);
  text(line2, width/2, height/2-50);
  text(line3, width/2, height/2+50);
  text(line4, width/2, height/2+150);

  //noLoop();
  
  function makeVerb(){


  var string = random(arr);
  var a = string.substring(0, 3);
  var b = string.substring(2, 6);
  let v = "a";
  let c = "b";

  if (a == "000") {
    v = "a";
  } else if (a == "001") {
    v = "e";
  } else if (a == "010") {
    v = "i";
  } else if (a == "011") {
    v = "o";
  } else if (a == "100") {
    v = "un";
  } else if (a == "101") {
    v = "ee";
  } else if (a == "110") {
    v = "oe";
  } else if (a == "111") {
    v = "on";
  }

  if (b == "0000") {
    c = "b";
  } else if (b == "0001") {
    c = "d";
  } else if (b == "0010") {
    c = "fl";
  } else if (b == "0011") {
    c = "h";
  } else if (b == "0100") {
    c = "k";
  } else if (b == "0101") {
    c = "l";
  } else if (b == "0110") {
    c = "m";
  } else if (b == "0111") {
    c = "n";
  } else if (b == "1000") {
    c = "pl";
  } else if (b == "1001") {
    c = "r";
  } else if (b == "1010") {
    c = "s";
  } else if (b == "1011") {
    c = "g";
  } else if (b == "1100") {
    c = "j";
  } else if (b == "1101") {
    c = "qu";
  } else if (b == "1110") {
    c = "w";
  } else if (b == "1111") {
    c = "th";
  }

  string = random(arr);
  a = string.substring(0, 3);
  b = string.substring(2, 6);
  let v2 = "a";
  let c2 = "b";

  if (a == "000") {
    v2 = "a";
  } else if (a == "001") {
    v2 = "e";
  } else if (a == "010") {
    v2 = "i";
  } else if (a == "011") {
    v2 = "o";
  } else if (a == "100") {
    v2 = "un";
  } else if (a == "101") {
    v2 = "au";
  } else if (a == "110") {
    v2 = "u";
  } else if (a == "111") {
    v2 = "ie";
  }

  if (b == "0000") {
    c2 = "b";
  } else if (b == "0001") {
    c2 = "d";
  } else if (b == "0010") {
    c2 = "f";
  } else if (b == "0011") {
    c2 = "th";
  } else if (b == "0100") {
    c2 = "k";
  } else if (b == "0101") {
    c2 = "l";
  } else if (b == "0110") {
    c2 = "m";
  } else if (b == "0111") {
    c2 = "n";
  } else if (b == "1000") {
    c2 = "p";
  } else if (b == "1001") {
    c2 = "r";
  } else if (b == "1010") {
    c2 = "s";
  } else if (b == "1011") {
    c2 = "b";
  } else if (b == "1100") {
    c2 = "d";
  } else if (b == "1101") {
    c2 = "h";
  } else if (b == "1110") {
    c2 = "t";
  } else if (b == "1111") {
    c2 = "r";
  }

  verb = c+v+c2+v2;
  console.log(verb);
}}