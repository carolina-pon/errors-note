// 2-3
function sayGoodevening( ){
  return "こんばんは";
}
const month =  1;

const message = `皆さん${sayGoodevening( )}！今日から${month * 4}月ですよ〜〜`;
console.log(message);

// 従来の関数1
function func1(value) {
  return value;
}
// 出力結果
console.log(func1("func1です"));

// 従来の関数2
const finc1 = function (value) {
  return value;
}
// 出力結果
console.log(finc1("func1です"));

// アロー関数
// 引数1つなら、カッコ省略できる。2つ以上なら(aa,bb)みたいに区切る
// 処理が単一行で返却ならreturnも省略できる
const func2 = (value) => {
  return value;
}
// ↑function宣言要らなーい！！
console.log(func2("func2です"));

const func3 = value => value;
console.log(func3("func3です"));

// カッコで囲んで1行としてまとめる
const func4 = (val1, val2) => (
{
  name: val1,
  age: val2,
}
)
console.log(func4("りな", 24)); 

// 2-4

const myProfile = {
  name: "りな",
  age: 24
};

const {name, age} = myProfile;
const messages = `ワイは${name}や。年は${age}ンゴ。`;
console.log(messages);


const myCat = ["はる", 1];
// const greeting = `うちの猫の名前は${myCat[0]}です。年齢は${myCat[1]}歳です。`
// console.log(greeting);
const [catname, catage] = myCat;
const greeting = `猫は${catname}です。歳は${catage}歳です`;
console.log(greeting);

const sayHello = (name = "guest") => console.log(`こんにちは！！${name}さん`);
sayHello("ちーちゃん");
sayHello();

const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);
