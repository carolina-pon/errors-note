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

const arr2 = [1,2];
const summaryFunc = (num1, num2) => console.log(num1 + num2);

// これを
summaryFunc(arr2[0], arr2[1]);
// スプレッド構文なら下記のように短縮できる
summaryFunc(...arr2);


// ...で順番に展開して、[]で囲んでいるので結果的に新しい配列ができるという理屈
const arr4 = [30,40];
const arr5 = [10,20];

const arr6 = [...arr4];
console.log(arr4);
console.log(arr6);

const arr7 = [...arr4, ...arr5];
arr4[0] = 100;
console.log("ちゃんとできたかな");
console.log(arr4);
console.log(arr7);

const obj4 = {val1: 10, val2: 20};
const obj5 = {val3: 30, val4: 40};
// コピー
const obj6 = {...obj4};
// 結合
const obj7 = {...obj4, ...obj5};

console.log(obj6);
console.log(obj7);

const numArr = [1,2,3,4,5];
const newNumArr = numArr.filter((num) =>{
  return num % 2 === 1;
});
console.log(newNumArr);

// 第二引数を設定できる
const nameArr = ["山田", "永田"];
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// 三項演算子
const val1 = 1 > 0 ? "trueンゴ" : "falseンゴ";
console.log(val1);

